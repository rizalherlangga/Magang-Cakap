export default function SectionTemplate({ title, description, children }) {
  return (
    <section>
      <div className="overflow-hidden w-full my-4 py-4">
        <div className="mb-2">
          <span className="text-2xl font-bold text-primary">{title}</span>
          <p className="text-base text-gray-600">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
