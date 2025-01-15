import Link from "next/link";
import { InstagramIcon } from "../icons/instagram-icon";

export function Footer() {
  return (
    <footer className="space-y-4 bg-black-400 p-8 text-white-400">
      <div className="flex flex-col items-start justify-between md:flex-row">
        <div>
          <h2 className="mb-1 text-xl font-semibold">Serrano Construction</h2>
          <p className="text-sm text-gray-300">
            General Contractor License #745844
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="mailto:rod5547@gmail.com" className="hover:underline">
            rod5547@gmail.com
          </a>
          <a href="tel:9163205547" className="hover:underline">
            <span>(916) 320-5547</span>
          </a>

          <a
            href="https://www.instagram.com/serrano_construction_norcal/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <InstagramIcon className="h-6 w-6 fill-white-400" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between border-t border-gray-600 pt-4 md:flex-row">
        <p className="mb-2 text-sm text-gray-300 md:mb-0">
          © 2025 Serrano Construction. All rights reserved.
        </p>
        <Link
          href="/privacy-policy"
          className="text-sm text-gray-300 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
