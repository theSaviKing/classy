const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./templates/**/*.{html,pug}"
    ],
    safelist: [
        'alert-error',
        'alert-warning',
        'alert-info',
        'alert-success'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Neuton', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: '#e88d67',
                secondary: '#93a8ac',
                accent: '#d9415f'
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [{
            'coral': {
                'primary': '#e88d67',
                'primary-focus': '#d25e2d',
                'primary-content': '#ffffff',
                'secondary': '#93a8ac',
                'secondary-focus': '#647d82',
                'secondary-content': '#ffffff',
                'accent': '#d9415f',
                'accent-focus': '#992e43',
                'accent-content': '#ffffff',
                'neutral': '#424b54',
                'neutral-focus': '#2b3036',
                'neutral-content': '#ffffff',
                'base-100': '#ffffff',
                'base-200': '#eff3f5',
                'base-300': '#d1d5db',
                'base-content': '#1f2937',
                'info': '#547aa5',
                'success': '#3c9069',
                'warning': '#E3B505',
                'error': '#F2542D',
            },
            'dimcoral': {
                'primary': '#e88d67',
                'primary-focus': '#d25e2d',
                'primary-content': '#ffffff',
                'secondary': '#93a8ac',
                'secondary-focus': '#647d82',
                'secondary-content': '#ffffff',
                'accent': '#d9415f',
                'accent-focus': '#992e43',
                'accent-content': '#ffffff',
                'neutral': '#424b54',
                'neutral-focus': '#2b3036',
                'neutral-content': '#ffffff',
                'base-100': '#222222',
                'base-200': '#111111',
                'base-300': '#000000',
                'base-content': '#fcefe9',
                'info': '#99b1cc',
                'success': '#93d2b5',
                'warning': '#f0d775',
                'error': '#f68a6f',
            },
        }, ],
    }
}
