import { Image as ImageIcon, UtensilsCrossed, PartyPopper } from 'lucide-react';

export default function GalleryPage() {
  const gallerySections = [
    {
      icon: UtensilsCrossed,
      title: 'Restaurant Interior Photos',
      description: 'Take a look at our warm and inviting dining space',
      images: [
        {
          src: '/assets/generated/gallery-interior-1.dim_1200x800.png',
          alt: 'Restaurant interior view',
        },
      ],
    },
    {
      icon: ImageIcon,
      title: 'Food Images',
      description: 'Feast your eyes on our delicious dishes',
      images: [
        {
          src: '/assets/generated/gallery-food-1.dim_1200x800.png',
          alt: 'Delicious food platter',
        },
      ],
    },
    {
      icon: PartyPopper,
      title: 'Party Celebration Pictures',
      description: 'Memorable moments from celebrations at our restaurant',
      images: [
        {
          src: '/assets/generated/gallery-party-1.dim_1200x800.png',
          alt: 'Party celebration',
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our restaurant, dishes, and memorable celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">
            {gallerySections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <div key={sectionIndex} className="space-y-6">
                  {/* Section Header */}
                  <div className="text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="mb-2 text-3xl font-bold text-foreground">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                  </div>

                  {/* Images Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {section.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-all hover:shadow-2xl hover:border-primary/50"
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-border/40 bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Want to Create Your Own Memories?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Book your table or party celebration with us today
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Call to Book: +91-9876543210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
