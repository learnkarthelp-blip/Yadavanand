import { Link } from '@tanstack/react-router';
import { Phone, Clock, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Yadav Family Restaurant
                </h1>
                <p className="text-xl font-medium text-primary md:text-2xl">
                  Delicious Taste, Family Feel
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to Yadav Family Restaurant – where taste meets tradition. We serve fresh,
                hygienic and delicious vegetarian & non-vegetarian food for families and friends.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-6 py-3 text-base font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Order Online
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50">
                <img
                  src="/assets/generated/yadav-hero.dim_1600x600.png"
                  alt="Yadav Family Restaurant"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="border-y border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">Opening Hours</h2>
            <p className="text-xl text-muted-foreground">
              Monday – Sunday: <span className="font-semibold text-foreground">10:00 AM – 11:00 PM</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We're open every day to serve you delicious meals!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Explore More</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/about"
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                About Us
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn about our story and mission
              </p>
            </Link>

            <Link
              to="/menu"
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                Our Menu
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore our delicious offerings
              </p>
            </Link>

            <Link
              to="/gallery"
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                Gallery
              </h3>
              <p className="text-sm text-muted-foreground">
                View our restaurant and dishes
              </p>
            </Link>

            <Link
              to="/contact"
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
            >
              <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary">
                Contact
              </h3>
              <p className="text-sm text-muted-foreground">
                Get in touch with us
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
