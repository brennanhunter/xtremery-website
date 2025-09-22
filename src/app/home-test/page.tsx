import Image from 'next/image';

export default function HomeTest() {
  return (
    <div className="min-h-screen bg-xtremery-purple flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Purple Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100">
        <Image
          src="/logos/icon-purple.png"
          alt="Purple Icon"
          fill
          className="object-contain"
          quality={100}
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Hero Message - Edge to Edge Xtremery */}
      <div className="text-center w-screen relative z-10">
        <h1 className="text-aqua-spark leading-none whitespace-nowrap" style={{
          fontFamily: 'Handelson Two, serif',
          fontSize: '28vw'
        }}>
          Xtremery
        </h1>
      </div>
    </div>
  );
}