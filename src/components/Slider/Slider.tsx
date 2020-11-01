// AwSlider React components
import AwSlider, { AwesomeSliderProps } from "react-awesome-slider";
// import { Image } from "@geist-ui/react";
import Image from "next/image";

// AwSlider styles
import AwSliderStyles from "./Slider.module.scss";

interface SliderProps extends AwesomeSliderProps {
  id?: string;
  images: string[];
}

export const Slider = ({ id, images, ...rest }: SliderProps) => {
  const pictures = images.map((image) => {
    if (!image) return;
    if (image.includes("http") || image.startsWith("/")) return image;
    return `https://api.agritettura.org/greeneetwork/assets/${image}?key=slider`;
  });
  return (
    <AwSlider key={id} cssModule={AwSliderStyles} bullets={false} {...rest}>
      {pictures.map((pic, idx) => (
        <div
          key={"img_" + idx}
          // data-src={pic}
        >
          <Image src={pic} width={820} height={506} />
        </div>
      ))}
    </AwSlider>
  );
};
