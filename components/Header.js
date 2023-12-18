import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <svg xmlns='http://www.w3.org/2000/svg' path='./logo_bitbox_Scaled.png'></svg>
      <p className="text-1xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
