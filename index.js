import Verse from '@components/Verse';
import Surah from '@components/Surah';
import { getAllSurah, getSurah } from 'services/data_api';
import { useState } from 'react';

export default function index({ surahs, surah, numberSurah }) {
  const [sidebar, steSidebar] = useState(false);
  const [surahActive, setSurahActive] = useState(Number(numberSurah));
  const [verseActive, setVerseActive] = useState(0);

  return (
    <>
      <nav className="bg-dark-500 flex justify-end pt-3 pr-3">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="bg-dark-300 text-white border-2 border-green-500/0 focus:border-green-500/50 rounded outline-none py-1 px-4"
        />
      </nav>
      <section className="w-full h-screen bg-dark-500 lg:p-3 flex gap-5">
        <aside
          className={`w-full sm:w-6/12 lg:w-3/12 h-full absolute top-0 ${
            sidebar ? 'left-0' : '-left-full'
          } lg:static bg-dark-400 rounded-md p-3 overflow-auto no-scrollbar`}
        >
          {surahs.map((item) => (
            <Surah
              key={item.number}
              surahNumber={item.number}
              surahName={item.asma.id.short}
              translation={item.asma.translation.id}
              verses={item.ayahCount}
              active={surahActive === item.number}
              onClick={() => setSurahActive(item.number)}
              href={`/quran?surah=${item.number}`}
            />
          ))}
        </aside>
        <div className="w-full lg:w-9/12 h-full bg-dark-400 rounded-md overflow-auto no-scrollbar text-white p-7">
          {surah.ayahs.map((item) => (
            <Verse
              key={item.number.insurah}
              number={item.number.insurah}
              arab={item.text.ar}
              translation={item.translation.id}
              audio={item.audio.url}
              onClick={() => setVerseActive(item.number.insurah)}
              active={verseActive === item.number.insurah}
            />
          ))}
        </div>
        <button
          type="button"
          className="lg:hidden w-9 h-9 rounded-md bg-green-500 text-white absolute right-5 bottom-5 grid place-items-center"
          onClick={() => steSidebar(!sidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </section>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const getDataAllSurah = await getAllSurah();
  const surahs = getDataAllSurah.data;

  const numberSurah = query.surah;
  const getDataSurah = await getSurah(numberSurah);
  const surah = getDataSurah.data;

  return {
    props: {
      surahs,
      surah,
      numberSurah,
    },
  };
}
