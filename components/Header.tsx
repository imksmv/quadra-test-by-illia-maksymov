import Image from "next/image"
import Link from "next/link"
import Logo from "../public/Logo.webp"
import { ModeToggle } from "./ModeToggle"

export default function Header() {
  return (
    <header className="border-b rounded-b-3xl">
      <div className="container flex h-14 justify-between items-center">
        <nav>
          <ul>
            <li>
              <Link className="flex gap-2 items-center" href="/">
                <Image src={Logo} alt="Logo" />
                <p className="text-xl">Quadra Task</p>
              </Link>
            </li>
          </ul>
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
