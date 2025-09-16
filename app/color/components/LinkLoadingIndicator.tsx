'use client';

import { FC } from 'react';

import { useLinkStatus } from 'next/link';

import { LoaderCircle } from 'lucide-react';

const LinkLoadingIndicator: FC = () => {
  const { pending } = useLinkStatus();

  return pending ? (
    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[#8f8686cf]">
      <LoaderCircle className="animate-spin" />
    </div>
  ) : null;
};

export default LinkLoadingIndicator;
