export default function SectionTemplate({ title, description = "", children }) {
  return (
    <section>
      <div className="py-8">
        <div className="mb-10">
          <h2 className="text-2xl font-medium text-primary ">{title}</h2>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
