import { Check, Calendar, Target, Sparkles, Users, PartyPopper, Utensils } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Fresh Ingredients',
      description: 'We use only the freshest ingredients in all our dishes',
    },
    {
      icon: Utensils,
      title: 'Clean Kitchen',
      description: 'Maintaining the highest standards of hygiene and cleanliness',
    },
    {
      icon: Users,
      title: 'Family Friendly Environment',
      description: 'A warm and welcoming atmosphere for the whole family',
    },
    {
      icon: PartyPopper,
      title: 'Birthday & Party Booking Available',
      description: 'Host your special celebrations with us',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the story behind Yadav Family Restaurant
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Calendar className="h-4 w-4" />
                  Established 2020
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Yadav Family Restaurant was started in 2020 in Meerut with a simple vision: to
                  bring families together over delicious, authentic food in a warm and welcoming
                  environment.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  What began as a small family venture has grown into a beloved dining destination,
                  known for our commitment to quality, taste, and hospitality.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <div className="mb-4 inline-flex items-center gap-2 text-primary">
                  <Target className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our mission is to provide quality food at affordable prices, ensuring every guest
                  leaves with a smile and a satisfied appetite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-y border-border/40 bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
              What Makes Us Special
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
                  >
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Values</h2>
            <div className="space-y-4">
              {[
                'Quality ingredients sourced from trusted suppliers',
                'Traditional recipes with authentic flavors',
                'Exceptional customer service and hospitality',
                'Clean and hygienic food preparation',
                'Affordable pricing for all families',
                'A welcoming space for celebrations and gatherings',
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-base text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
