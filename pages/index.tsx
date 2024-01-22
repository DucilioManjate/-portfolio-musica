// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import { getYourMusicData } from '../utils/sample-data';

const Home: React.FC = () => {
  const yourMusicData = getYourMusicData();

  return (
    <Layout>
      <h1>Últimos Lançamentos</h1>
      <List data={yourMusicData} />
    </Layout>
  );
};

export default Home;
