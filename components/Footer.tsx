import Logo from "../public/Logo.webp"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t rounded-t-3xl">
      <div className="container h-14 flex items-center justify-between">
        <Image
          className="h-8 w-8 grayscale object-contain"
          src={Logo}
          alt="Logo"
        />
        <p>
          Built with ❤️ by{" "}
          <a
            className="underline underline-offset-2 hover:text-muted-foreground duration-150"
            href="https://github.com/imksmv"
            rel="noopener noreferrer"
            target="_blank"
          >
            Illia Maksymov
          </a>
        </p>
      </div>
    </footer>
  )
}
