/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enables the dark mode toggle
    theme: {
        extend: {
            colors: {
                void: 'var(--bg-main)',
                surface: 'var(--bg-surface)',
                primary: 'var(--text-primary)',
                accent: 'var(--text-accent)',
                brand: {
                    primary: 'var(--brand-primary)',
                    accent: 'var(--brand-accent)',
                },
                cyan: {
                    DEFAULT: 'var(--brand-primary)', // Mapping for backward compatibility
                    400: 'var(--brand-primary)',
                    500: 'var(--brand-primary)',
                },
                purple: {
                    DEFAULT: 'var(--brand-accent)', // Mapping for backward compatibility
                    400: 'var(--brand-accent)',
                    500: 'var(--brand-accent)',
                }
            }
        },
        fontSize: {
            base: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        }
    },
    plugins: [],
}
