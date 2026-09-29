import { CircleCheck, EyeOff, HandHeart, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';
import { site } from '@/data/site';

// TODO: replace with the real story of the business
const values = [
  { icon: HandHeart, title: 'רגישות', text: 'מאחורי כל בית עמוס יש אדם ומשפחה. אנחנו עובדים בסבלנות, מקשיבים ומכבדים כל החלטה.' },
  { icon: EyeOff, title: 'דיסקרטיות', text: 'פרטיות הלקוחות שלנו היא מעל הכול. עובדים בשקט, בלי פרסום ובלי שאלות מיותרות.' },
  { icon: ShieldCheck, title: 'אמינות', text: 'הצעת מחיר ברורה, עמידה בזמנים ושמירה קפדנית על כל חפץ בעל ערך שנמצא בבית.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`אודות ${site.name}`}
        description="אנחנו מתמחים בפינוי דירות, פינוי פסולת וטיפול בבתים עם אגרנות כפייתית - עבודה שדורשת מקצועיות, אבל לא פחות מזה לב."
        crumbs={[{ label: 'אודות' }]}
      />

      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="prose-he">
          <h2>מי אנחנו</h2>
          <p>
            {site.name} הוקם מתוך הבנה שפינוי דירה הוא לא רק עבודה פיזית. כשנכנסים לבית עמוס, לדירה של הורה שנפטר או לבית שבו אדם מתמודד עם אגרנות כפייתית, צריך לדעת לעבוד בעדינות, להקשיב ולקבל החלטות יחד עם המשפחה.
          </p>
          <p>
            הצוות שלנו מנוסה בפינוי דירות, בתים, מחסנים ומבנים מכל הסוגים, ומלווה כל פרויקט מהשיחה הראשונה ועד מסירת נכס נקי - כולל ניקיון יסודי, הדברה, פוליש והובלות.
          </p>
        </div>
        <ul className="grid gap-4">
          {['ליווי אישי לאורך כל התהליך', 'מיון מסודר ושמירה על חפצי ערך', 'תרומה ומחזור של כל מה שאפשר', 'פינוי פסולת לאתרים מורשים בלבד', 'ניקיון, הדברה ופוליש במקום אחד'].map((t) => (
            <li key={t} className="card p-4 flex items-center gap-3 font-medium">
              <CircleCheck className="w-5 h-5 text-brand-600 shrink-0" aria-hidden />{t}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white py-14 md:py-20 border-y border-brand-900/5">
        <div className="container mx-auto px-4 lg:px-6">
          <SectionHeading eyebrow="הערכים שלנו" title="איך אנחנו עובדים" />
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <v.icon className="w-9 h-9 text-accent-600 mb-4" aria-hidden />
                <h3 className="text-xl font-bold text-brand-900 mb-2">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
