import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <ul
          id="about"
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4 lg:px-0 lg:max-w-screen-xl mx-auto"
        >
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono">2016 - 2020</time>
              <div className="text-lg font-extrabold">
                Graphic Designer & Video Editor
              </div>
              Self-learned graphic design and video editing skills.
              <br />
              Mastered Adobe Creative Cloud, particularly Photoshop,
              Illustrator, After Effects, and Premiere Pro.
              <br />
              Managed client projects and requirements as a freelancer.
              <br />
              Crafted visually striking designs and captivating video content
              tailored to clients' visions.
            </div>
            <hr />
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono">2019 - 2021</time>
              <div className="text-lg font-extrabold">
                Shopify E-comm Strategist
              </div>
              Learned to create and manage websites and e-commerce stores on
              Shopify.
              <br />
              Spearheaded the launch and growth of multiple e-commerce ventures.
              <br />
              Self-learned Facebook advertising management techniques.
              <br />
              Applied strategic approaches to optimize advertising performance
              and reach target audiences.
            </div>
            <hr />
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono">2022 - 2023</time>
              <div className="text-lg font-extrabold">Vainer College</div>
              Studied Software development at Vanier college in Montreal, QC for
              a year and half.
              <br />
              Graduated with an A.E.C certificate in Software applications
              specialist.
              <br />
              Studied software design, SDLC, and full stack development.
              <br />
              Worked with different teams on various projects and applications.
            </div>
            <hr />
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono">2023</time>
              <div className="text-lg font-extrabold">
                Full-Stack Dev. @KinoKlik
              </div>
              • Utilized the MERN Stack (MongoDB, Express.js, React, and
              Node.js) for development tasks.
              <br />
              • Contributed to the enhancement of user experience and
              streamlined content sharing processes.
              <br />
              • Played a significant role in designing and implementing the User
              Interface of the platform.
              <br />
              • Set up Continuous Integration/Continuous Deployment (CI/CD)
              pipelines to automate deployment processes.
              <br />• Deployed the platform on Heroku for seamless accessibility
              and scalability.
            </div>
            <hr />
          </motion.li>
          <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono">2023</time>
              <div className="text-lg font-extrabold">
                Full-Stack Dev. @Algoseed Labs
              </div>
              • Utilized PHP and Laravel frameworks along with MySQL database to
              develop robust and scalable backend solutions, ensuring optimal
              performance and reliability of web applications.
              <br />
              • Demonstrated problem-solving skills by effectively diagnosing
              and resolving backend bugs and issues, improving overall
              application stability and user experience.
              <br />• Played a key role in restructuring backend components to
              enhance code organization, scalability, and maintainability,
              contributing to the long-term sustainability of the software
              projects.
            </div>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default About;
