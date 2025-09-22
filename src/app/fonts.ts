// src/app/fonts.ts
import localFont from 'next/font/local';

// Handelson fonts - your brand serif fonts
export const handelsonTwo = localFont({
  src: '../../public/fonts/handelson-two.otf',
  variable: '--font-handelson-two',
  display: 'swap',
});

export const handelsonSix = localFont({
  src: '../../public/fonts/handelson-six.otf',
  variable: '--font-handelson-six',
  display: 'swap',
});

export const handelsonFive = localFont({
  src: '../../public/fonts/handelson-five.otf',
  variable: '--font-handelson-five',
  display: 'swap',
});

// Avenir - your brand sans-serif font
export const avenir = localFont({
  src: '../../public/fonts/Avenir Regular.ttf',
  variable: '--font-avenir',
  display: 'swap',
});
