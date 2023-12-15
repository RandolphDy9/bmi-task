import { useArtistContext } from "../context/ArtistContext";
import ArtistDetails from "../components/ArtistDetails";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const { selectedArtist } = useArtistContext();

  return (
    <>
      <Sidebar />
      {(selectedArtist && selectedArtist?.id !== '') ? <ArtistDetails props={selectedArtist} /> : (
        <div className="m-6 grid col-span-9 border rounded-xl bg-white">
          <div className="flex justify-center items-center">
            Select an artist from the sidebar.
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
