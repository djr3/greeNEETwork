import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#3e4b4f",
    },
  };
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="118.499925pt"
      height="136.446523pt"
      viewBox="0 0 118.499925 136.446523"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(-10.669399,137.168003) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          d="M709 1368 c-151 -14 -297 -84 -409 -198 -78 -80 -131 -167 -167 -275
    -23 -69 -26 -97 -26 -205 0 -108 3 -136 26 -205 36 -108 89 -195 167 -275 253
    -257 658 -272 938 -33 l52 45 0 269 0 269 -255 0 -255 0 0 -100 0 -100 125 0
    126 0 -3 -117 -3 -118 -55 -27 c-73 -36 -160 -49 -247 -37 -140 20 -247 98
    -310 227 -38 76 -38 76 -38 201 0 121 1 129 32 193 82 174 247 262 444 237 94
    -12 151 -36 246 -105 22 -16 25 -14 80 34 32 28 71 64 86 80 l29 30 -60 50
    c-152 126 -322 178 -523 160z"
        />
      </g>
    </svg>
  );
}
