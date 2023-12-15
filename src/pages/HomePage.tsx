import { useArtistContext } from "../context/ArtistContext";
import ArtistDetails from "../components/ArtistDetails";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const { selectedArtist } = useArtistContext();

  return (
    <>
      <Sidebar />
      {selectedArtist && <ArtistDetails props={selectedArtist} />}
    </>
  );
};

export default HomePage;
