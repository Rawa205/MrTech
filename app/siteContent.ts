type LinkText = {
  label: string;
  href: string;
};

type TextBlock = {
  title: string;
  text: string;
};

type ContactText = {
  label: string;
  value: string;
  href?: string;
};

type SiteContent = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    openGraphImageAlt: string;
  };
  brand: {
    name: string;
    mark: string;
    tagline: string;
  };
  navMenuLabel: string;
  nav: LinkText[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: LinkText;
    secondaryAction: LinkText;
    statsLabel: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  highlightsLabel: string;
  highlights: string[];
  services: {
    eyebrow: string;
    title: string;
    tagListLabel: string;
    items: (TextBlock & {
      tags: string[];
    })[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: (TextBlock & {
      step: string;
    })[];
  };
  works: {
    eyebrow: string;
    title: string;
    description: string;
    items: (TextBlock & {
      result: string;
    })[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    listLabel: string;
    items: TextBlock[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cta: LinkText;
    items: ContactText[];
  };
};

// Edit the text values in this file. Do not edit generated files inside .next.
export const siteContent: SiteContent = {
  metadata: {
    title: "MR Tech | وێبسایت، داشبۆرد و چارەسەری IT",
    description:
      "MR Tech لەلایەن Rawa و Muhammad بۆ دروستکردنی وێبسایت، داشبۆرد، سیستەمی فرۆشتن و چارەسەری IT بە ڕووکاری خێرا و مۆدێرن.",
    keywords: [
      "MR Tech",
      "web design",
      "Next.js",
      "IT",
      "dashboard",
      "POS",
      "Kurdish web",
    ],
    openGraphTitle: "MR Tech",
    openGraphDescription:
      "وێبسایت، داشبۆرد و چارەسەری IT بە دیزاینی خێرا، پاک و مۆدێرن.",
    openGraphImageAlt: "MR Tech dashboard work sample",
  },
  brand: {
    name: "MR Tech",
    mark: "MR",
    tagline: "Web & IT Studio",
  },
  navMenuLabel: "مێنیو",
  nav: [
    { label: "خزمەتگوزاری", href: "#services" },
    { label: "ڕێگاکەمان", href: "#process" },
    { label: "کارەکانمان", href: "#works" },
    { label: "پەیوەندی", href: "#contact" },
  ],
  hero: {
    eyebrow: "Rawa و Muhammad",
    title: "MR Tech بۆ وێبسایت، داشبۆرد و چارەسەری IT.",
    description:
      "ئێمە وێبسایت و سیستەمی دیجیتاڵی دروست دەکەین بە شێوازێکی نوێ و جوان.",
    primaryAction: {
      label: "لە WhatsApp قسە بکە",
      href: "https://wa.me/9647500138343",
    },
    secondaryAction: {
      label: "کارەکانمان ببینە",
      href: "#works",
    },
    statsLabel: "پوختەی MR Tech",
    stats: [
      { value: "4+", label: "نموونەی کار" },
      { value: "100%", label: "Responsive" },
      { value: "24/7", label: "ئامادە بۆ پەیوەندی" },
    ],
  },
  highlightsLabel: "تایبەتمەندی",
  highlights: [
    "Next.js + React",
    "خێرا و ستاتیک",
    "مۆبایل فرێندلی",
    "دیزاینی پاک",
  ],
  services: {
    eyebrow: "خزمەتگوزاری",
    title: "ئەو شتانەی بۆ کارەکەت دروستی دەکەین",
    tagListLabel: "تایبەتمەندییەکان",
    items: [
      {
        title: "وێبسایتی خێرا و مۆدێرن",
        text: "وێبسایتێکی ڕێکوپێک، مۆبایل فرێندلی و ئامادە بۆ ئەوەی کارەکەت بە شێوەیەکی باش پیشان بدات.",
        tags: ["Next.js", "SEO", "Responsive"],
      },
      {
        title: "داشبۆرد و سیستەمی فرۆشتن",
        text: "سیستەمی کۆگا، POS، ڕاپۆرت، کاڵا و فرۆشتن بە ڕووکاری پاک و ئاسان بۆ کاری ڕۆژانە.",
        tags: ["POS", "Inventory", "Reports"],
      },
      {
        title: "UI/UX بۆ بەکارهێنانی ئاسان",
        text: "دیزاینێک کە کڕیار و ستاف بە خێرایی تێی بگەن، بزانن چی بکەن و بە ئاسانی کاریان تەواو بکەن.",
        tags: ["Clean UI", "UX Flow", "Mobile"],
      },
      {
        title: "پاڵپشتی و چارەسەری IT",
        text: "یارمەتی تەکنیکی، ڕێکخستنی سیستەم و چارەسەرکردنی کێشەکانی دیجیتاڵ بە شێوەیەکی ڕوون.",
        tags: ["Support", "Setup", "Fix"],
      },
    ],
  },
  process: {
    eyebrow: "ڕێگاکەمان",
    title: "پڕۆژەکە بە ڕێکخراوی دەچێتە پێش",
    description:
      "لە بیرۆکەوە تا ڕادەستکردن، هەموو هەنگاوێک بە ڕوونی دەکەین بۆ ئەوەی پڕۆژەکەت جوان، بەسوود و ئامادەی بەکارهێنان بێت.",
    items: [
      {
        step: "01",
        title: "گوێگرتن",
        text: "پێویستییەکانی کارەکەت دەزانین و ئەو شتانە دیاری دەکەین کە پێویستە لە وێبسایت یان سیستەمەکەتدا هەبن.",
      },
      {
        step: "02",
        title: "دیزاین و دروستکردن",
        text: "ڕوکار، بەکارهێنان و کۆد بە یەکەوە دروست دەکەین بۆ ئەوەی کارەکە جوان و خێرا بێت.",
      },
      {
        step: "03",
        title: "تاقیکردنەوە و ڕادەستکردن",
        text: "لە مۆبایل و کۆمپیوتەر تاقی دەکەینەوە، وردەکارییەکان ڕێک دەخەین و ئامادەی بەکارهێنان دەکەین.",
      },
    ],
  },
  works: {
    eyebrow: "کارەکانمان",
    title: "نموونەی سیستەم و داشبۆردەکان",
    description:
      "ئەم وێنانە نیشان دەدەن چۆن ڕاپۆرت، فرۆشتن، مەخزەن و بەڕێوەبردن دەکرێن بە ڕووکاری پاک و ئاسان.",
    items: [
      {
        title: "داشبۆردی SAKi",
        text: "ڕووکاری داشبۆردی فرۆشتن و بەڕێوەبردنی زانیاری بە کارتی ڕاپۆرت، لیست و چارت.",
        result: "Dashboard UI",
      },
      {
        title: "سیستەمی مەخزەن و فرۆشتن",
        text: "بەڕێوەبردنی کاڵا، براند، ستۆک و ژمارەی فرۆشتن بە ڕووکاری ڕوون و خێرا.",
        result: "Inventory System",
      },
      {
        title: "سیستەمی سەلامەتی",
        text: "داشبۆردی خاوەن هێڵی لاوەکی، کارتی ئامار و فۆکەسی سەرەکی لەسەر کار.",
        result: "Admin Panel",
      },
      {
        title: "Teammart",
        text: "سیستەمی بەڕێوەبردنی بازرگانی بە ڕاپۆرت، فرۆشگا، کۆگا و ڕێکخستنی کاڵا.",
        result: "Business System",
      },
    ],
  },
  about: {
    eyebrow: "دەربارەی ئێمە",
    title: "هاوڕێیەکانی MR Tech",
    description:
      "من Rawa و هاوڕێکەم Muhammad، بە ناوی MR Tech کار دەکەین بۆ ئەوەی کارەکان بتوانن بە شێوەیەکی جوان، مۆدێرن و کاریگەر خۆیان لە ئینتەرنێت و سیستەمی دیجیتاڵ پیشان بدەن.",
    listLabel: "بەڵێنەکانمان",
    items: [
      {
        title: "کۆدی پاک",
        text: "کۆدینگێکی باش بۆ گەشەکردنی داهاتوو.",
      },
      {
        title: "هەموو قەبارەکان",
        text: "لە مۆبایل، تابلێت و کۆمپیوتەر بە جوانی کار دەکات.",
      },
      {
        title: "هەستی نوێ",
        text: "ڕووکاریەک کە باوەڕ، ڕێکوپێکی و پیشەییبوون نیشان بدات.",
      },
    ],
  },
  contact: {
    eyebrow: "پەیوەندی",
    title: "با پڕۆژەکەت دەست پێ بکەین",
    description:
      "ئەگەر وێبسایت، داشبۆرد یان چارەسەری IT پێویستت دەوێ، لە یەکێک لەم ڕێگایانە نامە بنێرە.",
    cta: {
      label: "ڕاستەوخۆ لە WhatsApp",
      href: "https://wa.me/9647500138343",
    },
    items: [
      {
        label: "TikTok",
        value: ".mr.tech8",
        href: "https://www.tiktok.com/@.mr.tech8",
      },
      {
        label: "WhatsApp",
        value: "07500138343",
        href: "https://wa.me/9647500138343",
      },
      {
        label: "Telegram",
        value: "@muh0965",
        href: "https://t.me/muh0965",
      },
      {
        label: "Email",
        value: "mrt06938@gmail.com",
        href: "mailto:mrt06938@gmail.com",
      },
    ],
  },
};
