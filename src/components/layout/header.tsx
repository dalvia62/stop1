"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#benefits', label: 'Benefits' },
  { href: '/#faq', label: 'FAQ' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => open && setOpen(false)}>
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Stop<span className="text-muted-foreground">And</span>Desist</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center mb-6" onClick={() => setOpen(false)}>
                <Shield className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold">Stop<span className="text-muted-foreground">And</span>Desist</span>
              </Link>
              <div className="grid gap-4">
                {[...navLinks, { href: '/contact', label: 'Contact' }].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
