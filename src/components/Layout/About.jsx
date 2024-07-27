const About = () => {
  return (
    <section id="about" className="p-4 bg-secondary">
      <div className="container my-6">
        <span className="text-lg text-accent">Biography</span>
        <h3 className="text-3xl font-bold">About Me</h3>
      </div>
      <div className="container h-[90vh] flex items-center justify-center gap-3 mx-auto flex-col md:flex-row">
        <div className="w-full p-3 bg-error md:w-1/2">
          <div className="">B1</div>
          <div className="">no height set</div>
        </div>
        <div className="w-full p-3 bg-info md:w-1/2">
          <div className="">B2</div>
          <div className="">no height set</div>
        </div>
      </div>
    </section>
  );
};

export default About;
