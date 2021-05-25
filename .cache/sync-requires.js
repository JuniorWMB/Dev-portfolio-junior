const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/portfolio.js"))),
  "component---src-pages-services-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/services.js"))),
  "component---src-pages-tarifs-js": hot(preferDefault(require("/Users/juniorwembopa/Documents/portfolio2021_01_29/dev-portfolio-junior/src/pages/tarifs.js")))
}

