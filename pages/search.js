import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <SearchHeader />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  //API_KEY - https://developers.google.com/custom-search/v1/using_rest
  //CONTEXT_KEY - https://cse.google.com/cse/create/new
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
