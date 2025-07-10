import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Custom colors from existing theme
                neutral: {
                    white: '#FFF',
                    black: '#121212',
                    'deep-black': '#000',
                    gray: '#969696',
                    'dark-gray': '#586069',
                    'light-gray': '#dde0e4',
                    'deep-gray': '#414141',
                },
                palette: {
                    red: '#FF5B68',
                    green: '#2AD178',
                    blue: '#406ae0',
                    yellow: '#FABD59',
                },
                // Shadcn colors
                border: '#dde0e4',
                input: '#dde0e4',
                ring: '#406ae0',
                background: '#FFF',
                foreground: '#121212',
                primary: {
                    DEFAULT: '#121212',
                    foreground: '#FFF',
                },
                secondary: {
                    DEFAULT: '#586069',
                    foreground: '#FFF',
                },
                muted: {
                    DEFAULT: '#dde0e4',
                    foreground: '#586069',
                },
                destructive: {
                    DEFAULT: '#FF5B68',
                    foreground: '#FFF',
                },
                accent: {
                    DEFAULT: '#dde0e4',
                    foreground: '#121212',
                },
                card: {
                    DEFAULT: '#FFF',
                    foreground: '#121212',
                },
                popover: {
                    DEFAULT: '#FFF',
                    foreground: '#121212',
                },
            },
            borderRadius: {
                'sm': '0.25rem',  // 4px
                'md': '0.5rem',   // 8px
                'lg': '1rem',     // 16px
                'xl': '1.5rem',
                '2xl': '2rem',
            },
            fontFamily: {
                'nunito': ['"Nunito Sans"', 'sans-serif'],
                'sans': ['"Nunito Sans"', 'sans-serif'],
            },
            fontWeight: {
                'regular': '400',
                'bold': '600',
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1300px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

export default config