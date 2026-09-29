import { useState, type SyntheticEvent } from 'react';
import { Send } from 'lucide-react';
import { services } from '@/data/services';
import { whatsappHref } from '@/data/site';

// The site is static (no server), so the form opens WhatsApp with the details pre-filled.
export default function ContactForm({ compact = false, defaultService = '' }: { compact?: boolean; defaultService?: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      'שלום, אשמח לקבל הצעת מחיר.',
      `שם: ${data.get('name')}`,
      `טלפון: ${data.get('phone')}`,
      data.get('city') && `עיר: ${data.get('city')}`,
      data.get('service') && `שירות: ${data.get('service')}`,
      data.get('message') && `פרטים: ${data.get('message')}`,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  }

  const input = 'w-full rounded-xl border border-brand-900/15 bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200';

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className={`grid gap-3 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">שם מלא *</span>
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">טלפון *</span>
          <input name="phone" type="tel" required autoComplete="tel" dir="ltr" className={`${input} text-right`} />
        </label>
      </div>
      <div className={`grid gap-3 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">עיר</span>
          <input name="city" autoComplete="address-level2" className={input} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">סוג השירות</span>
          <select name="service" defaultValue={defaultService} className={input}>
            <option value="">בחרו שירות</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
        </label>
      </div>
      {!compact && (
        <label className="grid gap-1.5">
          <span className="text-sm font-medium">ספרו לנו בקצרה</span>
          <textarea name="message" rows={4} className={input} placeholder="גודל הנכס, קומה, מה צריך לפנות..." />
        </label>
      )}
      <button type="submit" className="btn btn-accent mt-1 py-3.5 text-lg">
        <Send className="w-5 h-5" aria-hidden />
        שליחה וקבלת הצעת מחיר
      </button>
      <p className="text-xs text-muted text-center" role="status">
        {sent ? 'נפתחה שיחת וואטסאפ עם הפרטים - רק ללחוץ שליחה.' : 'הפרטים יישלחו אלינו בוואטסאפ. אפשר לצרף גם תמונות של הנכס.'}
      </p>
    </form>
  );
}
