export const Section = ({ children }) => {
  return (
    <section className="min-h-screen w-2/3 flex flex-col justify-center gap-6">
      {children}
    </section>
  );
};