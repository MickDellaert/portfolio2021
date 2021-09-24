import Link from "next/link";
import Image from "next/image";


const Project = ({ id, description, mainImage }) => (
  <Link href={`/projects/[id]`} as={`/projects/${id}`} passHref>
    <div className={"image-container"}>
      <Image
      layout="responsive"
      objectFit='cover'
        src={mainImage}
        alt={description}
        width={200}
        height={200}
        className={"image"}
      />
    </div>
  </Link>
);

export default Project;
