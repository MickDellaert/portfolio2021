import { projectlist } from "../../data";
import NextLink from "next/link";
import Image from "next/image";

export const getStaticProps = async ({ params }) => {
  const projectlistList = projectlist.filter(
    (p) => p.id.toString() === params.id
  );
  return {
    props: {
      project: projectlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projectlist.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ project }) => (
  <div>
    <div>{project.name}</div>
    <div>{project.description}</div>
    
    <Image width={300} height={300} src={project.mainImage} />

    <div>
      {project.detailImage.map((elem) => {
        return (
          <>
            <div key={elem}>
              <Image width={300} height={300} alt="yes" src={elem} />
            </div>
          </>
        );
      })}
    </div>

    <NextLink href="/" passHref>
      <button>Back</button>
    </NextLink>
  </div>
);
