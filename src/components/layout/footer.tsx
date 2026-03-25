import Link from 'next/link';
import { Shield } from 'lucide-react';

const footerLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/refund', label: 'Refund' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 px-4 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold">Stop<span className="text-muted-foreground">And</span>Desist</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
