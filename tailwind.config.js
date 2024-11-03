module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1320px',
        min800: '800px',
      },
      // Custom font family
      fontFamily: {
        sora: ['"Sora"', 'sans-serif'],
      },
      // Custom colors
      colors: {
        'clr-ebony': '#06091A',
        'clr-woodsmoke': '#131313',
        'clr-chartreuse-yellow': '#E7FE29',
      },
      backgroundImage: {
        'news-letter': "url('/src/assets/images/bg-newsletter.png')",
        'hero-pattern': "url('/src/assets/images/bg-shadow.png')",
      },
    },
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
