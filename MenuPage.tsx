import { Leaf, Drumstick, Croissant, Coffee } from 'lucide-react';

export default function MenuPage() {
  const menuSections = [
    {
      icon: Leaf,
      title: 'Veg Items',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      items: [
        { name: 'Paneer Butter Masala', price: 220 },
        { name: 'Dal Makhani', price: 180 },
        { name: 'Veg Biryani', price: 200 },
      ],
    },
    {
      icon: Drumstick,
      title: 'Non-Veg Items',
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      items: [
        { name: 'Chicken Curry', price: 280 },
        { name: 'Butter Chicken', price: 320 },
        { name: 'Chicken Biryani', price: 250 },
      ],
    },
    {
      icon: Croissant,
      title: 'Breads',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      items: [
        { name: 'Tandoori Roti', price: 15 },
        { name: 'Butter Naan', price: 35 },
      ],
    },
    {
      icon: Coffee,
      title: 'Beverages',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      items: [
        { name: 'Cold Drink', price: 40 },
        { name: 'Lassi', price: 60 },
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
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our delicious selection of vegetarian and non-vegetarian dishes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              {menuSections.map((section, sectionIndex) => {
                const Icon = section.icon;
                return (
                  <div
                    key={sectionIndex}
                    className="rounded-xl border border-border bg-card shadow-lg overflow-hidden"
                  >
                    {/* Section Header */}
                    <div className={`${section.bgColor} px-6 py-4 border-b border-border`}>
                      <div className="flex items-center gap-3">
                        <div className={`${section.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-6">
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center justify-between rounded-lg border border-border/50 bg-background p-4 transition-all hover:border-primary/50 hover:shadow-sm"
                          >
                            <span className="text-base font-medium text-foreground">
                              {item.name}
                            </span>
                            <span className="text-lg font-bold text-primary">₹{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-border/40 bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Order?</h2>
            <p className="mb-6 text-muted-foreground">
              Call us now or visit our restaurant to enjoy these delicious dishes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                Call Now: +91-9876543210
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
