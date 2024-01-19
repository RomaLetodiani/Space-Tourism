/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        white: '#FFFFFF',
      },
      fontSize: {
        head1: '150px',
        head2: '100px',
        head3: '56px',
        head4: '32px',
        head5: '28px',
        head6: '14px',
      },
      fontFamily: {
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      backgroundImage: {
        'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'destination-desktop':
          "url('./assets/destination/background-destination-desktop.jpg')",
        'destination-tablet':
          "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-mobile':
          "url('./assets/destination/background-destination-mobile.jpg')",
        'crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'technology-desktop':
          "url('./assets/technology/background-technology-desktop.jpg')",
        'technology-tablet':
          "url('./assets/technology/background-technology-tablet.jpg')",
        'technology-mobile':
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
