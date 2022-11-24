/* eslint-disable no-undef */
let attributes = [
    '[class*="block-"]',
    'a[target="_blank"]'
];

module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': {
            mode: 'all',
            content: ['./hugo_stats.json'],
            safelist: {
                standard: [
                    /[target=_blank]/,
                    'show',
                    'fade',
                    /-backdrop$/,
                    /^is-/,
                    /^has-/,
                    /^js-/
                ],
                deep: [
                    /class*=block-/
                ]
            },
            options: {
                defaultExtractor: (content) => {
                    let els = JSON.parse(content).htmlElements;
                    els = els.tags.concat(els.classes, els.ids);
                    return els;
                }
            }
            // defaultExtractor: (content) => {
            //     let els = JSON.parse(content).htmlElements;
            //     return els.tags.concat(els.classes, els.ids, attributes);
            // },
            // content: [
            //     './themes/**/*.html',
            //     'layouts/**/*.html'
            // ],
            // safelist: {
            //     standard: [
            //         'show',
            //         'fade',
            //         'alert-light',
            //         'alert-warning',
            //         'alert-danger',
            //         /-backdrop$/,
            //         /^is-/,
            //         /^has-/,
            //         /^js-/
            //     ],
            //     deep: [
            //         /^page-/,
            //         /^term-/,
            //         /^section-/,
            //         /-page$/,
            //         /^block-/
            //     ]
            // }
        }
    }
};
