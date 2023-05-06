import AnimatedImage from "./AnimatedHeroImage";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const offset = 200;
const delay = 300;
const IMAGES = [
  "/images/래시플_남성용_루즈핏박시_래쉬가드_상하의_세트.jpg",
  "/images/래시플 프리미엄 극세사 전동휠체어용 무릎담요 입는담요.jpg",
  "/images/래시플 여성엄마 가오리 루즈핏 래쉬가드 빅사이즈수영복 stripe.jpg",
];

export default function HomePageContent() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      {/* <HomeContent /> */}
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

        <main className="flex flex-col justify-center items-center h-full">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">RASH PL.</h1>
            <p className="text-xl mt-4">
              Discover the latest trends in fashion
            </p>
          </div>
          <div className="overflow-hidden mt-8 w-full">
            <div className="scrolling-grid w-full animate-scrolling-grid">
              {IMAGES.map((image, index) => (
                <div
                  key={`first-set-${index}`}
                  className="relative h-96 w-1/3 inline-block rounded-lg overflow-hidden"
                >
                  <AnimatedImage
                    src={image}
                    alt={image}
                    className="p-8 box-border h-full"
                  />
                </div>
              ))}
              {IMAGES.map((image, index) => (
                <div
                  key={`second-set-${index}`}
                  className="relative h-96 w-1/3 inline-block rounded-lg overflow-hidden"
                >
                  <AnimatedImage
                    src={image}
                    alt={image}
                    className="p-8 box-border h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="p-6 flex justify-center items-center">
          <p className="text-white">© 2023 RASH PL. All Rights Reserved.</p>
        </footer>
      </div>
      <AnimatedImage
        alt="RASH PL brand banner"
        style={{
          height: "16vh",
          width: "100vw",
        }}
        className={styles.banner}
        src={"/images/rash_pl_brand_banner.jpg"}
        springProps={{
          from: { transform: "translate3d(-100%, 0, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
          config: {
            mass: 1,
            tension: 280,
            friction: 60,
          },
        }}
      />
    </main>
  );
}
