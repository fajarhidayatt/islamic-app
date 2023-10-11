import { getTafsir } from 'services/data_api';
import Link from 'next/link';

export default function Tafsir({ data, surah }) {
  return (
    <section className="bg-gray-900 font-raleway min-h-screen flex justify-end overscroll-auto">
      <main className="w-full">
        <div className="bg-dark-500 sticky top-0 right-0 py-3 px-5 z-50 flex items-center justify-between text-white">
          <Link href={`/quran/${surah}`}>
            <a className="max-w-max flex items-center gap-3 text-white hover:text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>kembali</span>
            </a>
          </Link>
        </div>
        <div className="p-5">
          <div className="bg-dark-500 text-white rounded-md p-5 mb-3">
            <div className="hover:text-green-500">
              <div className="flex justify-between items-start">
                <p className="w-11 h-11 grid place-items-center bg-green-500 text-white font-semibold rounded-md">
                  {`${surah}:${data.number.insurah}`}
                </p>
                <p className="w-11/12 text-right font-arabic text-3xl leading-relaxed">
                  {data.text.ar}
                </p>
              </div>
              <p className="mt-10 mb-7 leading-relaxed">
                {data.translation.id}
              </p>
            </div>
            <hr />
            <div className="mt-5">
              <h3 className="font-semibold text-lg mb-3">Tafsir</h3>
              <p className="leading-loose">{data.tafsir.id}</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const [surah, verse] = query.tafsir;
  const response = await getTafsir(surah, verse);
  const data = response.data.ayah;

  return {
    props: {
      data,
      surah,
    },
  };
}
