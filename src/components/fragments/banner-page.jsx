const BannerPage = ({ children }) => {
  return (
    <section className="flex justify-center mb-5">
      <div className="w-full bg-secondary text-white rounded-xl flex p-4">
        {children}
      </div>
    </section>
  );
};

export default BannerPage;
