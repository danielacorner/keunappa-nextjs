import { useSpring, animated } from "react-spring";
import Image from "next/image";
import styled from "styled-components";


const AnimatedImage = ({ src, alt, springProps, style, sizes, width, height, fill, ...rest }) => {
  const props = useSpring(springProps);

  return (
    <StyledAnimatedImage className="animated-image" style={{ ...style, ...props }} >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill ?? "responsive"}
        sizes={sizes ?? "(max-width: 768px) 100vw, 768px"}
        // width={"100"}
        style={{ "objectFit": "cover" }}
        quality={100}
      />
    </StyledAnimatedImage>
  );
};

export default AnimatedImage;


const StyledAnimatedImage = styled(animated.div)`
  position: relative;
  overflow: hidden;
`;