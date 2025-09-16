'use client';

import { FC, useState } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { LoaderPinwheel } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Prefetching: FC = () => {
  const queryClient = useQueryClient();
  const [enabled, setEnabled] = useState(false);

  const { isFetching, data } = useQuery<{ name: string; value: string }[]>({
    queryKey: ['colorData'],
    queryFn: async ({ signal }) => {
      const res = await fetch('/api/colors', { signal });
      return res.json();
    },
    enabled,
    staleTime: 1000 * 60 * 5,
  });

  const onPrefetchPokeData = async () => {
    await queryClient.fetchQuery<{ name: string; value: string }[]>({
      queryKey: ['colorData'],
      queryFn: async ({ signal }) => {
        const res = await fetch('/api/colors', { signal });
        return res.json();
      },
    });

    setEnabled(true);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <Button onMouseEnter={onPrefetchPokeData}>Hover to prefetching</Button>
      {isFetching ? (
        <LoaderPinwheel className="animate-spin" />
      ) : (
        <ul>
          {data?.map((color) => (
            <li key={color.value}>{`${color.name}: ${color.value}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Prefetching;
