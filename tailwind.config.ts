import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#FF6BB0',
          secondary: '#FF3385',
          tertiary: '#FF98C5',
        },
        grey: '#f5f5f5',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.2)',
      },
      backgroundImage: {
        services: 'url(/assets/bg.svg)',
        testimonials: 'url(/assets/testimonialBg2.svg)',
        departments: 'url(../../assets/img/departments/bg.svg)',
        quoteLeft: 'url(/assets/quote-left.svg)',
        quoteRight: 'url(/assets/quote-right.svg)',
      },
    },
  },
  plugins: [],
} satisfies Config;
