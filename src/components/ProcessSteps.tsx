// Full class names so Tailwind can detect them
const gridCols: Record<number, string> = {
  4: 'md:grid-cols-2 lg:grid-cols-4',
  5: 'md:grid-cols-2 lg:grid-cols-5',
};

export default function ProcessSteps({ steps }: { steps: { title: string; text: string }[] }) {
  const cols = gridCols[steps.length] ?? 'md:grid-cols-3';
  return (
    <ol className={`grid gap-5 ${cols}`}>
      {steps.map((step, i) => (
        <li key={step.title} className="card p-6">
          <span className="block text-4xl font-extrabold text-accent-500 mb-3" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
          <h3 className="text-lg font-bold text-brand-900 mb-2">{step.title}</h3>
          <p className="text-muted leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
