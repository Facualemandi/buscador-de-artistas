import React from "react";
import "../Styles/TotalArtist.css";

const TotalArtist = ({
  artist,
  img,
  country,
  birth,
  genre,
  web,
  biography,
}) => {
  return (
    <>
      <section className="artistAll">
        <div className="nameAndinfo">
          <h1>Información del Artista </h1>
          <h2>{artist}</h2>
          <img className="img" alt={artist} src={img} />
        </div>

        <p>
          Año de nacimiento: <span className="year"> {birth} </span>
        </p>
        <p>
          Lugar de Nacimiento: <span className="coutry">{country} </span>
        </p>
        <p>
          Genero Musical: <span className="genre">{genre}</span>
        </p>

        <span className="span_web">
          <p className="webonline">Web Online:</p>{" "}
          <a href={`https/${web}`}>{web}</a>
        </span>

        <div className="biografy">
          <p className="pagrapha_b">BIOGRAFIA: </p>
          <span className="biografy_total">{biography}</span>
        </div>
      </section>
    </>
  );
};

export default TotalArtist;
