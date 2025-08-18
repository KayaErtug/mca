/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white-10-opacity */
        input: "var(--color-input)", /* surface */
        ring: "var(--color-ring)", /* teal-green-accent */
        background: "var(--color-background)", /* true-dark-base */
        foreground: "var(--color-foreground)", /* white */
        primary: {
          DEFAULT: "var(--color-primary)", /* teal-green-accent */
          foreground: "var(--color-primary-foreground)", /* true-dark-base */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* elevated-surface */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* deep-charcoal */
          foreground: "var(--color-muted-foreground)", /* purple-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* teal-green-accent */
          foreground: "var(--color-accent-foreground)", /* true-dark-base */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* secondary */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* surface */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-500 */
          foreground: "var(--color-warning-foreground)", /* true-dark-base */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        // Brand specific colors
        'crypto-dark': '#0F1014', /* true-dark-base */
        'crypto-charcoal': '#1A1B23', /* deep-charcoal */
        'crypto-surface': '#1E2028', /* surface */
        'crypto-elevated': '#2A2D3A', /* elevated-surface */
        'crypto-accent': '#00D4AA', /* teal-green-accent */
        'crypto-text-secondary': '#A0A3BD', /* purple-gray */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'crypto-sm': 'var(--shadow-sm)',
        'crypto-md': 'var(--shadow-md)',
        'crypto-lg': 'var(--shadow-lg)',
        'crypto-xl': 'var(--shadow-xl)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0.0, 0.6, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      transitionTimingFunction: {
        'crypto': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}