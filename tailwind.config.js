module.exports = {
    content: ['./**/*.tsx'],
    theme: {
        fontFamily: {
            'primary-thin': ['DINNextRoundedLTPro-Light'],
            'primary-regular': ['DINNextRoundedLTPro-Regular'],
            'primary-medium': ['DINNextRoundedLTPro-Medium'],
            signature: ['Allura-Regular']
        },
        extend: {
            colors: {
                primary: '#05C3F9',
                error: '#F84C6C',
                warning: '#FAAD14',
                success: '#20B575',
                'secondary-gray': '#F5F5F5',
                dark: '#3E3F3C',
                mineshaft: '#333333',
                'mineshaft-500': '#292929'
            },
            minHeight: {
                32: 128
            }
        }
    },
    plugins: [],
    corePlugins: require('tailwind-rn/unsupported-core-plugins')
};
