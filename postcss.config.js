/**
 * PostCSS Configuration for Steal a Brainrot News
 * 
 * This configuration processes CSS with:
 * - Tailwind CSS for utility-first styling
 * - Autoprefixer for cross-browser compatibility
 */
module.exports = {
  plugins: {
    // Tailwind CSS - Utility-first CSS framework
    'tailwindcss': {},
    
    // Autoprefixer - Add vendor prefixes for browser compatibility
    'autoprefixer': {
      // Browser support configuration
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
        'not ie 11'
      ],
      // Grid support for older browsers
      grid: 'autoplace',
    },
    
    // CSS optimization for production
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: [
          'default',
          {
            // Optimize CSS while preserving functionality
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            colormin: true,
            convertValues: true,
            discardDuplicates: true,
            discardEmpty: true,
            mergeRules: true,
            minifyFontValues: true,
            minifyGradients: true,
            minifyParams: true,
            minifySelectors: true,
            normalizeCharset: true,
            normalizeDisplayValues: true,
            normalizePositions: true,
            normalizeRepeatStyle: true,
            normalizeString: true,
            normalizeTimingFunctions: true,
            normalizeUnicode: true,
            normalizeUrl: true,
            orderedValues: true,
            reduceIdents: false, // Keep CSS custom properties
            reduceInitial: true,
            reduceTransforms: true,
            svgo: true,
            uniqueSelectors: true,
          },
        ],
      },
    }),
  },
}
