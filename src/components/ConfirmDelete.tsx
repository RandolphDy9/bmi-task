import { FaTimes } from "react-icons/fa";
import { useArtistContext } from "../context/ArtistContext";
import { ArtistProps } from "../interface/Artists";
import toastr from 'toastr';

const ConfirmDelete = ({ onClose }: { onClose: () => void }) => {
  const { artists, selectedArtist, handleArtists, handleArtistClick } = useArtistContext();

  const handleDelete = () => {
    const newArtists = artists?.filter(
      (artist: ArtistProps) => artist.id !== selectedArtist?.id
    );
    if (newArtists) {
      handleArtists(newArtists);
    }
    toastr.success(`${selectedArtist?.name} has been deleted.`, "Success");
    handleArtistClick({ id: '', name: '', nationality: '', age: '', songs: [] });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="bg-white p-8 rounded-xl shadow-md z-10 w-[25rem]">
        <div className="flex justify-between items-center mb-4 gap-4">
          <h2 className="text-lg font-bold">Delete Artist</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div>
          <div>
            Are you sure you want to delete <b>{selectedArtist?.name}</b>?
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-3">
          <div
            className="px-4 py-2 border rounded-xl hover:bg-gray-100 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </div>
          <div
            className="px-4 py-2 border rounded-xl hover:bg-red-400 hover:text-white cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
