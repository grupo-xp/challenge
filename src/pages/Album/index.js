import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as BackIcon } from "assets/back.svg";

import API from "service";
import SearchContext from "contexts/searchContext";

import Link from "components/Link";
import Album from "components/Album";
import Playlist from "components/Playlist";

import theme from "theme";

const Text = styled.span`
  color: white;
  font-size: 18px;
  margin-left: 6px;
`;

const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const AlbumContainer = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  margin: 32px auto;

  > a {
    margin: 0 64px 32px 0;
  }

  @media (min-width: ${theme.media.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export default () => {
  const { searchContextValues, savePlaylistOnSearchContext } = useContext(
    SearchContext
  );
  const [albumValue, setAlbumValue] = useState({});

  useEffect(() => {
    getPlaylist(searchContextValues.selectedAlbumId);
  }, [searchContextValues.selectedAlbumId]);

  const getPlaylist = async (albumId) => {
    const data = await API.get(`https://api.spotify.com/v1/albums/${albumId}`);

    if (!data) return;

    setAlbumValue({
      id: data.id,
      title: data.name,
      subtitle: data.label,
      image: data.images[0].url,
      artist: data.artists[0].name,
      tracks: data.tracks.items,
    });
    savePlaylistOnSearchContext(albumId, data);
  };

  return (
    <div>
      <BackContainer to="/">
        <BackIcon
          style={{ cursor: "pointer" }}
          fill="white"
          width="12"
          height="12"
        />
        <Text>Voltar</Text>
      </BackContainer>

      <AlbumContainer>
        <Album
          size="md"
          hover={+true}
          id={albumValue.id}
          title={albumValue.title}
          subtitle={albumValue.artist}
          image={albumValue.image}
        />
        <Playlist data={albumValue.tracks} />
      </AlbumContainer>
    </div>
  );
};
