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
  <div className="">
    <div className="project-header mx-16 mt-36">
      <div className="project-description">
        <h2 className="project-title text-3xl mb-2 ">{project.name}</h2>
        <p className="text-base">{project.description}</p>
      </div>
      <div className="project-links">
        <Link href={project.linkLive} passHref>
          <a className="text-gray-400 hover:text-green-500" target="_blank" rel="noreferrer">
            {project.linkName}
          </a>
        </Link>
        <Link href={project.linkGit} passHref>
          <a className="text-gray-400 hover:text-green-500"target="_blank" rel="noreferrer">
            Git
          </a>
        </Link>
      </div>
    </div>

    <div className="pics grid grid-flow-col mx-16">
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

    <div className="project-navbuttons mx-16">
      <Link href={`/projects/[id]`} as={`/projects/${project.id - 1}`} passHref>
        <button className="text-gray-400 hover:text-green-500">{project.id > 1 ? "Previous" : ""}</button>
      </Link>
      <Link href={`/projects/[id]`} as={`/projects/${project.id + 1}`} passHref>
        <button className="text-gray-400 hover:text-green-500">{project.id < 8 ? "Next" : ""}</button>
      </Link>
    </div>
  </div>
  </>
);
