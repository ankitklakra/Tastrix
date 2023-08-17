const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  output: "standalone",
  images: {
    formats: ['image/webp'],
    disableStaticImages: true,
    },

};

module.exports = withPlugins([optimizedImages], nextConfiguration);
