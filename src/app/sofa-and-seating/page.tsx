import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

// Dummy data for sofa and seating items
const seatingItems = [
  { id: 101, name: 'Modern Velvet Sofa', price: '₹899', category: 'Sofa', image: 'sofa1.jpg', description: 'Luxurious feel with clean lines.' },
  { id: 102, name: 'Leather Recliner Chair', price: '₹649', category: 'Recliner', image: 'recliner1.jpg', description: 'Ultimate relaxation and comfort.' },
  { id: 103, name: 'Sectional Sofa with Chaise', price: '₹1499', category: 'Sectional', image: 'sectional1.jpg', description: 'Spacious seating for the whole family.' },
  { id: 104, name: 'Mid-Century Armchair', price: '₹349', category: 'Armchair', image: 'armchair3.jpg', description: 'Iconic design for a stylish touch.' },
  { id: 105, name: 'Convertible Sofa Bed', price: '₹799', category: 'Sofa Bed', image: 'sofabed1.jpg', description: 'Versatile solution for guests.' },
  { id: 106, name: 'Linen Loveseat', price: '₹599', category: 'Loveseat', image: 'loveseat1.jpg', description: 'Perfect for smaller spaces.' },
  { id: 107, name: 'Accent Chair with Ottoman', price: '₹499', category: 'Accent Chair', image: 'accentchair1.jpg', description: 'Comfortable seating with footrest.' },
  { id: 108, name: 'Outdoor Patio Sofa', price: '₹1199', category: 'Outdoor Sofa', image: 'outdoorsofa1.jpg', description: 'Weather-resistant for your patio.' },
];

export default function SofaAndSeatingPage() {
  return (
    <div className="content-center container py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-4">
         <h1 className="text-4xl font-bold mb-4 md:mb-0">Sofa & Seating</h1>
         {/* Placeholder for Filters */}
        <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter by Type
        </Button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {seatingItems.map((item) => (
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
                <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">{item.name}</CardTitle>
                <CardDescription className="text-sm pt-1">{item.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                 <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                 <p className="text-lg font-semibold text-teal-600">{item.price}</p>
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
