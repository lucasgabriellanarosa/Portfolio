export const Section = ({ children }) => {
  return (
    <section className="w-4/5 flex flex-col gap-6 py-12 md:items-center md:gap-10">
      {children}
    </section>
  );
};