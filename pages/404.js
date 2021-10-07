import Link from "next/link";
import Image from "next/dist/client/image";

import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found flex flex-col justify-center items-center h-screen">
      <div className="404-logo">
        <Image
          src="/MD_logo/MD_logo_courier_prime_green.svg"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
      <h1 className="text-xl mb-1 text-green-500">Seems you took a wrong turn</h1>
      <h2>This page can't be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
