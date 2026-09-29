interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, description, center = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className={`eyebrow ${light ? 'text-accent-400!' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-3xl md:text-4xl font-extrabold leading-tight text-balance ${light ? 'text-white' : 'text-brand-900'}`}>{title}</h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-brand-100' : 'text-muted'}`}>{description}</p>}
    </div>
  );
}
