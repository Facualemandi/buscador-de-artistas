import React from "react";
import TotalArtist from "../Components/TotalArtist";
import MessageError from "../Components/MessageError";

const DetailsArtist = ({ bio, search }) => {
  if (!bio) return;
  return (
    <>
      {bio.artists ? (
        <TotalArtist
          artist={search.artist}
          img={bio.artists[0].strArtistThumb}
          country={bio.artists[0].strCountry}
          birth={bio.artists[0].intBornYear}
          genre={bio.artists[0].strGenre}
          web={bio.artists[0].strWebsite}
          biography={bio.artists[0].strBiographyEN}
        />
      ) : (
        <MessageError />
      )}
    </>
  );
};

export default DetailsArtist;
