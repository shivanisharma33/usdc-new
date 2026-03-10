'use client';

import { useRouter } from 'next/navigation';
import CookieModal from '../../components/CookieModal';

export default function CookiesPage() {
  const router = useRouter();
  return <CookieModal onClose={() => router.back()} />;
}
