import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src='https://i.postimg.cc/G2RgYw2h/logo-bitbox-Scaled.png' width={108} height={54} className='mx-auto'></img>
      <p className="text-1xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
