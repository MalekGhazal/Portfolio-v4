const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-7xl font-bold">Malek's Portfolio</h1>
            <p className="py-6 max-w-md mx-auto">
              Hi there, Im Malek Kazal, a{' '}
              <mark className="bg-white rounded-md p-0.5">
                Full-Stack Developer.
              </mark>{' '}
              I love to learn new stuff, teach, and develop.
            </p>
            <button className="btn">TO DO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
