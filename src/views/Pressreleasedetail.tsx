'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Download, Share2, ExternalLink, Loader2 } from 'lucide-react';
import ContactUs from '../components/ContactUs';

const API_BASE = 'https://thankful-miracle-1ed8bdfdaf.strapiapp.com/api/press-releases';

type PressReleaseRecord = {
  id: number;
  documentId: string;
  title: string;
  date: string;
  content?: string;
  pdf_file?: {
    url?: string;
  } | null;
};

type PressReleaseApiResponse = {
  data: PressReleaseRecord[];
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  return new Date(dateStr).toISOString().split('T')[0];
};

const getCategory = (title = '') => {
  const t = title.toLowerCase();
  if (t.includes('financial') || t.includes('earnings') || t.includes('q1') || t.includes('q2') || t.includes('q3') || t.includes('q4')) return 'Financial Update';
  if (t.includes('partner') || t.includes('joint venture') || t.includes('collaboration') || t.includes('agreement')) return 'Partnership';
  if (t.includes('appoint') || t.includes('board') || t.includes('director')) return 'Leadership';
  if (t.includes('certif') || t.includes('tier') || t.includes('patent')) return 'Technical Milestone';
  if (t.includes('offering') || t.includes('shares') || t.includes('equity') || t.includes('atm') || t.includes('warrant')) return 'Capital Markets';
  if (t.includes('letter') || t.includes('shareholder')) return 'Shareholder Letter';
  if (t.includes('uplist') || t.includes('cboe') || t.includes('nasdaq') || t.includes('tsx')) return 'Corporate Update';
  if (t.includes('strategic') || t.includes('expan') || t.includes('infrastructure') || t.includes('arms') || t.includes('ai')) return 'Strategic Update';
  return 'Corporate Update';
};

const renderContent = (content = '') => {
  const cleaned = content.replace(/!\[.*?\]\(.*?\)/g, '').trim();
  return cleaned.split(/\n{2,}/).map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      return <h3 key={idx} className="text-base font-bold text-slate-900 mt-6 mb-2">{trimmed.replace(/\*\*/g, '')}</h3>;
    }
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={idx} className="text-slate-600 text-sm leading-relaxed mb-4">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
};

type PressReleaseDetailProps = {
  documentId: string;
};

const PressReleaseDetail = ({ documentId }: PressReleaseDetailProps) => {
  const router = useRouter();

  const [pressRelease, setPressRelease] = useState<PressReleaseRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchRelease = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}?filters[documentId][$eq]=${documentId}&populate=pdf_file`);
        if (!res.ok) throw new Error('Not found');
        const data = (await res.json()) as PressReleaseApiResponse;
        if (data.data?.length > 0) {
          setPressRelease(data.data[0]);
        } else {
          throw new Error('Press release not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Not found');
      } finally {
        setLoading(false);
      }
    };

    fetchRelease();
  }, [documentId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  if (error || !pressRelease) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
        <p className="text-slate-400 font-medium text-sm">Press release not found.</p>
        <button
          onClick={() => router.push('/press-release')}
          className="flex items-center gap-2 text-cyan-500 font-semibold text-sm hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Press Releases
        </button>
      </div>
    );
  }

  const pdfUrl = pressRelease.pdf_file?.url || null;
  const category = getCategory(pressRelease.title);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-10">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.push('/press-release')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-sm transition-all font-semibold text-sm mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Press Releases
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex items-center gap-2 text-slate-500 text-sm mb-4"
          >
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{formatDate(pressRelease.date)}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-start justify-between gap-6 mb-5"
          >
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl">
              {pressRelease.title}
            </h1>

            <div className="flex items-center gap-2 flex-shrink-0 mt-1">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  title="Download PDF"
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-slate-400 hover:shadow-sm flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={handleShare}
                title="Share"
                className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-all shadow-md shadow-cyan-500/30"
              >
                <Share2 className="w-4 h-4" />
              </button>
              {copied && (
                <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider whitespace-nowrap">
                  Copied!
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="inline-flex items-center px-3 py-1.5 bg-cyan-500 text-white rounded-full text-xs font-bold tracking-wide">
              {category}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {pdfUrl ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="w-full rounded-t-2xl overflow-hidden border border-b-0 border-slate-200 shadow-lg"
              style={{ background: '#525659' }}
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH&zoom=100`}
                title={pressRelease.title}
                className="w-full block"
                style={{ height: '820px', border: 'none' }}
              />
            </div>

            <div className="flex flex-col items-center justify-center py-4 gap-1 bg-slate-50 border border-slate-200 rounded-b-2xl">
              <p className="text-slate-400 text-xs">Having trouble viewing the PDF?</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-800 font-semibold text-xs transition-colors"
              >
                Open PDF in new tab <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
              {renderContent(pressRelease.content)}
            </div>
            <p className="text-slate-400 text-xs text-center mt-6 font-medium">
              No PDF document is attached to this press release.
            </p>
          </motion.div>
        )}
      </div>

      <ContactUs />
    </div>
  );
};

export default PressReleaseDetail;
