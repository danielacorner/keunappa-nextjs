import { useSpring, animated } from "react-spring";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const AnimatedImage = ({
  src,
  alt,
  springProps,
  style,
  sizes,
  width,
  height,
  fill,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  springProps?: any;
  style?: any;
  sizes?: string;
  width?: any;
  height?: any;
  fill?: any;
  className?: string;
  imgClassName?: string;
}) => {
  const props = useSpring(springProps);

  return (
    <animated.div
      className={className + " " + styles.animated_image}
      style={{ position: "relative", overflow: "hidden", ...style, ...props }}
    >
      <Image
        className={imgClassName}
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill ?? "responsive"}
        sizes={sizes ?? "(max-width: 768px) 100vw, 768px"}
        // width={"100"}
        style={{ objectFit: "cover" }}
        quality={100}
      />
    </animated.div>
  );
};

export default AnimatedImage;
