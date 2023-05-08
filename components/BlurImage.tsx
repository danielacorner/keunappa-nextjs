import Image from "next/image";
import { useState } from "react";

export default function BlurImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={`aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ${className}`}
    >
      <Image
        alt={alt}
        src={src}
        fill={true}
        style={{
          objectFit: "cover",
        }}
        className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "opacity-25 scale-110 blur-lg grayscale"
                  : "opacity-100 scale-100 blur-0 grayscale-0"
              }) ${imgClassName}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
