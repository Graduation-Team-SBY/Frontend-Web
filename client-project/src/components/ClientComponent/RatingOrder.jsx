export default function RatingReview({ rating, setRating }) {
  return (
    <>
      <p className="font-semibold">Rating: </p>
      <div>
        {[1, 2, 3, 4, 5].map((star, i) => {
          return (
            <span
              className="start"
              style={{
                cursor: "pointer",
                color: rating >= star ? "gold" : "gray",
                fontSize: `35px`,
              }}
              onClick={() => {
                setRating(star);
              }}
              key={i}
            >
              {" "}
              ★{" "}
            </span>
          );
        })}
      </div>
    </>
  );
}
