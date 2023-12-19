import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src='https://i.postimg.cc/7Y2WMTbL/Logo.png' width={108} height={54} className='mx-auto'></img>
      <p className="text-1xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
