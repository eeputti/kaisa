export const site = {
  meta: {
    title: "for kaisa",
    description: "a small place made just for you.",
    ogImagePath: "/og.png",
  },

  wordmark: "kaisa",
  topstrip: {
    left: "limited time: always",
    right: "made in finland · private page",
  },

  nav: {
    left1: "womenwear",
    left2: "menswear",
    left3: "everything else",
    right1: "search",
    right2: "wishlist",
    right3: "bag (0)",
  },

  left: {
    kicker: "01 · a personal page",
    title: "kaisa",
    subtitle:
      "minimal, soft, and a little vintage. this is a tiny archive: moments, notes, links, and one birthday gift.",
    detailsTitle: "details",
    details: [
      "built for one person",
      "photos: replace /public/media/main.jpg",
      "texts: edit /content/site.ts",
      "style: edit /app/globals.css",
    ],
    linksTitle: "links",
    links: [
      { label: "our photos", href: "https://photos.google.com/" },
      { label: "spotify playlist", href: "https://open.spotify.com/" },
      { label: "a place on the map", href: "https://maps.google.com/" },
    ],
    timelineTitle: "events",
    timeline: [
      { date: "2024", title: "the beginning of 'us'" },
      { date: "2025", title: "a year we’ll remember" },
      { date: "2026", title: "your birthday: today" },
    ],
  },

  center: {
    imagePath: "/media/main.jpg",
    imageAlt: "main photo",
    caption: "a note: swap this image for a gif if you want (main.gif).",
  },

  right: {
    price: "€ 0",
    smallLine: "no purchase. only love.",
    noteTitle: "note",
    noteBody:
      "if you’re reading this: hi. i made this because you make my life feel lighter. this page is simple on purpose — like a clean room with warm light.",
    giftTitle: "birthday gift",
    giftBody:
      "write the gift here. example: weekend together + dinner + one secret surprise.",
    giftHint: "tip: keep it vague here, reveal the real thing in person.",
    footerTitle: "care",
    footerBody:
      "keep this link private. update anytime. add new memories when you feel like it.",
  },

  footer: "made by eelis · only for kaisa",
} as const;
