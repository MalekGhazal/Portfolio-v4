import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="hero min-h-screen"
      >
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-6xl md:text-8xl font-bold">
              Malek's Portfolio
            </h1>
            <p className="py-6 text-lg max-w-md mx-auto">
              Hi there, Im Malek Kazal, a{' '}
              <mark className="bg-white rounded-md p-0.5">
                Full-Stack Developer.
              </mark>
              <br />I love to learn new stuff, teach, and develop.
            </p>
            <button className="btn">TO DO</button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
