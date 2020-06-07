import * as React from "react";
import { useState } from "react";
// import { useStyletron } from "styletron-react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    // zIndex: 0,
    // zIndex: -1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      // zIndex: -1,
      // zIndex: -2,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Slideshow: React.FC<{ images: string[] }> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // const [css] = useStyletron();

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="slide"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="slider_next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="slider_prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
      <style jsx>
        {`
          .slider {
            width: auto;
            height: max-content;
            max-height: 375px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .slider_next,
          .slider_prev {
            top: calc(50% - 15px);
            position: absolute;
            background: white;
            border: 1px solid #0004;
            border-radius: 30px;
            min-width: 30px;
            min-height: 30px;
            max-width: 40px;
            max-heigth: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
            cursor: pointer;
            font-weight: bold;
            font-size: 18px;
            // z-index: 1;
          }

          .slider_next {
            right: 10px;
          }

          .slider_prev {
            left: 10px;
            transform: scale(-1);
          }
        `}
      </style>
    </div>
  );
};
