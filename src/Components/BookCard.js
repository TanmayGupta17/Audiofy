import Link from "next/link";

export default function BookCard({ book, showListenButton = true }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-20 h-28 rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-3">
                  {book.category}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
              {book.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {book.duration}
                </span>
              </div>
              {showListenButton && (
                <Link
                  href={`/book/${book.id}`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
                >
                  Listen Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
