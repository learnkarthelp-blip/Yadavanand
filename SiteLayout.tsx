import { Link, useRouterState } from '@tanstack/react-router';
import { Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img
              src="/assets/generated/yadav-logo.dim_512x512.png"
              alt="Yadav Family Restaurant Logo"
              className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Yadav Family Restaurant
              </span>
              <span className="text-xs text-muted-foreground">Delicious Taste, Family Feel</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-1.5 text-xs font-medium transition-colors rounded ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Address */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Visit Us</h3>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                Yadav Family Restaurant
                <br />
                Near Pahelwan Farm
                <br />
                Meerut, Uttar Pradesh
              </address>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Contact</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +91-9876543210
                </a>
                <a
                  href="mailto:yadavrestaurant@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  yadavrestaurant@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="X (Twitter)"
                >
                  <SiX className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Yadav Family Restaurant. All rights reserved. | Built
              with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'yadav-restaurant'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
