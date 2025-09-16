'use client';

import { FC } from 'react';

import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { LoaderPinwheel } from 'lucide-react';
import queryString from 'query-string';

import { Button } from '@/components/ui/button';

const fetchPoke = async ({
  pageParam,
  signal,
}: {
  pageParam: string;
  signal: AbortSignal;
}) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=5`,
    { signal },
  );
  return res.json();
};

const Page: FC = () => {
  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['poke'],
      queryFn: fetchPoke,
      initialPageParam: '0',
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const parsed = queryString.parseUrl(lastPage.next);
          return parsed.query.offset as string;
        }
        return null;
      },
      refetchOnWindowFocus: false,
    });

  const handleCancelQuery = () => {
    queryClient.cancelQueries({ queryKey: ['poke'] });
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h3 className="font-semibold text-2xl">Infinite Queries</h3>
      <div className="w-full px-4 flex items-center flex-col gap-4">
        <ul className="flex gap-2 flex-wrap w-full">
          {data?.pages.flatMap((page) =>
            page.results.map((i: { name: string; url: string }) => (
              <li key={i.name} className="text-xs border rounded-sm px-4 py-2">
                {i.name}
              </li>
            )),
          )}
        </ul>
        <div className="flex items-center gap-1">
          <Button
            className="cursor-pointer"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {isFetchingNextPage ? (
              <LoaderPinwheel className="animate-spin" />
            ) : (
              <>Load more</>
            )}
          </Button>
          {isFetchingNextPage && (
            <Button variant="outline" onClick={handleCancelQuery}>
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
