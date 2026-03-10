'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CookieModalProps {
  onClose: () => void;
}

const CookieModal = ({ onClose }: CookieModalProps) => {
  const [prefs, setPrefs] = useState({
    necessary: true,
    performance: false,
    advertising: false,
  });

  const toggle = (key: keyof typeof prefs) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-6 space-y-6"
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-all"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        <h2 className="text-2xl font-black text-slate-900">Manage Cookies</h2>

        <div className="space-y-6">
          {/* necessary */}
          <div className="space-y-1 pb-4 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Necessary</span>
              <span className="text-xs text-slate-400">Always on</span>
            </div>
            <p className="text-sm text-slate-600">
              Required to enable core site functionality and to remember user preferences
              and choices, such as language preferences or customized settings.
            </p>
          </div>

          {/* performance */}
          <div className="space-y-1 pb-4 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Performance and Analytics</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={prefs.performance}
                  onChange={() => toggle('performance')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
                <span className="ml-2 text-sm text-slate-500">
                  {prefs.performance ? 'On' : 'Off'}
                </span>
              </label>
            </div>
            <p className="text-sm text-slate-600">
              These cookies provide quantitative measures of website visitors. With the usage
              of these cookies we are able to count visits and traffic sources to improve the
              performance of our site.
            </p>
          </div>

          {/* advertising */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900">Advertising</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={prefs.advertising}
                  onChange={() => toggle('advertising')}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-600 transition-colors" />
                <span className="ml-2 text-sm text-slate-500">
                  {prefs.advertising ? 'On' : 'Off'}
                </span>
              </label>
            </div>
            <p className="text-sm text-slate-600">
              These cookies are used by advertising companies to serve ads that are relevant
              to your interests.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-5 py-2 bg-[#40D1FB] hover:bg-[#0EA5E9] text-white font-semibold rounded-lg transition-colors">
            Save Preferences
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CookieModal;
