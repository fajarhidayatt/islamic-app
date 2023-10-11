import BackButton from '@components/BackButton';
import InputSearch from '@components/InputSeach';
import NumberVerse from '@components/NumberVerse';
import Verse from '@components/Verse';
import { useEffect, useState } from 'react';
import { getAllSurah, getSurah } from 'services/data_api';
import cx from 'classnames';

export default function detailSurah({ surah }) {
  const [verses, setVerses] = useState(surah.ayahs);
  const [number, setNumber] = useState('');
  const [audioActive, setAudioActive] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const sidebarClass = cx({
    'w-7/12 sm:w-6/12 md:w-4/12 lg:w-2/12 h-screen fixed top-0 bg-dark-500 pt-0 p-3 overflow-auto no-scrollbar z-40 transition-all duration-300': true,
    'left-0': sidebar,
    '-left-full': !sidebar,
  });

  const mainClass = cx({
    'transition-all duration-300': true,
    'w-full lg:w-10/12': sidebar,
    'w-full': !sidebar,
  });

  useEffect(() => {
    const resultVerses = surah.ayahs.filter((verse) =>
      verse.number.insurah.toString().includes(number)
    );
    setVerses(resultVerses);
  }, [number]);

  return (
    <section className="bg-gray-900 font-raleway min-h-screen flex justify-end overscroll-auto">
      <aside className={sidebarClass}>
        <div className="pt-16 lg:pt-5 pb-5 sticky top-0 left-0 bg-dark-500">
          <InputSearch
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            onClick={() => setNumber('')}
          />
        </div>
        {verses.map((verse) => (
          <NumberVerse
            key={verse.number.insurah}
            number={verse.number.insurah}
            onClick={() => setSidebar(false)}
          />
        ))}
      </aside>
      <main className={mainClass}>
        <div className="bg-dark-500 sticky top-0 right-0 py-3 px-5 z-50 flex items-center justify-between text-white">
          <BackButton />
          <button
            type="button"
            className="hover:text-green-500"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="p-5">
          {surah.ayahs.map((verse) => (
            <Verse
              key={verse.number.insurah}
              surahNumber={surah.number}
              verseNumber={verse.number.insurah}
              arab={verse.text.ar}
              translation={verse.translation.id}
              audioUrl={verse.audio.url}
              onClick={() => setAudioActive(verse.number.insurah)}
              audioActive={audioActive === verse.number.insurah}
            />
          ))}
        </div>
      </main>
    </section>
  );
}

export async function getStaticPaths() {
  const response = await getAllSurah();
  const paths = response.data.map((surahItem) => ({
    params: {
      id: `${surahItem.number}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const response = await getSurah(id);
  const surah = response.data;

  return {
    props: {
      surah,
    },
  };
}
