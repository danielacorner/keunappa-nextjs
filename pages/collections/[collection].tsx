import { Footer } from "../../components/Footer";
import {
  getAllCollections,
  getCollectionBySlug,
  getItemBySlug,
} from "../api/api";
import { Header } from "../../components/Header";
import Image from "next/image";

export async function getStaticPaths() {
  const allCollections = getAllCollections(["title", "slug"]);
  return {
    paths: allCollections.map(
      (collection) => `/collections/${collection.title}`
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allCollections = getAllCollections([
    "title",
    "title_display",
    "description",
    "items",
    "order",
  ]);

  const thisCollection = await getCollectionBySlug(params.collection, [
    "title",
    "title_display",
    "description",
    "items",
    "order",
  ]);
  const itemsInThisCollection = (
    thisCollection.items as unknown as string[]
  ).map((itemTitle) =>
    getItemBySlug(itemTitle, [
      "title",
      "primary_store_url",
      "preview_image_url",
      "description",
    ])
  );
  return {
    props: {
      thisCollection: {
        ...thisCollection,
        items: itemsInThisCollection,
      },
      allCollections,
    },
  };
}

export default function Collection({ thisCollection, allCollections }) {
  console.log(
    "⭐🎈  file: [collection].tsx:32  Collection  allCollections:",
    allCollections
  );
  console.log(
    "⭐🎈  file: [collection].tsx:32  Collection  thisCollection:",
    thisCollection
  );
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
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
        {thisCollection.items.map(
          ({ description, preview_image_url, primary_store_url, title }) => (
            <div key={title} className="item">
              <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
                <a
                  className="hover_underline"
                  href={primary_store_url}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                {title}
                <Image
                  fill={true}
                  style={{ objectFit: "contain" }}
                  src={preview_image_url}
                  alt={`${title}: ${description}`}
                />
              </div>
            </div>
          )
        )}
        <Footer />
      </div>
    </div>
  );
}
