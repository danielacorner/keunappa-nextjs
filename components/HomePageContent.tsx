import AnimatedImage from "./AnimatedHeroImage";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function HomePageContent({ allPosts }) {
  const images_row_1 = allPosts.slice(0, 8);
  const images_row_2 = allPosts.slice(8, 16);
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <AnimatedImage
        alt="RASH PL brand banner"
        style={{
          height: "16vh",
          width: "100vw",
        }}
        className={styles.banner}
        src={"/images/rash_pl_brand_banner.jpg"}
        springProps={{
          from: { opacity: 0, transform: "translate3d(0, 20%, 0)" },
          to: { opacity: 1, transform: "translate3d(0, 0%, 0)" },
          config: {
            mass: 1,
            tension: 280,
            friction: 60,
          },
        }}
      />
      <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <header className="p-6 flex justify-between items-center">
          <div className="text-white text-2xl font-bold">RASH PL.</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/스포츠의류">
                  <span className="text-white">스포츠의류</span>
                </Link>
              </li>
              <li>
                <Link href="/비치웨어/래쉬가드">
                  <span className="text-white">비치웨어/래쉬가드</span>
                </Link>
              </li>
              <li>
                <Link href="/수영복/래쉬가드">
                  <span className="text-white">수영복/래쉬가드</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex flex-col justify-center items-center h-full overflow-hidden">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">RASH PL.</h1>
            <p className="text-xl mt-4">
              Fashion that{"'"}s both stylish and practical.
            </p>
          </div>
          <LoopingImages images={images_row_1} />
          <LoopingImages images={images_row_2} reverse={true} />
        </div>

        <footer className="p-6 flex justify-center items-center">
          <p className="text-white">© 2023 RASH PL. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}

function LoopingImages({ images, reverse = false }) {
  return (
    <div
      className={`mt-8 w-full h-96 animate-scrolling-grid${
        reverse ? "-reverse" : ""
      }`}
    >
      <div className={`scrolling-grid w-full`}>
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
      className="relative inline-block m-2 box-border h-96 w-36"
    >
      <Link href={url}>
        <Image
          src={image_url}
          alt={title}
          // width={128}
          // height={128}
          fill={true}
          sizes={"(max-width: 768px) 100vw, 768px"} // width={"100"}
          style={{
            objectFit: "cover",
          }}
          quality={100}
          className="rounded-lg overflow-hidden pt-full"
        />
      </Link>
    </div>
  );
}
