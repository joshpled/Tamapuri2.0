import React from "react";
import { SpriteAnimator } from "react-sprite-animator";
import spriteIdle from "../images/spriteIdle.png";

const Sprite = () => {
  return (
    <div>
      <center>
        <SpriteAnimator
          sprite={spriteIdle}
          width={530}
          height={420}
          fps={12}
          direction={"horizontal"}
          scale={1.2}
        />
      </center>
    </div>
  );
};

export default Sprite;
