import React from 'react';
import { YourMusicData } from '../interfaces';

interface ListDetailProps {
  data: YourMusicData;
}

const ListDetail: React.FC<ListDetailProps> = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.artist}</p>
    </div>
  );
};

export default ListDetail;
