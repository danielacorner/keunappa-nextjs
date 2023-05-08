import Head from "next/head";
import Script from "next/script";
import HomePageContent from "../components/HomePageContent";
import { getAllCollections, getHomepagePosts, getOurPurpose } from "./api/api";

export default function Home({ allPosts, allCollections, ourPurpose }) {
  // TODO internationalization
  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <title>다용도 패션 | 친환경 & 지속가능한 의류</title>
        <meta
          name="description"
          content="다용도 패션의 미래를 발견하세요. 친환경 및 지속 가능한 의류를 선별한 컬렉션을 만나보세요. 지금 바로 실용적이고 스타일리시한 옷장을 완성하세요."
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
