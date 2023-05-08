import { Footer } from "../../components/Footer";
import { getAllCollections, getCollectionBySlug } from "../api/api";
import { Header } from "../../components/Header";

export async function getStaticPaths() {
  const allCollections = getAllCollections(["title", "slug"]);
  console.log(
    "⭐🎈  file: [collection].tsx:8  getStaticProps  allCollections:",
    allCollections
  );
  return {
    paths: allCollections.map(
      (collection) => `/collections/${collection.title}`
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allCollections = getAllCollections(["title", "slug"]);
  console.log(
    "⭐🎈  file: [collection].tsx:8  getStaticProps  allCollections:",
    allCollections
  );
  const thisCollection = await getCollectionBySlug(params.collection, [
    "title",
    "slug",
    "items",
  ]);
  return {
    props: {
      thisCollection,
      allCollections,
    },
  };
}

export default function Collection({ thisCollection, allCollections }) {
  console.log(
    "⭐🎈  file: [collection].tsx:15  Collection  thisCollection:",
    thisCollection
  );
  return (
    <>
      <Header {...{ allCollections }} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
          <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">RASH PL.</h1>

            <p className="mt-3 text-2xl">래쉬가드/수영복/비치웨어/스포츠의류</p>
            <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
              <div className="flex flex-wrap justify-center"></div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
