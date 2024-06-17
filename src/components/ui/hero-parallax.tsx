'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroParallax = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    tags: string;
    description: string;
    imagePath: string;
  }[];
}) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[220vh] md:h-[280vh] bg-white dark:bg-black py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      id="projects"
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0"
    >
      <h1 className="text-2xl md:text-7xl font-bold text-black dark:text-white">
        {t('my-latest')} <br /> {t('development-work')}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-slate-950 dark:text-neutral-200">
        {t('projects-body')}
      </p>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate,
}: {
  project: {
    title: string;
    link: string;
    tags: string;
    description: string;
    imagePath: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project h-60 w-[16rem] lg:h-96 lg:w-[32rem] relative flex-shrink-0 rounded-lg"
    >
      <a
        href={project.link}
        className="block group-hover/project:shadow-2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={project.imagePath}
          className="object-cover absolute h-full w-full inset-0 rounded-lg"
          alt={project.title}
          loading="lazy"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {project.tags.split(',').map((tag, index) => (
            <span
              key={index}
              className="opacity-0 group-hover/project:opacity-100 bg-white text-black px-2 py-1 font-semibold uppercase text-xs rounded-full"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
        <h2 className="opacity-0 group-hover/project:opacity-100 text-white font-bold">
          {project.title}
        </h2>
        <p className="opacity-0 group-hover/project:opacity-100 text-white text-xs">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};
