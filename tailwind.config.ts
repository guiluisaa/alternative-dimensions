import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif'],
            },
            colors: {
                neutral: {
                    white: '#FFF',
                    black: '#121212',
                    deepBlack: '#000',

                    gray: '#969696',
                    darkGray: '#586069',
                    lightGray: '#dde0e4',
                    deepGray: '#414141',
                },
                palette: {
                    red: '#FF5B68',
                    green: '#2AD178',
                    blue: '#406ae0',
                    yellow: '#FABD59',
                },
            },
            borderRadius: {
                sm: '0.25rem',
                md: '0.5rem',
                lg: '1rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};

export default config;