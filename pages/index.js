import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Header from "../components/Header";

import { projects } from "../data";



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
    <Header/>
    <div id="projects" className="projects-anchor">
</div> 
    <div
      className="pics grid md:grid-cols-2 gap-4 xl:grid-cols-4 mx-4 md:mx-16 md:mb-16"
    >
      {projectsLists.map((projectsList) => (
        <Project key={projectsList.id} {...projectsList} />
      ))}
    </div>
    <About />
  </>
);
