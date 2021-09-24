import Hero from "../components/Hero";

import { projects } from "../data";

import Project from "../components/Project";

export const getStaticProps = async () => {
  return {
    props: {
      projectsLists: projects,
    },
  };
};

export default ({ projectsLists }) => (
  <>
    {" "}
    <Hero />
    <div id="projects" className="grid md:grid-cols-2 xl:grid-cols-4 md:m-16 pics">
      {projectsLists.map((projectsList) => (
        <Project key={projectsList.id} {...projectsList} />
      ))}
    </div>
  </>
);
