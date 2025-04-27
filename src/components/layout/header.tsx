import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Sofa } from 'lucide-react';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/furniture', label: 'Furniture' },
  { href: '/sofa-and-seating', label: 'Sofa and Seating' },
  { href: '/contact-us', label: 'Contact Us' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background" style={{ backgroundColor: '#F5F5F5', paddingLeft: "20px" }}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sofa className="h-6 w-6 text-teal-600" />
            <span className="font-bold">Vinmin Furnitures</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="transition-colors hover:text-teal-600"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Mobile Menu */}
          <div className="md:hidden">
             <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0 pt-12" style={{ backgroundColor: '#F5F5F5', paddingLeft: "20px" }}>
                   <Link href="/" className="flex items-center space-x-2 mb-6 px-4">
                     <Sofa className="h-6 w-6 text-teal-600" />
                     <span className="font-bold">Vinmin Furnitures</span>
                   </Link>
                   <nav className="flex flex-col space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className="block px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
          </div>
          <Link href="/" className="flex items-center space-x-2 md:hidden pr-4">
            <Sofa className="h-6 w-6 text-teal-600" />
            <span className="font-bold">Vinmin</span>
          </Link>
           {/* Optional: Add Search or User Account icons here */}
        </div>
      </div>
    </header>
  );
}
