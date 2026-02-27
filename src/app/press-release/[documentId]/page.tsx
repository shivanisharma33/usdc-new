import type { Metadata } from 'next';
import PressReleaseDetail from '@/views/Pressreleasedetail';

type Params = {
  documentId: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { documentId } = await params;

  return {
    title: `Press Release ${documentId}`,
    description: 'Detailed press release from USDC press center.',
    openGraph: {
      title: `Press Release ${documentId} | USDC`,
      description: 'Detailed press release from USDC press center.',
      type: 'article',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { documentId } = await params;
  return <PressReleaseDetail documentId={documentId} />;
}
