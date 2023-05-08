import Head from "next/head";
import Script from "next/script";
import { getAllCollections, getOurPurpose } from "../api/api";
import { Header } from "../../components/Header";
import Image from "next/image";

export default function Purpose({ ourPurpose, allCollections }) {
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
      <div className="content bg-gradient-to-r from-orange-500 to-blue-500">
        <Header {...{ allCollections, ourPurpose }} />
        <main>
          <div className="flex flex-col items-center justify-start min-h-screen py-8 px-16">
            <h1 className="text-6xl font-bold">{ourPurpose.title}</h1>
            {/* show ourPurpose.image */}
            <Image
              src={ourPurpose.image}
              alt={ourPurpose.title}
              className="w-full h-full"
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
            <pre className="mt-12 text-2xl w-full whitespace-break-spaces">
              {ourPurpose.description}
            </pre>
            <pre className="mt-12 text-2xl w-full whitespace-break-spaces">
              {ourPurpose.content}
            </pre>
          </div>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const ourPurpose = getOurPurpose();
  const allCollections = getAllCollections([
    "title",
    "title_display",
    "description",
    "items",
    "order",
  ]);

  return {
    props: { ourPurpose, allCollections },
  };
};
