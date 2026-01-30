export const site = {
  meta: {
    title: "Kaisalle 💛",
    description: "pieni sivusto, jossa on iso tunne",
  },
  hero: {
    headline: "kaisalle 💛",
    subheadline: "tää on sun oma pieni internet-nurkka",
    gifPath: "/media/hero.gif",
  },
  about: {
    title: "kuka kaisa on (mun mielestä)",
    bullets: [
      "nauraa mun vitseille (välillä)",
      "osaa tehdä arjesta pehmeän",
      "on samanaikaisesti rauha ja energia",
      "on kaunis myös sillon kun luulee ettei oo",
    ],
    note: "tää sivu on niinku meidän muistikirja, mutta kivempi.",
  },
  links: {
    title: "linkkejä sinne tänne",
    items: [
      { label: "meidän google photos", href: "https://photos.google.com/" },
      { label: "spotify playlist", href: "https://open.spotify.com/" },
      { label: "kartta: meidän lempparipaikka", href: "https://maps.google.com/" },
      { label: "salainen linkki", href: "https://example.com" },
    ],
  },
  gallery: {
    title: "kuvia meistä",
    photos: [
      { src: "/media/us-1.jpg", alt: "me 1" },
      { src: "/media/us-2.jpg", alt: "me 2" },
      { src: "/media/us-3.jpg", alt: "me 3" },
      { src: "/media/us-4.jpg", alt: "me 4" },
    ],
  },
  timeline: {
    title: "tapahtumat & muistot",
    events: [
      { date: "2024-06-12", title: "se yks ilta", desc: "kun kaikki vaan loksahti paikalleen.", link: "" },
      { date: "2025-02-03", title: "reissu / viikonloppu", desc: "lisää tähän: missä oltiin ja mitä tapahtui.", link: "" },
      { date: "2026-02-XX", title: "syntymäpäivä", desc: "tänään juhlitaan sua.", link: "" },
    ],
  },
  gift: {
    title: "syntymäpäivälahja 🎁",
    hint: "tää on pieni 'avaa kun oot valmis' -lahja. kun painat nappia, se aukeaa.",
    revealTitle: "sun lahja:",
    revealText:
      "valitse tähän sun oikea lahja: esim. 'viikonloppu kahdestaan + yksi yllätys' tai 'illallinen + kirje + lahjakortti'.",
    revealLinks: [{ label: "lahjakortti / varauslinkki", href: "https://example.com" }],
  },
  footer: { text: "made by eelis, only for kaisa 💛" },
  fun: {
    clickHint: "ps. klikkaa taustaa 💛",
    secretHint: "ps2. kokeile kirjoittaa: kaisa",
    emojis: ["💛","✨","🫶","🎈","🧁","🎾","🏃‍♂️","🐥","🌼","🍯"],
  },
} as const;
