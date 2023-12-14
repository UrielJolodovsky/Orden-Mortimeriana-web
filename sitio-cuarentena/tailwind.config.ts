import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': 'url("/subtle-prism.png")',
        'contact-hr': 'linear-gradient(to right, #ffffff00 0%, #457b9d 50%, #ffffff00 100%)'
      },
    },
  },
  screens:{
    'xs': {"raw": "(min-width: 250px)"},
    'sm': {"raw": "(min-width: 374px)"},
    'md': {"raw": "(min-width: 800px)"},
    'lg': {"raw": "(min-width: 1160px)"},
    'xl': {"raw": "(min-width: 1390px)"},
  },  
  plugins: [],
}
export default config
