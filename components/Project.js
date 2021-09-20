import Link from "next/link";
import Image from "next/image";

const Project = ({ id, description, mainImage }) => (
  <Link href={`/projects/[id]`} as={`/projects/${id}`} passHref>
    <Image
      layout="fixed"
      src={mainImage}
      alt={description}
      width={200}
      height={200}
    />
  </Link>
);

export default Project;
