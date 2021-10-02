import Link from "next/link";
import Image from "next/image";

const Project = ({ id, name, description, mainImage }) => (
  <>
    <Link href={`/projects/[id]`} as={`/projects/${id}`}>
      <div className={"grid-image-container"}>
        <Image
          layout="responsive"
          objectFit="cover"
          src={mainImage}
          alt={name}
          width={200}
          height={200}
          className={"image"}
        />

        <div className="grid-overlay">
          <div className="grid-title">{name}</div>
        </div>
      </div>
    </Link>
  </>
);

export default Project;
