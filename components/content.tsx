import React, { FC, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ContentProps {
  image: StaticImageData;
  content: ReactNode;
}

const Content: FC<ContentProps> = ({ image, content }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="col-span-1 flex justify-center">
        <div className="w-full" style={{ maxWidth: '12rem' }}>
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <div className="absolute inset-0 rounded-md shadow overflow-hidden bg-white">
              <Image
                src={image}
                alt="profile"
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-3">{content}</div>
    </div>
  );
};

export default Content;
