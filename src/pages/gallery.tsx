import PageHeader from '@/components/PageHeader';
import GalleryGrid from '@/components/GalleryGrid';
import CtaBanner from '@/components/CtaBanner';
import { gallery } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="גלריית עבודות"
        description="תמונות מפרויקטים שביצענו - דירות עמוסות, בתים עם אגרנות כפייתית, מחסנים ופינוי פסולת. לחצו על תמונה להגדלה."
        crumbs={[{ label: 'גלריה' }]}
      />
      <section className="container mx-auto px-4 lg:px-6 py-14 md:py-20">
        <GalleryGrid images={gallery} filters placeholders={9} />
      </section>
      <CtaBanner title="רוצים תוצאה כזו גם אצלכם?" />
    </>
  );
}
