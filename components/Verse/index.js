import Link from 'next/link';
import AudioButton from './AudioButton';
import BookmarkButton from './BookmarkButton';

export default function Verse({
  verseNumber,
  surahNumber,
  arab,
  translation,
  audioUrl,
  audioActive,
  onClick,
}) {
  return (
    <div
      className="bg-dark-500 rounded-md p-5 mb-3"
      key={verseNumber}
      id={verseNumber}
      onClick={onClick}
    >
      <div className="text-white hover:text-green-500">
        <div className="flex justify-between items-start">
          <p className="w-11 h-11 grid place-items-center bg-green-500 text-white font-semibold rounded-md">
            {`${surahNumber}:${verseNumber}`}
          </p>
          <p className="w-11/12 text-right font-arabic text-3xl leading-relaxed">
            {arab}
          </p>
        </div>
        <p className="mt-10 mb-7 leading-relaxed">{translation}</p>
      </div>
      <hr />
      <div className="mt-3 flex items-center gap-3 text-white">
        <AudioButton
          verseNumber={verseNumber}
          audioUrl={audioUrl}
          audioActive={audioActive}
        />
        <BookmarkButton />
        <Link href={`/quran/${surahNumber}/${verseNumber}`}>
          <a className="flex items-center gap-2 hover:text-green-500">
            <span>Tafsir</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
