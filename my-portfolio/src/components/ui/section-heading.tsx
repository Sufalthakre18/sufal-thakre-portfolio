interface SectionHeadingProps {
  heading: string;
  highlight?: string;
  description?: string;
}

export function SectionHeading({ heading, highlight, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-800 md:text-6xl dark:text-gray-100">
        <span className="heading-letter text-red-700">{heading.charAt(0)}</span>
        {heading.slice(1)}
        {highlight ? <> <span className="text-red-700">{highlight}</span></> : null}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
