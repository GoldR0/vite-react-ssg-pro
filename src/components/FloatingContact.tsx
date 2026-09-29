import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { telHref, whatsappHref } from '@/data/site';

// Mobile: fixed call / WhatsApp bar. Desktop: floating WhatsApp button.
export default function FloatingContact() {
  return (
    <>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 shadow-[0_-4px_16px_rgb(0_0_0/0.12)]">
        <a href={telHref} className="flex items-center justify-center gap-2 py-3.5 bg-accent-500 text-brand-950 font-bold">
          <Phone className="w-5 h-5" aria-hidden />חייגו עכשיו
        </a>
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-[#1faa53] text-white font-bold">
          <FaWhatsapp className="w-5 h-5" aria-hidden />וואטסאפ
        </a>
      </div>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שליחת הודעה בוואטסאפ"
        className="hidden md:flex fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#1faa53] hover:bg-[#178a43] text-white items-center justify-center shadow-lg transition-colors"
      >
        <FaWhatsapp className="w-8 h-8" aria-hidden />
      </a>
    </>
  );
}
