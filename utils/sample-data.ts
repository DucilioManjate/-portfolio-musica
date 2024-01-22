// utils/sample-data.ts
import { YourMusicData } from '../interfaces';

export const getYourMusicData = (): YourMusicData[] => {
  return [
    { id: 1, title: 'Música 1', artist: 'Artista 1' },
    { id: 2, title: 'Música 2', artist: 'Artista 2' },
    // Adicione mais dados conforme necessário
  ];
};
