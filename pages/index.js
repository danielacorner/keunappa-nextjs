import Head from "next/head";
import { Inter } from "next/font/google";
import { attributes, react as HomeContent } from "../content/home.md";
import AnimatedImage from "../src/components/AnimatedHeroImage";
import Script from 'next/script'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  let { title, cats } = attributes;
  console.log("⭐🎈  file: index.js:12  Home  title:", title)

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}

        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <AnimatedImage alt="RASH PL brand banner" style={{
          height: "16vh",
          width: "100vw"
        }} className={styles.banner} src={"/images/rash_pl_brand_banner.jpg"} springProps={{
          from: { transform: "translate3d(-100%, 0, 0)" },
          to: { transform: "translate3d(0, 0, 0)" },
          config: {
            mass: 1,
            tension: 280,
            friction: 60
          }
        }} />


        {/* <HomeContent /> */}


        <div className={styles.center}>
          <div className={styles.grid}>
            <a
              href="https://smartstore.naver.com/rashpl/products/4527509164"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedImage alt="래시플_남성용_루즈핏박시_래쉬가드_상하의_세트" src={"/images/래시플_남성용_루즈핏박시_래쉬가드_상하의_세트.jpg"} springProps={{
                from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 1 * delay + offset
              }} />
            </a>
            <a
              href="https://smartstore.naver.com/rashpl/products/2014578024"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedImage alt="래시플 프리미엄 극세사 전동휠체어용 무릎담요 입는담요" src={"/images/래시플 프리미엄 극세사 전동휠체어용 무릎담요 입는담요.jpg"} springProps={{
                from: { opacity: 0, transform: "translate3d(0, -100%, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 3 * delay + offset
              }} />
            </a>
            <a
              href="https://smartstore.naver.com/rashpl/products/2014578024"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedImage alt="래시플 여성엄마 가오리 루즈핏 래쉬가드 빅사이즈수영복 stripe" src={"/images/래시플 여성엄마 가오리 루즈핏 래쉬가드 빅사이즈수영복 stripe.jpg"} springProps={{
                from: { opacity: 0, transform: "translate3d(0, 100%, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 4 * delay + offset
              }} />

            </a>
            <a
              href="https://smartstore.naver.com/rashpl/products/2000370456"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedImage alt="래시플 쇼파쿠션커버 고급린넨스타일 9종 북유럽모던" src={"/images/래시플 쇼파쿠션커버 고급린넨스타일 9종 북유럽모던.jpg"} springProps={{
                from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
                to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
                delay: 2 * delay + offset
              }} />

            </a>
          </div>
          <div className={styles.links}>
            <a href="https://smartstore.naver.com/rashpl/products/2000370456" target="_blank" rel="noopener noreferrer">
              <Image src="Naver_Logotype.svg"
                alt="Naver Logo"
                className={styles.naverLogo}
                width={100}
                height={24}
                priority
              />
            </a>
            <a href="https://www.coupang.com/np/products/brand-shop?brandName=래시플" target="_blank" rel="noopener noreferrer">
              <Image src="/logo_coupang_w350.png"
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

    </>
  );
}
const offset = 200
const delay = 300
const StyledMain = styled.main`
  background-color: #fff;
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 60rem;
  padding: 1rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`