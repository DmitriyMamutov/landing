/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

module.exports = withPlugins([[nextTranslate]], nextConfig);
