// components/ListItem.tsx
import React from 'react';
import { YourMusicData } from '../interfaces';

interface ListItemProps {
  data: YourMusicData;
}

const ListItem: React.FC<ListItemProps> = ({ data }) => {
  return (
    <li>
      <h3>{data.title}</h3>
      <p>{data.artist}</p>
    </li>
  );
};

export default ListItem;
