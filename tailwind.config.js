module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: ['light'],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
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

      colors: {
        'text-placeholder': '#706D9E',
        'text-orange': '#FF7937',
        'text-color-footer': '#E8E7FF',
        'text-banner': '#F0D5BB',
        'text-btn': '#5D5FEF',
        'text-card': '#57548A',
        'text-normal': '#06033A',
        'bg-home-content': '#E8E7FF',
        'p-detail': '#908FA6',
        'box-login': '#808AFF',
        stroke: '#A5A6F6',
        link: '#9747FF',
        star: '#F8D57E',
        chat: '#7879F1',
        'chat-quotation': '#9794CB',

        // 'stroke-chat': '#A5A6F6',
      },
    },
  },

  plugins: [
    require('daisyui', 'flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
};
