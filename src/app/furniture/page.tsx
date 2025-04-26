import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

// Expanded dummy data for furniture items
const furnitureItems = [
  { id: 1, name: 'Classic Wooden Chair', price: '$199', category: 'Chairs', image: 'chair1.jpg', description: 'Timeless design, solid wood construction.' },
  { id: 2, name: 'Modern Glass Coffee Table', price: '$299', category: 'Tables', image: 'table1.jpg', description: 'Sleek and contemporary centerpiece.' },
  { id: 3, name: 'Plush Armchair', price: '$450', category: 'Seating', image: 'armchair1.jpg', description: 'Ultimate comfort with soft upholstery.' },
  { id: 4, name: 'Minimalist Bookshelf', price: '$350', category: 'Storage', image: 'bookshelf1.jpg', description: 'Display your collection in style.' },
  { id: 5, name: 'Scandinavian Dining Set', price: '$1200', category: 'Dining', image: 'dining1.jpg', description: 'Seats 4, clean lines, light wood finish.' },
  { id: 6, name: 'Industrial Style Lamp', price: '$99', category: 'Lighting', image: 'lamp2.jpg', description: 'Adds character to any room.' },
  { id: 7, name: 'Leather Office Chair', price: '$399', category: 'Office', image: 'officechair1.jpg', description: 'Ergonomic support for long work hours.' },
  { id: 8, name: 'Rustic Bedside Table', price: '$149', category: 'Bedroom', image: 'bedsidetable1.jpg', description: 'Charming and functional.' },
   { id: 9, name: 'Velvet Accent Chair', price: '$249', category: 'Chairs', image: 'chair2.jpg', description: 'Adds a pop of color and luxury.' },
   { id: 10, name: 'Extendable Dining Table', price: '$899', category: 'Tables', image: 'table2.jpg', description: 'Perfect for hosting guests.' },
   { id: 11, name: 'Cozy Reading Nook Chair', price: '$520', category: 'Seating', image: 'armchair2.jpg', description: 'Sink in and relax with a good book.' },
   { id: 12, name: 'Floating Wall Shelves', price: '$79', category: 'Storage', image: 'shelf1.jpg', description: 'Modern storage solution.' },
];

export default function FurniturePage() {
  return (
    <div className="content-center container py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">All Furniture</h1>
         {/* Placeholder for Filters */}
        <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {furnitureItems.map((item) => (
          <Card key={item.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
             <Link href={`/furniture/${item.id}`} className="block group flex flex-col flex-grow">
                 <div className="relative h-60 w-full">
                  <Image
                    // Using unique picsum photos based on product name
                    src={`https://picsum.photos/seed/${item.name.replace(/\s+/g, '-')}/400/300`}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                     className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.name}</CardTitle>
                  <CardDescription className="text-sm pt-1">{item.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <p className="text-lg font-semibold text-primary">{item.price}</p>
                </CardContent>
             </Link>
          </Card>
        ))}
      </div>
       {/* Optional Pagination */}
       {/* <div className="mt-12 flex justify-center">
         <Button variant="outline">Load More</Button>
       </div> */}
    </div>
  );
}
