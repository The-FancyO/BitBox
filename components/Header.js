import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Link href="/">
          <a>
          <img src='https://i.postimg.cc/s23kM3YK/bitbox-software-high-resolution-logo-black-transparent.png' width={108} height={54} className='mx-auto'></img>
          </a>
        </Link>
    </header>
  );
}
