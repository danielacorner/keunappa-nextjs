import Link from "next/link";

export function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <Link href="/" className="hover_zoom">
        <div className="text-white text-2xl font-bold">RASH PL.</div>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li className="click_padding hover_underline">
            <Link href="/sportswear">
              <span className="text-white">스포츠의류</span>
            </Link>
          </li>
          <li className="click_padding hover_underline">
            <Link href="/beachwear_rashguard">
              <span className="text-white">비치웨어/래쉬가드</span>
            </Link>
          </li>
          <li className="click_padding hover_underline">
            <Link href="/swimwear_rashguard">
              <span className="text-white">수영복/래쉬가드</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
