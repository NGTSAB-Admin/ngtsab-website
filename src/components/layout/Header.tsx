import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
const aboutLinks = [{
  title: "About Us",
  href: "/about",
  description: "Learn about NGTSAB and our story"
}, {
  title: "The People",
  href: "/about/people",
  description: "Meet our leadership team"
}, {
  title: "The Mission",
  href: "/about/mission",
  description: "Our goals and vision"
}];
const resourceLinks = [{
  title: "Documents",
  href: "/resources/documents",
  description: "Access our official documents"
}, {
  title: "Bylaws",
  href: "/resources/documents/bylaws",
  description: "Read our organizational bylaws"
}, {
  title: "For Teachers",
  href: "/resources/teachers",
  description: "Resources for educators"
}, {
  title: "For Students",
  href: "/resources/students",
  description: "Resources for students"
}, {
  title: "Starting a GT Board",
  href: "/resources/start-board",
  description: "Guide to creating your own board"
}];
const legislationLinks = [{
  title: "About Automatic Enrollment",
  href: "/legislation",
  description: "Understanding automatic enrollment"
}, {
  title: "Why Automatic Enrollment",
  href: "/legislation/why",
  description: "Benefits and importance"
}, {
  title: "How to Promote Legislation",
  href: "/legislation/promote",
  description: "Take action in your state"
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary font-sans">NGTSAB</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {aboutLinks.map(link => <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link to={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>)}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  {resourceLinks.map(link => <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link to={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>)}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Legislation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {legislationLinks.map(link => <li key={link.href}>
                      <NavigationMenuLink asChild>
                        <Link to={link.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{link.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>)}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-4">
            <MobileDropdown title="About" links={aboutLinks} />
            <MobileDropdown title="Resources" links={resourceLinks} />
            <Link to="/blog" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <MobileDropdown title="Legislation" links={legislationLinks} />
            <div className="flex flex-col gap-2 mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </Button>
              <Button asChild className="w-full bg-primary text-primary-foreground">
                <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </nav>
        </div>}
    </header>;
}
function MobileDropdown({
  title,
  links
}: {
  title: string;
  links: {
    title: string;
    href: string;
    description: string;
  }[];
}) {
  const [open, setOpen] = useState(false);
  return <div>
      <button className="flex w-full items-center justify-between py-2 text-sm font-medium" onClick={() => setOpen(!open)}>
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="pl-4 space-y-2 mt-2">
          {links.map(link => <Link key={link.href} to={link.href} className="block py-1 text-sm text-muted-foreground hover:text-foreground">
              {link.title}
            </Link>)}
        </div>}
    </div>;
}