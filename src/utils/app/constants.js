const ROUTES = {
  newbie: {
    resultSummary: "results-summary",
    productCard: "product-card",
    nftCard: "nft-card",
    interactiveRating: "interactive-rating",
    statsCard: "stats-card",
    orderSummary: "order-summary",
    qrCode: "qr-code",
    threeColumnCard: "three-column-card",
    profileCard: "profile-card",
    faqAccordion: "faq-accordion",
    socialProofSection: "social-proof-section",
    articlePreview: "article-preview",
    fourCardFeature: "four-card-feature",
    baseApparel: "base-apparel",
    introComponent: "intro-component",
    singlePriceGrid: "single-price-grid",
    pingComingSoon: "ping-coming-soon",
    huddleLandingPage: "huddle-landing-page",
  },
  junior: {
    newsletterSignUp: "newsletter-sign-up",
    ageCalculatorApp: "age-calculator-app",
    newsHomePage: "news-home-page",
    notificationsPage: "notifications-page",
  }
};

const REPO =
  "https://github.com/IamArshadAli/FrontEndMentor/tree/main/src/components/";

const LEVEL = {
  newbie: { name: "newbie", style: "text-DarkCyan border border-DarkCyan" },
  junior: { name: "junior", style: "text-GreenTeal border border-GreenTeal" },
  intermediate: { name: "intermediate", style: "text- border border-" },
  advanced: { name: "advanced", style: "text- border border-" },
};

const TAGS = {
  html: { name: "html", style: "text-CobaltBlue bg-CobaltBlue" },
  css: { name: "css", style: "text-GreenTeal bg-GreenTeal" },
  js: { name: "js", style: "text-OrangeYellow bg-OrangeYellow" },
};

export { ROUTES, LEVEL, TAGS, REPO };
