import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-ubuntu)',
      },
      backgroundImage: {
        sidebarMobile: 'url("/bg-sidebar-mobile.svg")',
        sidebarDesktop: 'url("/bg-sidebar-desktop.svg")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
export default config
