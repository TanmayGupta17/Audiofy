import { notFound } from "next/navigation";
import AudioPlayer from "@/Components/AudioPlayer";
import { featuredBooks } from "@/data/mockData";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = featuredBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    return {
      title: "Book Not Found - BookAudio",
    };
  }

  return {
    title: `${book.title} - BookAudio`,
    description: book.summary,
  };
}

export default async function BookSummary({ params }) {
  const { id } = await params;
  const book = featuredBooks.find((b) => b.id === parseInt(id));

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/categories"
              className="hover:text-indigo-600 transition-colors"
            >
              Categories
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{book.title}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Book Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-40 h-56 rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                  {book.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                by <span className="font-semibold">{book.author}</span>
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {book.duration} listening time
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Professional narration
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Player */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Listen to Summary
          </h2>
          <AudioPlayer audioUrl={book.audioUrl} title={book.title} />
        </div>

        {/* Written Summary */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Book Summary
          </h2>
          <div className="prose max-w-none">
            <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {book.summary}
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">{book.fullContent}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Key Takeaways
              </h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Understanding the fundamental principles and core concepts
                    outlined in the book
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Practical strategies and actionable insights for immediate
                    implementation
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Long-term benefits and transformative mindset shifts for
                    sustained growth
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real-world applications, case studies, and success stories
                    from the field
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white mt-8">
                <h3 className="text-lg font-semibold mb-2">💡 Pro Tip</h3>
                <p>
                  Take notes while listening and revisit key concepts regularly
                  to maximize retention and application of these valuable
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books */}
        <div className="bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            More from {book.category}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {featuredBooks
              .filter((b) => b.category === book.category && b.id !== book.id)
              .slice(0, 2)
              .map((relatedBook) => (
                <Link
                  key={relatedBook.id}
                  href={`/book/${relatedBook.id}`}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <img
                    src={relatedBook.coverImage}
                    alt={relatedBook.title}
                    className="w-12 h-16 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">
                      {relatedBook.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      by {relatedBook.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {relatedBook.duration}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
