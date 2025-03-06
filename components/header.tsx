import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/types/navigation";
import Link from "next/link";

// Navbar items.
const items: NavigationItem[] = [
  {
    title: "Source Code",
    url: "https://www.github.com/ronkal/ergonize",
    target: "_blank",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "License",
    url: "#",
  },
];

export default function Header() {
  return (
    <header className="border-border border-b px-4 py-2">
      <div className="text-sidebar-foreground mx-auto flex max-w-7xl items-center justify-between gap-2">
        <Link href="/" className="text-2xl font-bold">
          Ergonize
        </Link>
        <nav className="hidden md:inline">
          <ul className="flex flex-row gap-2">
            {items.map((item) => (
              <li key={item.title}>
                <Link
                  className="hover:underline text-nowrap text-sm lg:text-lg"
                  href={item.url}
                  target={item.target}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2">
          <Button variant="outline">Register</Button>
          <Button variant="default">Log in</Button>
        </div>
      </div>
    </header>
  );
}
