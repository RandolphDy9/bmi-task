import { ReactNode, createContext, useContext, useState } from "react";
import { ArtistProps } from "../interface/Artists";
import { Artists } from "../data/Artists";

type ArtistContextType = {
  artists: ArtistProps[] | null;
  selectedArtist: ArtistProps | null;
  selectedSongIndex: number;
  handleArtistClick: (artist: ArtistProps) => void;
  handleArtists: (artist: ArtistProps[]) => void;
  handleSelectedSongIndex: (song: number) => void;
};

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [selectedArtist, setSelectedArtist] = useState<ArtistProps | null>(
    null
  );
  const [artists, setArtists] = useState<ArtistProps[]>(Artists);
  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(0);

  const handleArtistClick = (artist: ArtistProps) => {
    setSelectedArtist(artist);
  };

  const handleArtists = (artists: ArtistProps[]) => {
    setArtists(artists);
  };

  const handleSelectedSongIndex = (song: number) => {
    setSelectedSongIndex(song);
  };

  return (
    <ArtistContext.Provider
      value={{
        artists,
        selectedArtist,
        selectedSongIndex,
        handleArtistClick,
        handleArtists,
        handleSelectedSongIndex,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

const useArtistContext = () => {
  const context = useContext(ArtistContext);

  if (!context) {
    throw new Error("useArtistContext must be used within an ArtistProvider");
  }

  return context;
};

export { ArtistProvider, useArtistContext };
