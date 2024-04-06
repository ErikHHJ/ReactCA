import { FaRegStar, FaRegStarHalf } from "react-icons/fa";
export function RenderRating(rating) {
  const stars = [];
  if (rating === 0) {
    return;
  }
  const wholeStars = Math.floor(rating);
  for (let i = 0; i < wholeStars; i++) {
    stars.push(<FaRegStar key={i} />);
  }
  if (rating % 1 >= 0.5) {
    stars.push(<FaRegStarHalf key={stars.length} />);
  }
  return (
    <>
      <p>{stars}</p>
    </>
  );
}
