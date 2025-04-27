import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sofa, Lamp, Table } from 'lucide-react'; // Changed Couch to Sofa

const featuredProducts = [
  { id: 1, name: 'Modern Velvet Sofa', price: '₹899', image: '/images/sofa.jpg', href: '/sofa-and-seating' },
  { id: 2, name: 'Oak Dining Table', price: '₹649', image: '/images/table.jpg', href: '/furniture' },
  { id: 3, name: 'Minimalist Floor Lamp', price: '₹129', image: '/images/lamp.jpg', href: '/furniture' },
];

const categories = [
    { name: 'Sofas', icon: Sofa, href: '/sofa-and-seating' }, // Changed Couch to Sofa
    { name: 'Tables', icon: Table, href: '/furniture' },
    { name: 'Lighting', icon: Lamp, href: '/furniture' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080?grayscale&blur=2" // Updated placeholder
          alt="Stylish living room setup"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
              Design Your Dream Space
            </h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-sm">
              Discover curated furniture collections that blend style, comfort, and quality.
            </p>
            <Button asChild size="lg" className="bg-teal-600 text-primary-foreground hover:bg-teal-600/90">
              <Link href="/furniture">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
       <section className="content-center py-16 bg-secondary">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10 text-secondary-foreground">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="group block">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="items-center text-center p-6">
                       <category.icon className="h-12 w-12 mb-3 text-teal-600 transition-transform duration-300 group-hover:scale-110" />
                      <CardTitle className="text-xl font-semibold text-secondary-foreground">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-6 pb-6">
                      <p className="text-sm text-muted-foreground">Explore our collection of {category.name.toLowerCase()}.</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>


      {/* Featured Products Section */}
      <section className="content-center py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                 <Link href={product.href} className="block group">
                    <div className="relative h-64 w-full">
                      <Image
                        // Using unique picsum photos based on product name for variety
                        src={`https://picsum.photos/seed/${product.name.replace(/\s+/g, '-')}/400/300`}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-teal-600">{product.price}</p>
                    </CardContent>
                 </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/furniture">
                View All Furniture <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="content-center container text-center">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-lg mb-6">Get 15% off on all sofa sets this month. Use code <strong className="bg-white/20 px-2 py-1 rounded">SOFA15</strong> at checkout.</p>
          <Button asChild variant="secondary" size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
            <Link href="/sofa-and-seating">Shop Sofas</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
