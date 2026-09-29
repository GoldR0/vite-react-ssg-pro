// Business details used across the whole site (header, footer, contact buttons, SEO).
// TODO: replace the placeholder values below with the real business details.
export const site = {
  name: 'פינוי בראש שקט',
  tagline: 'פינוי דירות, פסולת ואגרנות כפייתית - בדיסקרטיות וברגישות',
  description:
    'שירות מקצועי לפינוי דירות, פינוי פסולת ואשפה וטיפול בבתים עם אגרנות כפייתית. עבודה רגישה, דיסקרטית ויסודית - מהפינוי ועד ניקיון והחזרת הבית לתפקוד.',
  phone: '050-000-0000',
  // International format without "+" for wa.me links
  whatsapp: '972500000000',
  email: 'info@example.co.il',
  serviceArea: 'כל הארץ',
  hours: 'א׳-ה׳ 07:00-19:00, ו׳ 07:00-13:00',
};

export const telHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`;

export function whatsappHref(text = 'שלום, אשמח לקבל הצעת מחיר לפינוי') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
