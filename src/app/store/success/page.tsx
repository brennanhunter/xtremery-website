'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { handelsonTwo, avenir } from '@/app/fonts';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id') || 'N/A';

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h1 className={`${handelsonTwo.className} text-3xl font-bold text-gray-800 mb-4`}>
          Payment Successful!
        </h1>
        <p className={`${avenir.className} text-gray-600 mb-6`}>
          Thank you for your purchase. You should receive an email with your download link shortly.
        </p>
        <div className={`${avenir.className} text-sm text-gray-500 mb-8`}>
          Session ID: {sessionId}
        </div>
        <a
          href="/store"
          className={`${avenir.className} inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors`}
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}