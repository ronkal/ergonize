import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b-4 border-black p-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Ergonize
        </a>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <a href="#">Source Code</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">License</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Button variant="secondary">Register</Button>
          <Button variant="default">Log in</Button>
        </div>
      </div>
    </header>
  );
}
