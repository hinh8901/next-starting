'use client';

import { FC } from 'react';

import { useQuery } from '@tanstack/react-query';
import { LoaderPinwheel } from 'lucide-react';

const Colors: FC = () => {
  const { data, isFetching } = useQuery<{ name: string; value: string }[]>({
    queryKey: ['colors'],
    queryFn: async () => {
      const res = await fetch('/api/colors');
      return res.json();
    },
  });

  return (
    <div className="flex items-center justify-center">
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

export default Colors;
