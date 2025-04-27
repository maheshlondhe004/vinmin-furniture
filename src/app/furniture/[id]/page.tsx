import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';

// Dummy data fetching function (replace with actual data fetching)
async function getFurnitureItem(id: string) {
  // Simulate fetching data based on ID
  // In a real app, you'd fetch from an API or database
  const allItems = [
    { id: '1', name: 'Classic Wooden Chair', price: '₹199', category: 'Chairs', image: 'chair1.jpg', description: 'Timeless design meets durability in this solid wood chair. Perfect for dining rooms or as an accent piece.', rating: 4.5, reviews: 120, dimensions: '35" H x 18" W x 20" D', material: 'Oak Wood' },
    { id: '2', name: 'Modern Glass Coffee Table', price: '₹299', category: 'Tables', image: 'table1.jpg', description: 'A sleek and contemporary centerpiece for your living room. Features a tempered glass top and sturdy metal frame.', rating: 4.2, reviews: 85, dimensions: '18" H x 48" W x 24" D', material: 'Glass, Metal' },
    { id: '3', name: 'Plush Armchair', price: '₹450', category: 'Seating', image: 'armchair1.jpg', description: 'Sink into ultimate comfort with this plush armchair. Soft upholstery and generous padding make it ideal for relaxation.', rating: 4.8, reviews: 210, dimensions: '32" H x 30" W x 34" D', material: 'Velvet, Wood Frame' },
    // Add more items matching IDs from furniture/page.tsx and sofa-and-seating/page.tsx
    { id: '101', name: 'Modern Velvet Sofa', price: '₹899', category: 'Sofa', image: 'sofa1.jpg', description: 'Experience luxury with this modern velvet sofa. Its clean lines and soft texture elevate any living space.', rating: 4.7, reviews: 150, dimensions: '30" H x 84" W x 36" D', material: 'Velvet, Hardwood Frame' },
    { id: '102', name: 'Leather Recliner Chair', price: '₹649', category: 'Recliner', image: 'recliner1.jpg', description: 'The ultimate relaxation chair. Features smooth reclining mechanism and premium top-grain leather.', rating: 4.6, reviews: 195, dimensions: '40" H x 35" W x 38" D', material: 'Top-Grain Leather, Steel Mechanism' },
    // Ensure all IDs used in listing pages have corresponding details here
  ];

  const item = allItems.find(item => item.id === id);

  // Simulate not found
  if (!item) {
     return null; // Or throw an error to show a 404 page
  }
  return item;
}

export default async function FurnitureItemPage({ params }: { params: { id: string } }) {
  const item = await getFurnitureItem(params.id);

  if (!item) {
    return <div className="container py-12 text-center">Item not found.</div>;
  }

  return (
    <div className="content-center container py-12">
        <Link href="/furniture" className="inline-flex items-center text-sm text-muted-foreground hover:text-teal-600 mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Furniture
        </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery Placeholder */}
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
          <Image
            src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '-')}/600/600`}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            priority
          />
           {/* TODO: Add thumbnail previews or carousel */}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{item.name}</h1>
          <p className="text-sm text-muted-foreground mb-4">Category: {item.category}</p>

          <div className="flex items-center mb-4 space-x-2">
             <div className="flex items-center text-yellow-500">
               {[...Array(Math.floor(item.rating))].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
               {item.rating % 1 !== 0 && <Star key="half" className="h-5 w-5 fill-current opacity-50" />} {/* Basic half star */}
               {[...Array(5 - Math.ceil(item.rating))].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-muted-foreground" />)}
             </div>
             <span className="text-sm text-muted-foreground">({item.reviews} reviews)</span>
          </div>

          <p className="text-3xl font-semibold text-teal-600 mb-6">{item.price}</p>

          <p className="text-base mb-6">{item.description}</p>

          <Card className="bg-secondary mb-6">
             <CardContent className="pt-6 space-y-2 text-sm text-secondary-foreground">
                <p><strong>Material:</strong> {item.material}</p>
                <p><strong>Dimensions:</strong> {item.dimensions}</p>
                {/* Add more details like color options, SKU etc. */}
             </CardContent>
          </Card>


          <Button size="lg" className="bg-teal-600 text-white w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          {/* Optional: Add quantity selector */}
        </div>
      </div>

      {/* Related Products Section Placeholder */}
       <section className="mt-16 pt-8 border-t">
         <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder Cards - Fetch related items in a real app */}
            {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden shadow-sm">
                    <div className="relative h-48 w-full bg-muted">
                        <Image src={`https://picsum.photos/seed/related-${i}/400/300`} alt="Related Product" layout="fill" objectFit="cover" />
                    </div>
                    <CardHeader className="pb-1">
                        <CardTitle className="text-base">Related Item {i}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-base font-semibold text-teal-600">$XXX</p>
                    </CardContent>
                </Card>
            ))}
         </div>
       </section>
    </div>
  );
}

// Optional: Generate static paths if you know the IDs beforehand
// export async function generateStaticParams() {
//   // Fetch all furniture IDs
//   const ids = ['1', '2', '3', '101', '102']; // Example IDs
//   return ids.map((id) => ({ id }));
// }

