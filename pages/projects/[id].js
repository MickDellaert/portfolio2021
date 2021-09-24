import { projects } from "../../data";
import Link from "next/link";
import Image from "next/image";

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
  <div>
    <div className="project-header">
      <div className="project-description">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <div className="project-links">
        <Link href={project.linkLive} passHref>
          <a target="_blank" rel="noreferrer">
            {project.linkName}
          </a>
        </Link>
        <Link href={project.linkGit} passHref>
          <a target="_blank" rel="noreferrer">
            Git
          </a>
        </Link>
      </div>
    </div>

    <div className="pics">
      <Image
        layout="responsive"
        objectFit="contain"
        width={300}
        height={300}
        src={project.mainImage}
      />

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

    <div className="project-navbuttons">
      <Link href={`/projects/[id]`} as={`/projects/${project.id - 1}`} passHref>
        <button>{project.id > 1 ? "Previous" : ""}</button>
      </Link>
      <Link href={`/projects/[id]`} as={`/projects/${project.id + 1}`} passHref>
        <button>{project.id < 8 ? "Next" : ""}</button>
      </Link>
    </div>
  </div>
);
