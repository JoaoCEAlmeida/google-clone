import PaginationButtons from "./PaginationButtons";
const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {!results?.error ? (
        <>
          <p className="text-gray-600 text-md mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults} results (
            {results.searchInformation?.formattedSearchTime} seconds)
          </p>
          {results?.items?.map((res) => (
            <div key={res.link} className="max-w-xl mb-8">
              <div className="group">
                <a href={res.link} className="line-clamp-1 text-sm">
                  {res.formattedUrl}
                </a>
                <a href={res.link} className="text-sm">
                  <h2 className="line-clamp-1 text-xl text-blue-800 font-medium group-hover:underline">
                    {res.title}
                  </h2>
                </a>
              </div>
              <p className="line-clamp-2">{res.snippet}</p>
            </div>
          ))}
          <PaginationButtons />
        </>
      ) : (
        <p className="text-gray-600 text-md mb-5 mt-3">No Results Found</p>
      )}
    </div>
  );
};

export default SearchResults;
