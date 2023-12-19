import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
        <Link href="/">
          <a>
          <img src='https://i.postimg.cc/zv5jDfZF/Bit-Box-Logo-Scaled-Trasparent.png' className='mx-auto'></img>
          </a>
        </Link>
    </header>
  );
}
