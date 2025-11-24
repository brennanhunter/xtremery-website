"use client";

import { useState } from 'react';

export default function ReviewsSection() {
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  const allReviews = [
    {
      name: "Jay Ludvigh",
      rating: 5,
      date: "2 days ago",
      text: "I am a person who likes Windows 10 and does not want to buy 2 new computers or be held ransome by Microsoft to extend basic updates for windows 10 for another year. So after a lot of research, I found out that I can continue to use windows 10 for another several years quite safely if I take certain steps which require computer skills which I don't have. After several phone calls talking with business that did not want to discuss my issues, I called Xtremery where my call was answered by Hunter. What a breath of fresh air! He was highly knowledgable, patient, down to earth and interested in actually helping me out with my situation. He also was flexible in getting me into his schedule quickly and very fair in his pricing. Long story short, my goals were 100% met at a very fair price and I have a person that I know I can count on for any and all of my future computer needs. I recomend him highly and without reservations of any kind.",
      response: "Hey Jay, I just want to say thank you for the review, and for your support. It means the world to me and I am glad I can help you make tech do what you want it to, instead of the other way around."
    },
    {
      name: "Huy Higuera",
      rating: 5,
      date: "1 week ago",
      text: "Running into a problem with my computer that I had never seen before, Hunter was able to take in my computer and have it fixed up the next day. He is very good at fixing up computers and very good at communicating what needed to be done. I will be bringing back any computer again if I run into any more trouble.",
      response: "Hey Minh, I really appreciate you leaving the review, and for trusting me with the job. It's always good to see a repeat customer!"
    },
    {
      name: "Sammy Castro",
      rating: 5,
      date: "1 week ago",
      text: "I was looking for someone to come look at my PC because it would not play my games correctly i called about 10 PC repairs shops because it was friday nobody wanted to come and look at it until I called Hunter he was willing to come to my house on Halloween and check out my rig. Hunter is amazing, funny and is willing to teach others the most important thing was he fixed my PC with 1 hour and the price was cheap. I have him coming back to replace some RGB wires in my PC amazing guy with excellent prices he is my PC Tech from today on wouldn't call anyone else. Thanks Hunter",
      response: "Hey Sam, thanks a ton for trusting me with this setup — you've got an awesome rig! Hope streaming's been going smoothly and you're stacking up wins in Battlefield 6."
    },
    {
      name: "Rebecca Leary",
      rating: 5,
      date: "1 week ago",
      text: "I had an old computer that needed to be downloaded. I had certain files that I was concerned about and Hunter took care of that. He transferred it all to new laptop and my world is smiling again! Thanks again Hunter!",
      response: "Hey Becky! I am so glad you decided to work with me, and I am glad we were able to get all of those files to the new laptop safely."
    },
    {
      name: "Ivan Rochel",
      rating: 5,
      date: "1 week ago",
      text: "I went on Google to find a guy that will do a simple job on my PC. I contemplated doing it myself but really wanted professional hands on it. I called Hunter and he did the job fast and correctly. He was cool, straight to the point, and easy to work with. It's nice to have a guy, whether it's a plumber, an electrician, a landscaper, etc. As an adult, you rely on your guys. Now, Hunter is my PC guy for as long as he's doing this. 😎🙂",
      response: "Hey Ivan, thank you so much for the review. I'm glad to be one of the guys! It's true, you really need people you can trust when things don't go as planned. I'm happy to help whenever you need."
    },
    {
      name: "Abel Holmes",
      rating: 5,
      date: "3 weeks ago",
      text: "Fantastic and very quick service! Hunter for sure knows what he's talking about and is a great help! I would recommend him easily to anyone looking for computer repairs or even his website services! Fantastic pricing as well.",
      response: "Hey Abel, thank you so much for the review. I am really glad you decided to work with me, and that you had a good experience."
    },
    {
      name: "Kait Smo",
      rating: 5,
      date: "18 weeks ago",
      text: "HIGHLY RECOMMEND! I spilled a good amount of water on my laptop keyboard and had called the typical repair franchises in town, who all told me that it was probably a lost cause and they didn't even think they could recover the data from my hard drive. Well, Hunter both recovered my data and got my laptop to boot up again! Super glad I brought it to him. Very low pricing, also!",
      response: "Thank you so much Kait! I'm really glad you gave me a shot at it. Those other guys just turned down a great client. If you ever need anything else, let me know."
    },
    {
      name: "Joseph Russo",
      rating: 5,
      date: "28 weeks ago",
      text: "Hunter was able to resolve my computer issues after a hacker was able to infiltrate all of my personal information. He was very helpful and friendly, willing to make multiple house calls to ensure that the issue was resolved. If you need any help with computer issues, he will do an excellent job at a great price.",
      response: "Hey Joe! I really appreciate you giving me a review and trusting me to help with your computer. As a very early customer, your support means everything."
    },
    {
      name: "Ryan Upchurch",
      rating: 5,
      date: "29 weeks ago",
      text: "Incredible service! Showed real patience with me. Taught me alot! Its like having a private IT department! If you need anything computer repair related, this is place! Also price was very fair! Thank you Hunter!",
      response: "Hey Ryan! It means a lot that you have given me the opportunity to work with you and trusted me to help Upchurch Clockworks. I look forward to always being tech support for you!"
    },
    {
      name: "Desirae Toivonen",
      rating: 5,
      date: "29 weeks ago",
      text: "I had a great experience getting help with my computer issues. He was incredibly knowledgeable, patient, and took the time to explain things clearly. What really stood out was that he followed up afterward to make sure everything was still working properly. It's rare to find that level of care and professionalism these days. Highly recommend!",
      response: "Thanks so much, Desirae! I really appreciate your kind words. It was a pleasure helping you out, and I'm glad everything is still running smoothly. If anything else ever comes up, you know where to find me!"
    }
  ];

  return (
    <>
      {/* Social Proof Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">
                What Your DeLand Neighbors Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real customers in Volusia County</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <blockquote className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-yellow-500 mb-3 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                &quot;I was looking for someone to come look at my PC because it would not play my games correctly i called about 10 PC repairs shops because it was friday nobody wanted to come and look at it until I called Hunter he was willing to come to my house on Halloween and check out my rig. Hunter is amazing, funny and is willing to teach others the most important thing was he fixed my PC with 1 hour and the price was cheap. I have him coming back to replace some RGB wires in my PC amazing guy with excellent prices he is my PC Tech from today on wouldn&apos;t call anyone else. Thanks Hunter&quot;
              </p>
              <footer className="font-semibold text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">— Sammy C., DeLand</footer>
            </blockquote>
            
            <blockquote className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-yellow-500 mb-3 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                &quot;HIGHLY RECOMMEND! I spilled a good amount of water on my laptop keyboard and had called the typical repair franchises in town, who all told me that it was probably a lost cause and they didn&apos;t even think they could recover the data from my hard drive. Well, Hunter both recovered my data and got my laptop to boot up again! Super glad I brought it to him. Very low pricing, also!&quot;
              </p>
              <footer className="font-semibold text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">— Kait S., DeLand</footer>
            </blockquote>
            
            <blockquote className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-yellow-500 mb-3 text-xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                &quot;After several phone calls talking with business that did not want to discuss my issues, I called Xtremery where my call was answered by Hunter. What a breath of fresh air! He was highly knowledgable, patient, down to earth and interested in actually helping me out with my situation... Long story short, my goals were 100% met at a very fair price and I have a person that I know I can count on for any and all of my future computer needs. I recomend him highly and without reservations of any kind.&quot;
              </p>
              <footer className="font-semibold text-transparent bg-gradient-to-r from-xtremery-purple to-xtremery-blue bg-clip-text">— Jay L., DeLand</footer>
            </blockquote>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-gray-600 font-medium">
              ⭐ <strong>5.0 Rating</strong> from 30+ satisfied customers in Volusia County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowReviewsModal(true)}
                className="inline-flex items-center justify-center bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Read All Reviews
              </button>
              <a 
                href="https://share.google/wOjP5Gfpb4eCl1hFg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-xtremery-purple border-2 border-xtremery-purple font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-all hover:scale-105"
              >
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowReviewsModal(false)}>
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-xtremery-purple to-xtremery-blue p-6 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold text-white">Customer Reviews</h3>
                <p className="text-purple-100 mt-1">See what DeLand residents are saying</p>
              </div>
              <button 
                onClick={() => setShowReviewsModal(false)}
                className="text-white hover:text-aqua-spark text-3xl transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6">
              {allReviews.map((review, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="text-yellow-500 text-lg">
                          {'⭐'.repeat(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
                  {review.response && (
                    <div className="bg-white p-4 rounded-xl border-l-4 border-xtremery-purple">
                      <p className="text-sm font-semibold text-xtremery-purple mb-2">Response from Hunter @ Xtremery:</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{review.response}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="sticky bottom-0 bg-white p-6 border-t border-gray-200 text-center space-y-4">
              <a 
                href="https://share.google/wOjP5Gfpb4eCl1hFg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-xtremery-purple to-xtremery-blue text-white font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all hover:scale-105 mb-3"
              >
                Leave Your Google Review
              </a>
              <button 
                onClick={() => setShowReviewsModal(false)}
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-full transition-colors"
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