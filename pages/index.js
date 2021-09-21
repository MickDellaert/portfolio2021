import { projects } from '../data';

import Project from '../components/Project';
import Navbar from "../components/Navbar";

export const getStaticProps = async () => {
  return {
    props: {
      projectsLists: projects,
    },
  };
};

export default ({ projectsLists }) => (
  <>
    <div>
      Projects
    </div>
      {projectsLists.map((projectsList) => (
        <Project key={projectsList.id} {...projectsList} />
      ))}
  </>
);
