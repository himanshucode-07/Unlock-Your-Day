function SectionWrapper({ children }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">{children}</section>
  );
}

export default SectionWrapper;
