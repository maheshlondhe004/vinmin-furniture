import Link from 'next/link';
import { Sofa } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-secondary">
      <div className="content-center container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sofa className="h-6 w-6 text-teal-600" />
              <span className="font-bold text-lg">Vinmin Furnitures</span>
            </Link>
            <p className="text-sm text-secondary-foreground">
              Quality furniture for your home and office.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/furniture" className="text-sm hover:text-teal-600">Furniture</Link></li>
              <li><Link href="/sofa-and-seating" className="text-sm hover:text-teal-600">Sofa & Seating</Link></li>
              <li><Link href="/contact-us" className="text-sm hover:text-teal-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-secondary-foreground">Help</h4>
            <ul className="space-y-2">
               <li><Link href="#" className="text-sm hover:text-teal-600">FAQ</Link></li>
               <li><Link href="#" className="text-sm hover:text-teal-600">Shipping</Link></li>
               <li><Link href="#" className="text-sm hover:text-teal-600">Returns</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold mb-3 text-secondary-foreground">Contact</h4>
             <p className="text-sm">123 Furniture Lane, Cityville, ST 12345</p>
             <p className="text-sm">Email: info@vinmin.com</p>
             <p className="text-sm">Phone: (123) 456-7890</p>
           </div>
        </div>
        <div className="mt-8 pt-4 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/70">
          © {new Date().getFullYear()} Vinmin Furnitures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
