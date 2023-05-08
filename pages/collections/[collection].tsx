import { Footer } from "../../components/Footer";
import {
  getAllCollections,
  getCollectionBySlug,
  getItemBySlug,
  getOurPurpose,
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
  const ourPurpose = await getOurPurpose();
  console.log(
    "⭐🎈  file: [collection].tsx:48  getStaticProps  ourPurpose:",
    ourPurpose
  );

  return {
    props: {
      thisCollection: {
        ...thisCollection,
        items: itemsInThisCollection,
      },
      allCollections,
      ourPurpose,
    },
  };
}

export default function Collection({
  thisCollection,
  allCollections,
  ourPurpose,
}) {
  console.log("⭐🎈  file: [collection].tsx:66  ourPurpose:", ourPurpose);
  return (
    <div className="box-border bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Header {...{ allCollections, ourPurpose }} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
        <main className="flex flex-col items-center w-full px-20 text-center">
          <div className="flex flex-col items-center w-full px-20 text-center py-8">
            <h1 className="text-6xl font-bold">{thisCollection.title}</h1>

            <p className="mt-3 text-2xl">{clean(thisCollection.description)}</p>
          </div>
        </main>
        <div className="items flex-1">
          {thisCollection.items.map(
            ({ description, preview_image_url, primary_store_url, title }) => (
              <div key={title} className="item py-8 w-full">
                <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
                  <a
                    href={primary_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="title">{title}</h1>
                    <div className="p-4">
                      <Image
                        width={640}
                        height={640}
                        // fill={true}
                        style={{ objectFit: "contain" }}
                        src={preview_image_url}
                        alt={`${title}: ${description}`}
                      />
                    </div>
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}
function clean(string) {
  // replace all '\' with ''
  return string.replace(/\\/g, "");
}
