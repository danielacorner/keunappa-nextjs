import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Header } from "./Header";
import { Footer } from "./Footer";
import BlurImage from "./BlurImage";

const inter = Inter({ subsets: ["latin"] });

export default function HomePageContent({
  allPosts,
  allCollections,
  ourPurpose,
}) {
  const images_row_1 = allPosts.slice(0, 8);
  const images_row_2 = allPosts.slice(8, 16);
  return (
    <main
      style={{ minHeight: "100vh" }}
      className={`${styles.main} ${inter.className}`}
    >
      <div className="flex-grow h-fit bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col">
        <Header
          {...{
            allCollections,
            ourPurpose,
            bannerSpringProps: {
              from: { opacity: 0, transform: "translate3d(-10%, 0, 0)" },
              to: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
              config: {
                mass: 1,
                tension: 280,
                friction: 50,
              },
            },
          }}
        />

        <div className="flex-grow flex flex-col justify-center items-center h-full overflow-hidden">
          <div className="flex-grow flex flex-col justify-center text-center text-white">
            <h1 className="text-6xl font-bold">RASH PL.</h1>
            <h2 className="text-xl mt-4 mx-8">
              스타일리시함과 실용성을 동시에 갖춘 패션.
            </h2>
          </div>
          <LoopingImages images={images_row_1} className="items-end" />
          <LoopingImages images={images_row_2} reverse={true} />
        </div>

        <Footer />
      </div>
    </main>
  );
}

function LoopingImages({ images, reverse = false, className = "" }) {
  return (
    <div
      className={`flex self-start w-fit h-96 animate-scrolling-grid${
        reverse ? "-reverse" : ""
      } ${className}`}
    >
      <div className={`scrolling-grid w-fit`}>
        {images
          .filter((d) => d.url)
          .map(({ title, price, stars, reviews, image_url, url }, index) => (
            <ImageInRow
              key={index}
              index={index}
              url={url}
              image_url={image_url}
              title={title}
            />
          ))}
        {images
          .filter((d) => d.url)
          .map(({ title, price, stars, reviews, image_url, url }, index) => (
            <ImageInRow
              key={index}
              index={index}
              url={url}
              image_url={image_url}
              title={title}
            />
          ))}
      </div>
    </div>
  );
}

function ImageInRow({ index, url, image_url, title }) {
  return (
    <div
      key={`first-set-${index}`}
      className={`relative inline-block m-2 box-border h-80 w-36 ${styles.hover_highlight}`}
    >
      <Link href={url}>
        <BlurImage
          src={image_url}
          alt={title}
          // width={128}
          // height={128}
          imgClassName="rounded-lg overflow-hidden"
        />
      </Link>
    </div>
  );
}
