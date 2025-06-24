"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BA</span>
            </div>
            <span className="font-semibold text-gray-900">BookAudio</span>
          </Link>

          <nav className="flex space-x-8">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600"
              } hover:text-indigo-600 transition-colors pb-4`}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`${
                pathname === "/categories"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600"
              } hover:text-indigo-600 transition-colors pb-4`}
            >
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
