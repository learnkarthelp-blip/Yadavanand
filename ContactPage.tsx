import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Address */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">Address</h3>
                <address className="not-italic text-sm leading-relaxed text-muted-foreground">
                  Yadav Family Restaurant
                  <br />
                  Near Pahelwan Farm
                  <br />
                  Meerut, Uttar Pradesh
                </address>
              </div>

              {/* Phone */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +91-9876543210
                </a>
              </div>

              {/* Email */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:yadavrestaurant@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary break-all"
                >
                  yadavrestaurant@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday – Sunday
                  <br />
                  10:00 AM – 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Find Us</h2>
            <div className="overflow-hidden rounded-xl border border-border shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55836.89288847!2d77.68!3d29.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64c2fe6e2d89%3A0x444c7f0e5b0e0!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yadav Family Restaurant Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Visit?</h2>
            <p className="mb-6 text-muted-foreground">
              Call us to make a reservation or for any inquiries
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91-9876543210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
