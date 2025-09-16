'use client';

import { ReactNode } from 'react';

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const makeQueryCleint = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10000,
        gcTime: 10000,
      },
    },
  });

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) return makeQueryCleint();
  else {
    if (!browserQueryClient) browserQueryClient = makeQueryCleint();
    return browserQueryClient;
  }
};

const TanstackQueryClientProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackQueryClientProvider;
