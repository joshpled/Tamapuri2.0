import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const Sprite = () => {
  return (
    <div>
      <center>
        <SpriteAnimator
          sprite="/images/spriteIdle.png"
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
