import { Button } from "@/components/ui/button";
import { NavigationItem } from "@/types/navigation";

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
    <header className="border-b-2 border-black px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Ergonize
        </a>
        <nav className="hidden sm:inline">
          <ul className="flex flex-row gap-4">
            {items.map((item) => (
              <li key={item.title}>
                <a href={item.url} target={item.target}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <Button variant="outline">Register</Button>
          <Button variant="default">Log in</Button>
        </div>
      </div>
    </header>
  );
}
