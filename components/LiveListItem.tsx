import React from 'react';
import Link from 'next/Link';
import {Stream} from '@prisma/client';

interface LiveListItemProps {
  stream: Stream
}

const LiveListItem = ({stream}: LiveListItemProps) => {
  return (
    <Link href={`/streams/${stream?.id}`}>
      <a>
        <div className='pt-4'>
          <div className='w-full bg-slate-300 aspect-video shadow-sm'/>
          <h3 className=' text-gray-700 text-lg mt-2'>{stream.name}</h3>
        </div>
      </a>
    </Link>


  );
};

export default LiveListItem;
