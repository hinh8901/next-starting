'use client';

import { FC } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { Color as ColorType } from '../../helpers';

const Color: FC<ColorType> = ({ value }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2.5">
      <div
        style={{ background: value }}
        className="aspect-square rounded-full w-28"
      />
      <Button variant="outline" onClick={handleBack} className="cursor-pointer">
        Back
      </Button>
    </div>
  );
};

export default Color;
