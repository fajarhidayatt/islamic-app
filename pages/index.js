import Link from 'next/link';

export default function index() {
  return (
    <section className="bg-gray-900 h-screen grid place-items-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-10">Al-Quran</h1>
        <div>
          <Link href="/quran">
            <a className="py-2.5 px-4 rounded-lg bg-green-500">Baca Quran</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
