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
    <div className="pics">

      {projectsLists.map((projectsList) => (
        <Project key={projectsList.id} {...projectsList} />
      ))}
    </div>
  </>
);
