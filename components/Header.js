import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src='https://i.postimg.cc/15VQV4G9/Logo.png' width={18} height={16} className='mx-auto' style={"transform: scale(2)"}></img>
      <p className="text-1xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
