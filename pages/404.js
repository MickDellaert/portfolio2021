import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    },[])

    return (
        <div className="not-found">
            <h1>Seems you took a wrong turn</h1>
            <h2>This page can't be found</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
      );
}
 
export default NotFound;