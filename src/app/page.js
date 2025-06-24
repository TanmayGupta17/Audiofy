import Link from "next/link";
import BookCard from "@/Components/BookCard";
import { featuredBooks } from "@/data/mockData";

export default function Homepage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Books into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
            Audio Summaries
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Discover key insights from business and self-help books through
          AI-generated audio summaries. Learn faster, retain more, and apply
          knowledge immediately with our curated collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/categories"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Browse Categories
          </Link>
          <button className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-all">
            How It Works
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="text-center group">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            AI-Powered Summaries
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Advanced AI extracts key insights and converts them into engaging,
            easy-to-understand audio content.
          </p>
        </div>
        <div className="text-center group">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Save Valuable Time
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Get the essence of entire books in 15-25 minute audio summaries,
            perfect for busy schedules.
          </p>
        </div>
        <div className="text-center group">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Learn Anywhere
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Listen while commuting, exercising, or during any downtime to
            maximize your learning potential.
          </p>
        </div>
      </div>

      {/* Featured Books */}
      <div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured Summaries
            </h2>
            <p className="text-gray-600">
              Hand-picked book summaries to accelerate your personal growth
            </p>
          </div>
          <Link
            href="/categories"
            className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center group"
          >
            View All
            <svg
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of learners who are accelerating their growth with our
          audio summaries.
        </p>
        <Link
          href="/categories"
          className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Start Learning Today
        </Link>
      </div>
    </div>
  );
}
