import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src='https://github.com/The-FancyO/Images/blob/main/logo_bitbox_Scaled.png?raw=true' width={18} height={16} className='mx-auto'></img>
      <p className="text-1xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
