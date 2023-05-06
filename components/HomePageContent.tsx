import AnimatedImage from "./AnimatedHeroImage";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const offset = 200;
const delay = 300;

export default function HomePageContent() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      {/* <HomeContent /> */}

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

      {/* <HomeContent /> */}

      <div className={styles.center}>
        <div className={styles.grid}>
          <a
            href="https://smartstore.naver.com/rashpl/products/4527509164"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedImage
              alt="래시플_남성용_루즈핏박시_래쉬가드_상하의_세트"
              src={"/images/래시플_남성용_루즈핏박시_래쉬가드_상하의_세트.jpg"}
              springProps={{
                from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 1 * delay + offset,
              }}
            />
          </a>
          <a
            href="https://smartstore.naver.com/rashpl/products/2014578024"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedImage
              alt="래시플 프리미엄 극세사 전동휠체어용 무릎담요 입는담요"
              src={
                "/images/래시플 프리미엄 극세사 전동휠체어용 무릎담요 입는담요.jpg"
              }
              springProps={{
                from: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 3 * delay + offset,
              }}
            />
          </a>
          <a
            href="https://smartstore.naver.com/rashpl/products/2014578024"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedImage
              alt="래시플 여성엄마 가오리 루즈핏 래쉬가드 빅사이즈수영복 stripe"
              src={
                "/images/래시플 여성엄마 가오리 루즈핏 래쉬가드 빅사이즈수영복 stripe.jpg"
              }
              springProps={{
                from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 4 * delay + offset,
              }}
            />
          </a>
          <a
            href="https://smartstore.naver.com/rashpl/products/2000370456"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedImage
              alt="래시플 쇼파쿠션커버 고급린넨스타일 9종 북유럽모던"
              src={
                "/images/래시플 쇼파쿠션커버 고급린넨스타일 9종 북유럽모던.jpg"
              }
              springProps={{
                from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 2 * delay + offset,
              }}
            />
          </a>
        </div>
        <div className={styles.links}>
          <a
            href="https://smartstore.naver.com/rashpl/products/2000370456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="Naver_Logotype.svg"
              alt="Naver Logo"
              className={styles.naverLogo}
              width={100}
              height={24}
              priority
            />
          </a>
          <a
            href="https://www.coupang.com/np/products/brand-shop?brandName=래시플"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo_coupang_w350.png"
              alt="Coupang Logo"
              className={styles.naverLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
