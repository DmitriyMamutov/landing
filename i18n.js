module.exports = {
  defaultLocale: "en",
  locales: ["en"],
  pages: {
    "*": ["common"],
    "/": ["index"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./static/locales/${lang}/${ns}.json`).then((m) => m.default),
};
