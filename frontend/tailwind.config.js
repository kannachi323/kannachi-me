module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      animation: {
        'heartbeat': 'scaleUpDown 2s infinite ease-in-out',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
};