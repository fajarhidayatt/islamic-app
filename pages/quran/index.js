import InputSearch from '@components/InputSeach';
import Navbar from '@components/Navbar';
import Surah from '@components/Surah';
import { useEffect, useState } from 'react';
import { getAllSurah } from 'services/data_api';

export default function quran({ dataSurahs }) {
  const [surahs, setSurahs] = useState(dataSurahs);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const resultSurahs = dataSurahs.filter((surah) =>
      surah.asma.id.short.toLowerCase().includes(keyword)
    );
    setSurahs(resultSurahs);
  }, [keyword]);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <section className="mt-10">
        <div className="text-center font-raleway">
          <h2 className="text-white text-3xl mb-5">Cari Surah</h2>
          <InputSearch
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onClick={() => setKeyword('')}
          />
        </div>
        <div className="container mx-auto py-10 px-5 xl:p-10 font-raleway grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {surahs.map((item) => (
            <Surah
              key={item.number}
              number={item.number}
              surahName={item.asma.id.short}
              type={item.type.id}
              translation={item.asma.translation.id}
              verses={item.ayahCount}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await getAllSurah();
  const dataSurahs = response.data;

  return {
    props: {
      dataSurahs,
    },
  };
}
