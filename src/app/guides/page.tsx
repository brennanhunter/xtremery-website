'use client';

import Header from '../components/Header';
import PCRepairGuides from '../components/PCRepairGuides';
import Footer from '../components/Footer';

export default function PCRepairGuidesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-blue-950">
        <PCRepairGuides />
      </main>
      <Footer />
    </>
  );
}