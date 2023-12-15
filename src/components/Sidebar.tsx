import { FaPlus, FaTrash } from "react-icons/fa";
import ArtistList from "./ArtistList";
import { useState } from "react";
import AddArtist from "./AddArtist";
import ConfirmDelete from "./ConfirmDelete";
import { useArtistContext } from "../context/ArtistContext";

const Sidebar = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const { selectedArtist } = useArtistContext();
  
  return (
    <div className="grid col-span-3 max-h-screen p-4 border rounded-r-3xl bg-white overflow-y-scroll">
      {addModal && <AddArtist onClose={() => setAddModal(false)} />}
      {deleteModal && <ConfirmDelete onClose={() => setDeleteModal(false)} />}
      <div className="flex flex-col">
        <div className="overflow-y-scroll max-h-[40rem] mx-2">
          <ArtistList />
        </div>
        <div className="flex flex-1 mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-4 text-center items-center text-sm my-6">
            <div
              className="px-4 py-3 border rounded-xl cursor-pointer flex items-center justify-center gap-2 hover:bg-green-200 border-green-600"
              onClick={() => setAddModal(true)}
            >
              <FaPlus className="text-green-600" /> Add Artist
            </div>
            { selectedArtist?.id !== '' && selectedArtist !== null && (<div
              className="px-4 py-3 border rounded-xl cursor-pointer flex items-center justify-center gap-2 hover:bg-red-50 border-red-400"
              onClick={() => setDeleteModal(true)}
            >
              <FaTrash className="text-red-600" /> Remove Artist
            </div>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
