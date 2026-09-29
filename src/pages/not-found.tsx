import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <p className="text-7xl font-extrabold text-accent-500">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-brand-900">העמוד לא נמצא</h1>
      <p className="mt-3 text-muted text-lg">ייתכן שהקישור שגוי או שהעמוד הוסר.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="btn btn-brand">לדף הבית</Link>
        <Link to="/services" className="btn btn-outline text-brand-700">לשירותים שלנו</Link>
      </div>
    </section>
  );
}
