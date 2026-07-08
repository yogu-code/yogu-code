import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 px-8 py-6 text-sm text-neutral-600 sm:flex-row sm:px-16">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
        <a
          href="mailto:yogeshrane019@gmail.com"
          className="hover:text-neutral-900"
        >
          yogeshrane019@gmail.com
        </a>
        <span className="hidden text-neutral-300 sm:inline">|</span>
        <a href="tel:+918779269045" className="hover:text-neutral-900">
          +91 87792 69045
        </a>
      </div>

      <a
        href="https://www.linkedin.com/in/yogesh-rane-503226345"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-neutral-600 hover:text-neutral-900"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
    </footer>
  );
}