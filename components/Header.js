import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Link href="/">
          <a>
          <img src='https://i.postimg.cc/3w7Z7RXr/bitbox-software-high-resolution-logo-black-transparent.png' width={108} height={54} className='mx-auto'></img>
          </a>
        </Link>
    </header>
  );
}
