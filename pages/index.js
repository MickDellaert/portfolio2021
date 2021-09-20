import { projectlist } from '../data';

import Project from '../components/Project';
import Navbar from "../components/Navbar";

export const getStaticProps = async () => {
  return {
    props: {
      projectlistLists: projectlist,
    },
  };
};

export default ({ projectlistLists }) => (
  <>
      <Navbar/>
    <div>
      Projects
    </div>
      {projectlistLists.map((projectlistList) => (
        <Project key={projectlistList.id} {...projectlistList} />
      ))}
  </>
);
