'use client';
import { AnimatedTooltip } from '../components/ui/animated-tooltip';
import skills from '../data/skills.json';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="flex items-center bg-white dark:bg-black text-black dark:text-white flex-col h-screen lg:flex-row justify-around gap-10 lg:gap-0 w-full md:my-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-7xl text-center lg:text-start mx-auto"
        >
          <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            Skills <br /> and experience
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            My skills and knowledge in different fields, languages, frameworks,
            and technologies.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-12 lg:gap-20 items-center justify-center lg:justify-start w-full lg:w-1/2 px-5">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.05 * skill.id }}
              viewport={{
                once: true,
              }}
            >
              <AnimatedTooltip items={[skill]} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
