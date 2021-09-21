import { projects } from "../../data";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async ({ params }) => {
  const projectsList = projects.filter(
    (p) => p.id.toString() === params.id
  );
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
    <div>{project.name}</div>
    <div>{project.description}</div>
    <div>
    <Link href={project.linkLive} passHref>
    <a target="_blank" rel="noreferrer" >{project.linkName}</a>
    </Link>
    <Link href={project.linkGit} passHref>
    <a target="_blank" rel="noreferrer" >Git</a>
    </Link>
    </div>

    <Image
      
      width={300}
      height={300}
      src={project.mainImage}
    />

    <div>
      {project.detailImage.map((detailUrl) => {
        return (
          <>
            <div key={detailUrl}>
              <Image  width={300} height={300} alt="yes" src={detailUrl} />
            </div>
          </>
        );
      })}
    </div>

    <Link href="/" passHref>
      <button>Back</button>
    </Link>
  </div>
);
