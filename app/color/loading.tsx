import { FC } from 'react';

import { LoaderPinwheel } from 'lucide-react';

const Loading: FC = () => {
  return <LoaderPinwheel className="animate-spin" color="#ffffff" />;
};

export default Loading;
