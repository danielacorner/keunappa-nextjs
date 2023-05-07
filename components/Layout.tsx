import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main
      style={{ minHeight: "100vh" }}
      className={`${styles.main} ${inter.className}`}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
}
