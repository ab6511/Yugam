/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0D12',
          card: '#131722',
          elevated: '#1A2030',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        surface: {
          DEFAULT: '#131722',
          light: '#1A2030',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        indigo: {
          electric: '#6366F1',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        amber: {
          vibrant: '#F59E0B',
          glow: 'rgba(245, 158, 11, 0.35)',
        },
        slate: {
          offwhite: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'indigo-glow': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'amber-glow': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
