'use client';

import ImpossibleChallenge from './ChallengesSections/ImpossibleChallenge';
import HeroStory from './ChallengesSections/HeroStory';
import BoxingEvent from './ChallengesSections/BoxingEvent';
import PS5Story from './ChallengesSections/PS5Story';
import NewsletterSection from './ChallengesSections/NewsletterSection';

export default function ChallengeGallery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#F9FAFB] to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(124,58,237,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(29,78,216,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ImpossibleChallenge />
        <HeroStory />
        <BoxingEvent />
        <PS5Story />
        <NewsletterSection />
      </div>
    </section>
  );
}