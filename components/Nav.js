import Link from 'next/link';
import { SITE } from '@/lib/site';
import Seal from './Seal';
import CallButton from './CallButton';

export default function Nav() {
  return (
    <header className="nav">
      <div className="navin">
        <Link href="/" className="brand">
          <Seal />
          <span className="wm">
            <b>{SITE.shortName}</b>
            <span>{SITE.tagline}</span>
          </span>
        </Link>
        <nav className="navlinks">
          <Link href="/mobile-notary">Mobile Notary</Link>
          <Link href="/apostille">Apostille</Link>
          <Link href="/about">About</Link>
          <Link href="/book">Book</Link>
          <CallButton />
        </nav>
      </div>
    </header>
  );
}
