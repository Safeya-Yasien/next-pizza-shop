import { Suspense } from "react";

import SearchContent from "@/components/SearchContent";

const SearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-6 lg:px-20 pt-28 pb-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Find Your Perfect Pizza
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Search through our menu and filter by type to discover your next
          favorite.
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
};

export default SearchPage;
