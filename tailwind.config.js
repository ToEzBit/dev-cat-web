module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    // screens: {
    //   desktop: { max: '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   laptop: { max: '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   tablet: { max: '767px' },
    //   // => @media (max-width: 767px) { ... }
    // },
    fontSize: {
      '9xl': ['144px', { lineHeight: '144px' }],
      '8xl': ['128px', { lineHeight: '128px' }],
      '7xl': ['72px', { lineHeight: '72px' }],
      '6xl': ['60px', { lineHeight: '60px' }],
      '5xl': ['48px', { lineHeight: '58px', letterSpacing: '-0.04em' }],
      '4xl': ['30px', { lineHeight: '36px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      lg: ['20px', { lineHeight: '28px' }],
      x: ['18px', { lineHeight: '28px' }],
      base: ['16px', { lineHeight: '24px' }],
      xs: ['14px', { lineHeight: '16px' }],
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
