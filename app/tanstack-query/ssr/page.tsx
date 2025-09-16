import { FC } from 'react';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Colors from './_component/Colors';

const SSR: FC = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<{ name: string; value: string }[]>({
    queryKey: ['colors'],
    queryFn: async () => {
      const res = await fetch('api/colors');
      return res.json();
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Colors />
    </HydrationBoundary>
  );
};

export default SSR;
