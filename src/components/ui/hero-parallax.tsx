'use client';
import React from 'react';
import { LayoutGrid } from './layout-grid';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  link: string;
  tags: string;
  description: string;
  imagePath: string;
};

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

const projectToCard = (project: Project, index: number): Card => ({
  id: index + 1,
  content: (
    <div className="text-white text-left">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.split(',').map((tag, i) => (
          <span
            key={i}
            className="bg-white text-black px-2 py-1 text-xs rounded-full"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-blue-300 hover:underline mt-2 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  ),
  className: 'bg-black rounded-xl',
  thumbnail: project.imagePath,
});

export const HeroSection = ({ projects }: { projects: Project[] }) => {
  const { t } = useTranslation();
  const cards = projects.map(projectToCard);

  return (
    <div className="bg-white dark:bg-black text-center" id="projects">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-2xl md:text-7xl font-bold text-black dark:text-white mb-8">
          {t('my-latest')} <br /> {t('development-work')}
        </h1>
        <p className="max-w-4xl text-base md:text-xl mb-12 mx-auto text-slate-950 dark:text-neutral-200">
          {t('projects-body')}
          <br />
          <span className="text-lg font-bold">Click to open</span>
        </p>
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
};
