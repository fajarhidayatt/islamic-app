import Link from 'next/link';

export default function index({
  number,
  surahName,
  type,
  translation,
  verses,
}) {
  return (
    <Link href={`/quran/${number}`}>
      <a>
        <div className="bg-dark-500 hover:bg-dark-400 flex items-start justify-between p-5 text-white rounded-md">
          <span className="w-8 h-8 grid place-items-center rounded-md bg-green-500 font-semibold mr-5">
            {number}
          </span>
          <div className="mr-auto">
            <h2 className="text-xl font-semibold mb-1.5">{surahName}</h2>
            <p className="text-sm">{translation}</p>
            <p className="text-sm hidden">{type}</p>
          </div>
          <span className="text-sm">{`${verses} Ayat`}</span>
        </div>
      </a>
    </Link>
  );
}
