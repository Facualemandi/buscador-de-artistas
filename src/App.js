import React, { useState, useEffect } from "react";
import DetailsArtist from "./Components/DetailsArtist";
import Loaders from "./Components/Loaders";
import SearchArtist from "./Components/SearchArtist";
import { helpHttp } from "./Helper/helperHttp";

function App() {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const hSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;

    const isFetch = async () => {
      let artisUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`;

      setLoading(true);

      const [okArtist] = await Promise.all([helpHttp().get(artisUrl)]);

      setBio(okArtist);

      setLoading(false);
    };

    isFetch();
  }, [search]);

  return (
    <>
      <h1 className="buscar"> Busca tu Cantante Favorito! </h1>

      <SearchArtist hSearch={hSearch} />
      {loading && <Loaders />}

      {search && !loading && <DetailsArtist bio={bio} search={search} />}
    </>
  );
}

export default App;

// let artisUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
