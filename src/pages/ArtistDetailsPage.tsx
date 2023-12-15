import { useParams } from "react-router-dom";
import ArtistDetails from "../components/ArtistDetails";
import { useArtistContext } from "../context/ArtistContext";
import { ArtistProps } from "../interface/Artists";

const ArtistDetailsPage = () => {
  const { artists } = useArtistContext();
  const { id, index } = useParams();
  const artistDetails: ArtistProps[] | undefined = artists?.filter(
    (item: ArtistProps) => item.id === id
  );

  return (
    <>
      {artistDetails && index && (
        <ArtistDetails props={artistDetails[0]} index={parseInt(index)} />
      )}
    </>
  );
};

export default ArtistDetailsPage;
