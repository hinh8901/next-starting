import { FC } from 'react';

import { Color as ColorType, fetchColors } from '../helpers';

import Color from './component/Color';

export const generateStaticParams = async () => {
  const response = await fetch('/api/colors');
  const colors: ColorType[] = await response.json();

  return colors.map((color) => ({ slug: color.name }));
};

const Page: FC<{ params: Promise<{ slug: string }> }> = async ({ params }) => {
  const { slug } = await params;
  const colors = await fetchColors();
  const color = colors.find((color) => color.name === slug);
  return (
    <Color
      name={color?.name ?? 'Not found'}
      value={color?.value ?? 'undefined'}
    />
  );
};

export default Page;
