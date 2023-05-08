import Head from "next/head";
import Script from "next/script";
import HomePageContent from "../components/HomePageContent";
import { getAllCollections, getHomepagePosts, getOurPurpose } from "./api/api";

export default function Home({ allPosts, allCollections, ourPurpose }) {
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <title>Rash PL.</title>
        <meta
          name="description"
          content="Fashion that's both stylish and functional"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageContent {...{ allPosts, allCollections, ourPurpose }} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getHomepagePosts([
    "title",
    "price",
    "stars",
    "reviews",
    "image_url",
    "url",
  ]);
  const allCollections = getAllCollections([
    "title",
    "title_display",
    "slug",
    "order",
  ]);
  const ourPurpose = getOurPurpose();
  return {
    props: { allPosts, allCollections, ourPurpose },
  };
};
