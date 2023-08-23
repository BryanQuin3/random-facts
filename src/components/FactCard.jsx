/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";
export const FactCard = ({ fact, imageUrl }) => {
  return (
    <article className="card-post">
      {fact && <p className="fact">{fact}</p>}
      <figure className="image-container">
        {imageUrl ? (
          <img
            className="cat-image"
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            animation="wave"
            variant="rounded"
            width={200}
            height={160}
          />
        )}
      </figure>
    </article>
  );
};
