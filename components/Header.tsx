import Link from "next/link";

export function Header({ allCollections }) {
  console.log(
    "⭐🎈  file: Header.tsx:4  Header  allCollections:",
    allCollections
  );
  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="hover_zoom">
        <div className="text-white text-2xl font-bold">RASH PL.</div>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          {allCollections.map(({ title, slug }) => (
            <li key={slug} className="click_padding hover_underline">
              <Link href={`/collections/${slug}`}>
                <span className="text-white">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
