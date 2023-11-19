import Link from "next/link";
import AnimatedImage from "./AnimatedImage";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export function Header({ allCollections, bannerSpringProps = {}, ourPurpose }) {
  const router = useRouter();
  console.log("⭐🎈  file: Header.tsx:8  Header  router:", router);
  return (
    <>
      <AnimatedImage
        alt="RASH PL brand banner"
        style={{
          height: "16vh",
          width: "100vw",
        }}
        className={styles.banner}
        src={"/images/rash_pl_brand_banner.jpg"}
        springProps={bannerSpringProps}
      />
      <header className="p-6 flex justify-between items-center">
        <Link href="/" className="hover_zoom">
          <div className="text-white text-2xl font-bold">RASH PL.</div>
        </Link>
        <nav>
          <ul className="max-w-7xl flex flex-wrap space-x-6 gap-y-4 justify-end">
            {allCollections
              .sort((a, b) => a.order - b.order)
              .map(({ title, title_display }) => {
                const active = decodeURIComponent(router.asPath).includes(
                  title
                );

                return (
                  <li
                    key={title}
                    className={`click_padding hover_underline ${
                      active ? "active" : ""
                    }`}
                  >
                    <Link href={`/collections/${title}`}>
                      <span className="text-white">
                        {title_display ?? title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            <li className="click_padding hover_underline">
              <Link href="/purpose" className="hover_zoom">
                <div className="text-white font-bold">{ourPurpose.title}</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
