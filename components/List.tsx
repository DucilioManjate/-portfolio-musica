
import React from 'react';
import ListItem from './ListItem';
import { YourMusicData } from '../interfaces';

interface ListProps {
  data: YourMusicData[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default List;
