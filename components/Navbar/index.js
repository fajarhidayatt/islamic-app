import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 py-3 px-7">
      <Link href="/">
        <a className="flex items-center gap-3">
          <Image src="/icon/logo.svg" width={40} height={40} />
          <h1 className="font-raleway text-white text-2xl font-semibold">
            Islamic
            <span className="text-green-500">App</span>
          </h1>
        </a>
      </Link>
    </nav>
  );
}
