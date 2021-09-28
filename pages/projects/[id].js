import { projects } from "../../data";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";


export const getStaticProps = async ({ params }) => {
  const projectsList = projects.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      project: projectsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ project }) => (
  <>
  <Navbar/>
  <main className="project-container mx-6 md:mx-16 2xl:mx-24">
    <div className="project-header mt-44">
      <div className="project-description-container">
        <h2 className="project-title text-3xl mb-2">{project.name}</h2>
        <p className="text-lg mb-4">{project.description}</p>
      </div>
      <div className="project-links pb-4">
        <Link href={project.linkLive} passHref>
          <a className="livelink text-gray-500 hover:text-green-600 mr-6" target="_blank" rel="noreferrer">
            {project.linkName}
          </a>
        </Link>
        <Link href={project.linkGit} passHref>
          <a className="gitlink text-gray-500 hover:text-green-600"target="_blank" rel="noreferrer">
            Github
          </a>
        </Link>
      </div>
    </div>

    <div className="pics grid grid-col md:grid-flow-col">
      {/* <Image
        layout="responsive"
        objectFit="contain"
        width={300}
        height={300}
        src={project.mainImage}
      /> */}

      {project.detailImage.map((detailUrl) => {
        return (
          <>
            <div key={detailUrl}>
              <Image
                layout="responsive"
                objectFit="contain"
                width={300}
                height={300}
                alt={project.description}
                src={detailUrl}
              />
            </div>
          </>
        );
      })}
    </div>

    <div className="project-navbuttons h-16 py-3">
      <Link href={`/projects/[id]`} as={`/projects/${project.id - 1}`} passHref>
        <a className="text-gray-500 hover:text-green-600">{project.id > 1 ? "Previous" : ""}</a>
      </Link>
      <Link href={`/projects/[id]`} as={`/projects/${project.id + 1}`} passHref>
        <a className="text-gray-500 hover:text-green-600">{project.id < 8 ? "Next" : ""}</a>
      </Link>
    </div>
  </main>
  </>
);
