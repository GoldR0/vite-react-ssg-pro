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
    slug: 'after-hoarding-apartment-clearing',
    title: 'מה קורה אחרי שמפנים דירה של אדם המתמודד עם אגרנות כפייתית?',
    excerpt:
      'הפינוי הוא רק שלב אחד. בדיקת הדירה, ניקיון, ארגון מחדש, שמירה על מעברים פנויים ותמיכה מתאימה שיעזרו לשמור על השינוי לאורך זמן.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'planning-complex-hoarding-clearing-project',
    title: 'איך מתכננים פרויקט פינוי של דירת אגרנות מורכבת?',
    excerpt:
      'דירה עמוסה מאוד דורשת תכנון כמו פרויקט: הערכת מצב, מי מקבל החלטות, מטרות, אזורי עבודה, ציוד, הפרדה בין מיון לפינוי ובדיקה בסוף כל שלב.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'hoarding-clearing-sentimental-items',
    title: 'פינוי דירת אגרנות ללא פגיעה בחפצים בעלי ערך רגשי',
    excerpt:
      'איך שומרים על תמונות, מכתבים, מזכרות וחפצי ירושה בזמן פינוי דירה עמוסה: מסלול נפרד לפריטים רגישים, בדיקה זהירה ושיתוף בעל הדירה.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'sorting-thousands-of-items',
    title: 'כיצד ממיינים אלפי חפצים בדירה עמוסה במיוחד?',
    excerpt:
      'שיטת מיון שחוזרת על עצמה: אזורים קטנים, מספר מוגבל של קטגוריות, טיפול נפרד בחפצים רגישים, ריכוז כפילויות והגבלת ערמת ה"אולי".',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'owner-refuses-to-part-with-items',
    title: 'מה עושים כאשר בעל הדירה מסרב להיפרד מחפצים?',
    excerpt:
      'לחץ וויכוחים לא תמיד עוזרים. איך מתחילים מאזורים פשוטים, מתמקדים בשימוש בבית, מגדירים מקום מוגבל לכל קטגוריה ומתקדמים בלי לפגוע באמון.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'hoarding-clearing-with-owner-cooperation',
    title: 'פינוי דירת אגרנות בשיתוף פעולה עם בעל הדירה',
    excerpt:
      'מטרה מוגדרת, כללי החלטה מוסכמים, עבודה באזורים קטנים ותקשורת מכבדת - כך מפנים דירה עמוסה יחד עם בעל הדירה ולא במקומו.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'apartment-with-blocked-passages',
    title: 'כיצד מתמודדים עם דירה שהמעברים בה חסומים?',
    excerpt:
      'כשהמעברים חסומים, המשימה הראשונה היא לפתוח נתיב בטוח מדלת הכניסה. איך מתקדמים פנימה, נזהרים מערמות לא יציבות ושומרים על המעבר פנוי.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'hoarding-vs-regular-apartment-clearing',
    title: 'מדוע פינוי דירת אגרנות שונה מפינוי דירה רגילה?',
    excerpt:
      'בדירת אגרנות האתגר אינו רק לוגיסטי: קבלת ההחלטות, כמות התכולה, המיון האיטי ומצב הבית הופכים את הפינוי לתהליך שדורש רגישות ושיתוף פעולה.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'clearing-decades-of-accumulated-items',
    title: 'איך מפנים דירה מלאה בחפצים שנאגרו במשך עשרות שנים?',
    excerpt:
      'עבודה לפי אזורים קטנים, שיטת מיון קבועה, תשומת לב לניירת ולחפצים קטנים בעלי ערך ופינוי רציף - כך מתמודדים עם תכולה של עשרות שנים.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'hoarder-apartment-clearing-where-to-start',
    title: 'פינוי דירה של אגרן כפייתי: מאיפה מתחילים?',
    excerpt:
      'לא "לזרוק הכול": מבינים את מצב הדירה, יוצרים גישה בטוחה, קובעים כללי מיון ברורים ומתקדמים בהדרגה תוך כבוד לבעל הדירה ולחפציו.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'urgent-apartment-clearing',
    title: 'מה עושים כשצריך לפנות דירה בתוך זמן קצר?',
    excerpt:
      'פינוי דחוף בגלל מעבר, מכירה או סיום שכירות? הערכת מצב מהירה, סדרי עדיפויות, מיון מהיר וחלוקת עבודה שיעזרו לסיים בזמן.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'clearing-apartment-before-renting',
    title: 'פינוי דירה לפני השכרה לדיירים חדשים',
    excerpt:
      'איך מכינים דירה להשכרה מחדש אחרי עזיבת הדיירים: מה נשאר ומה יוצא, פינוי, ניקיון, בדיקת תקינות ותיעוד מצב הנכס.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'clearing-apartment-before-sale',
    title: 'פינוי דירה לפני מכירה: כיצד להכין את הנכס?',
    excerpt:
      'דירה עמוסה מקשה על קונים להתרשם מהנכס. אילו חפצים ורהיטים לפנות לפני המכירה, ואיך מכינים את הדירה לניקיון, לבדיקה ולצילום.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'common-apartment-clearing-mistakes',
    title: 'הטעויות הנפוצות שאנשים עושים לפני פינוי דירה',
    excerpt:
      'עבודה בלי תוכנית, זריקה לפני בדיקה, הערכת חסר של כמות הפסולת ובחירת חברה רק לפי המחיר - הטעויות שכדאי להכיר לפני שמתחילים.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'how-long-apartment-clearing-takes',
    title: 'כמה זמן לוקח לפנות דירה מלאה בפסולת?',
    excerpt:
      'משך הפינוי תלוי בכמות הפסולת, בגודל הדירה, בתנאי הגישה ובמיון. מה משפיע על זמן העבודה ולמה כדאי להשאיר זמן גם לניקיון.',
    date: '2026-09-30',
    category: 'hoarding',
  },
  {
    slug: 'diy-vs-professional-apartment-clearing',
    title: 'פינוי דירה באופן עצמאי לעומת הזמנת חברה מקצועית',
    excerpt:
      'היתרונות והחסרונות של פינוי עצמאי ושל חברת פינוי מקצועית, מתי כדאי לבחור בכל אפשרות ואיך אפשר לשלב ביניהן.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'apartment-clearing-10-steps',
    title: 'עשרת השלבים החשובים בתהליך פינוי דירה',
    excerpt:
      'מבדיקת מצב הדירה ולוח הזמנים, דרך מיון החפצים ופינוי הרהיטים ועד הניקיון והבדיקה הסופית - תהליך פינוי מסודר ב-10 שלבים.',
    date: '2026-09-30',
    category: 'apartments',
  },
  {
    slug: 'neglected-apartment-clearing-start',
    title: 'איך מתחילים לפנות דירה שלא נוקתה במשך שנים?',
    excerpt:
      'דירה מוזנחת יכולה להיראות כמו משימה בלתי אפשרית. איך מעריכים את המצב, פותחים מעבר, ממיינים, מפנים את הפסולת ומנקים - צעד אחר צעד.',
    date: '2026-09-30',
    category: 'apartments',
  },
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
