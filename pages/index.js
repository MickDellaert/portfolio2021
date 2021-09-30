import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    <Header />
    <main>
    <div id="projects" className="projects-anchor"></div>

    <section id="" className="pics grid md:grid-cols-2 2xl:grid-cols-4 gap-6 mx-6 md:mx-16 2xl:mx-24 mb-6 md:mb-16 2xl:mb-32 xl:pt-16 bg-white">

      {projectsLists.map((projectsList) => (
        <Project key={projectsList.id} {...projectsList} />
      ))}
    </section>
    <About />
    </main>
    <Footer/>
  </>
);
