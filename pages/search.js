import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <SearchHeader />
      <SearchResults />
    </div>
  );
};

export default Search;
