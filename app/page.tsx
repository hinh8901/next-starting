import { FC } from 'react';

import Link from 'next/link';

const Home: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-1">
      <Link
        href="/tanstack-query/infinite-queries"
        className="bg-amber-800 text-white px-2.5"
      >
        Infinite queries
      </Link>
      <Link
        href="/tanstack-query/mutations"
        className="bg-amber-800 text-white px-2.5"
      >
        Mutations
      </Link>
      <Link
        href="/tanstack-query/prefetching"
        className="bg-amber-800 text-white px-2.5"
      >
        Prefetching
      </Link>
      <Link
        href="/tanstack-query/ssr"
        className="bg-amber-800 text-white px-2.5"
      >
        SSR
      </Link>
    </div>
  );
};

export default Home;
