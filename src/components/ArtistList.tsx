import { useArtistContext } from "../context/ArtistContext";
import { ArtistProps } from "../interface/Artists";
import ArtistCard from "./ArtistCard";

const ArtistList = () => {
  const { artists } = useArtistContext();

  return (
    <div className="flex flex-col gap-4">
      {artists?.map((artist: ArtistProps) => {
        return <ArtistCard key={artist.id} props={artist} />;
      })}
    </div>
  );
};

export default ArtistList;
