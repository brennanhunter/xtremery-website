"use client";

import { useState } from 'react';

export default function ReviewsSection() {
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  const allReviews = [
    {
      name: "Uffe Peter Walderö",
      rating: 5,
      date: "3 weeks ago",
      text: "I got good help and support during my PC upgrade project from Xtremery.",
      response: "Hey Uffe, I really appreciate you giving me the opportunity to help you. I hope you are able to make some really cool videos now."
    },
    {
      name: "Susette Schabarker",
      rating: 5,
      date: "4 weeks ago", 
      text: "Simply Excellent! I am utilizing Hunter at Xtremery for my website project and couldn't be happier with the professional service.",
      response: "Wow Sue, that is such a nice thing to hear. I really appreciate you giving me a chance to help build this website with you. I can't wait to see the results of what we are building."
    },
    {
      name: "Dawn Woody",
      rating: 5,
      date: "6 weeks ago",
      text: "Excellent service. Very knowledgeable. Highly recommend.",
      response: "Hey Dawn, I appreciate the review very much. I look forward to helping you with any computer issues you have for a long time!"
    },
    {
      name: "Joseph Russo",
      rating: 5,
      date: "6 weeks ago",
      text: "Hunter was able to resolve my computer issues after a hacker was able to infiltrate all of my personal information. Professional service and great communication throughout the process.",
      response: "Hey Joe! I really appreciate you giving me a review and trusting me to help with your computer. As a very early customer, your support means everything to me."
    },
    {
      name: "Ryan Upchurch",
      rating: 5,
      date: "7 weeks ago",
      text: "Incredible service! Showed real patience with me. Taught me a lot! It's like having a private IT department! If you need anything computer repair related, this is the place! Also price was very fair! Thank you Hunter!",
      response: "Hey Ryan! It means a lot that you have given me the opportunity to work with you and trusted me to help Upchurch Clockworks. I look forward to always being tech support for you!"
    },
    {
      name: "Desirae Toivonen", 
      rating: 5,
      date: "7 weeks ago",
      text: "I had a great experience getting help with my computer issues. He was incredibly knowledgeable, patient, and took the time to explain everything clearly.",
      response: "Thanks so much, Desirae! I really appreciate your kind words. It was a pleasure helping you out, and I'm glad everything is still running smoothly. If anything else ever comes up, you know where to find me!"
    },
    {
      name: "Dane Patch",
      rating: 5,
      date: "7 weeks ago", 
      text: "Hunter was very helpful when I was setting up my website. Giving me tips how to improve my site function. He was a good listener when I was having trouble setting up certain aspects of my site.",
      response: "Thanks, Dane—I really appreciate that. I know the site's still a work in progress, but I'm glad I could help point you in the right direction."
    },
    {
      name: "Camden Fox",
      rating: 5,
      date: "8 weeks ago",
      text: "Great service and support. Highly recommend!",
      response: null
    }
  ];

  return (
    <>
      {/* Social Proof Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">
            What Your DeLand Neighbors Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <blockquote className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">
                &quot;Hunter was able to resolve my computer issues after a hacker was able to infiltrate all of my personal information.&quot;
              </p>
              <footer className="font-semibold text-purple-600">— Joseph R., DeLand</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">
                &quot;Incredible service! Showed real patience with me. It's like having a private IT department! Price was very fair!&quot;
              </p>
              <footer className="font-semibold text-purple-600">— Ryan U., Orange City</footer>
            </blockquote>
            
            <blockquote className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4">
                &quot;I had a great experience getting help with my computer issues. He was incredibly knowledgeable, patient, and took the time to explain everything.&quot;
              </p>
              <footer className="font-semibold text-purple-600">— Desirae T., DeLand</footer>
            </blockquote>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Join 8+ satisfied customers in Volusia County</p>
            <button 
              onClick={() => setShowReviewsModal(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-purple-700">All Customer Reviews</h3>
              <button 
                onClick={() => setShowReviewsModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6">
              {allReviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-yellow-500">
                          {'⭐'.repeat(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 italic">&quot;{review.text}</p>
                  {review.response && (
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-purple-600 mb-1">Response from Xtremery:</p>
                      <p className="text-sm text-gray-700">{review.response}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-200 text-center">
              <button 
                onClick={() => setShowReviewsModal(false)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}