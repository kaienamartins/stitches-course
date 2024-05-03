import Image from "next/image";
import { styled } from "../../stitches.config";
import { ResponsiveContainer } from "../components/responsive-container";
import { YellowCircle } from "./../assets/yellowcircle";
import { Box } from "./box";

const HeroImage = styled({
  ".image-device": {
    display: "flex",
    justifyContent: "center",
    "@sm": {
      display: "none",
    },

    img: {
      width: "100%",
      height: "100%",
    },
  },
  ".image-device_circles": {
    position: "absolute",
    left: "-15%",
    translate: "0 20%",
    "@sm": {
      display: "none",
    },
    svg: {
      "@md": {
        width: "160px",
        height: "auto",
      },
    },
  },
});

export default function HeroImageBox() {
  return (
    <ResponsiveContainer>
      <HeroImage>
        <section>
          <Box direction="column" align="center">
            <div className="image-device">
              <Image
                src="https://tailscale.com/static/images/marketing/home-illustration-2080w.webp"
                alt="Tailscale on a few different devices."
                width={2080}
                height={940}
              />
            </div>
            <div className="image-device_circles">
              <YellowCircle />
            </div>
          </Box>
        </section>
      </HeroImage>
    </ResponsiveContainer>
  );
}
