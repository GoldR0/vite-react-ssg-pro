import type { CategoryKey } from './services';

// How to add an article:
// 1. Create src/content/articles/<slug>.ts containing the text:  export default `...`;
//    The text uses simple Markdown:
//      ## heading, ### sub heading
//      - bullet item, 1. numbered item
//      **bold text**
//      ![image description](/images/articles/photo.webp)
//    Separate paragraphs with an empty line.
// 2. Add the article details to the list below (the slug must match the file name).
export interface Article {
  slug: string;
  title: string;
  /** Short summary - used on article cards and as the SEO description */
  excerpt: string;
  /** ISO date, e.g. 2026-09-29 */
  date: string;
  /** Image under /public, e.g. /images/articles/my-article.webp */
  cover?: { src: string; alt: string };
  category?: CategoryKey;
}

// Newest first. TODO: replace the example article with the real articles.
export const articles: Article[] = [
  {
    slug: 'pre-renovation-apartment-clearing',
    title: 'פינוי דירה ישנה לפני שיפוץ מקיף',
    excerpt:
      'למה חשוב לפנות את הדירה לפני השיפוץ, אילו חפצים לשמור, איך מוציאים רהיטים גדולים ומה כדאי לתאם מראש עם קבלן השיפוצים.',
    date: '2026-09-29',
    category: 'apartments',
  },
  {
    slug: 'cluttered-apartment-clearing-guide',
    title: 'המדריך המלא לפינוי דירה עמוסה בחפצים ופסולת',
    excerpt:
      'איך מפנים דירה עמוסה בצורה מסודרת ובטוחה? מהערכת מצב ומיון החפצים, דרך פינוי הפסולת והרהיטים ועד הניקיון היסודי - כל השלבים במדריך אחד.',
    date: '2026-09-29',
    category: 'apartments',
  },
  {
    slug: 'hoarding-warning-signs',
    title: 'איך מזהים אגרנות כפייתית אצל אדם קרוב? 7 סימנים שכדאי להכיר',
    excerpt:
      'אגרנות כפייתית מתפתחת בהדרגה ולעיתים קרובות מוסתרת מהמשפחה. אלה הסימנים המרכזיים שיכולים לעזור לזהות את הבעיה בזמן - ומה אפשר לעשות.',
    date: '2026-09-29',
    category: 'hoarding',
  },
];

/** Loads the article text separately, so article bodies stay out of the main bundle */
export const loadArticleBody = (slug: string): Promise<string> =>
  import(`../content/articles/${slug}.ts`).then((m: { default: string }) => m.default);

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}
