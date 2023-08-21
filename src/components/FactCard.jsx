/* eslint-disable react/prop-types */
export const FactCard = ({ fact, imageUrl }) => {
  return (
    <article className="card-post">
      {fact && <p className="fact">{fact}</p>}
      <figure className="image-container">
        {imageUrl && (
          <img
            className="cat-image"
            src={imageUrl}
            alt={`Image extracted using the first three words for ${fact}`}
          />
        )}
      </figure>
    </article>
  );
};
