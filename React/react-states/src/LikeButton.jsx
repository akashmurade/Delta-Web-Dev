import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <h1 onClick={toggleLike}>
        {isLiked ? (
          <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </h1>
    </div>
  );
}
