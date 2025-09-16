import { FC } from 'react';

import Link from 'next/link';

import { LayoutGrid } from 'lucide-react';

const Sidebar: FC = () => {
  return (
    <div className="flex items-center flex-wrap gap-1">
      <Link href="/" className="bg-amber-800 text-white p-2.5">
        <LayoutGrid />
      </Link>
    </div>
  );
};

export default Sidebar;
