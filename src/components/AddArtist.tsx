import { useState } from "react";
import { FaAsterisk, FaTimes } from "react-icons/fa";
import { useArtistContext } from "../context/ArtistContext";
import { v4 as uuidv4 } from "uuid";
import toastr from "toastr";

const AddArtist = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const { artists, handleArtists } = useArtistContext();
  const uniqueId = uuidv4();

  const handleAdd = () => {

    if (name === '' || nationality === '' || age == '') {
      toastr.error('Please fill up all fields.', 'Error');
      return;
    }

    if (artists) {
      const cloneArtists = [...artists];
      const newArtist = {
        id: uniqueId,
        name,
        nationality,
        age,
        songs: [],
      };
      handleArtists([...cloneArtists, newArtist]);
      toastr.success("Artist has been added.", "Success");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="bg-white p-8 rounded-xl shadow-md z-10 w-[30rem]">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-lg font-bold">Add Artist</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <p className="text-xs text-gray-700 flex gap-1 mb-4">Fields marked with <FaAsterisk size="8" /> are mandatory.</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <label className="text-sm flex gap-1">Name <FaAsterisk className="text-red-600" size="8" /></label>
            <input
              type="text"
              className="border rounded-lg p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm flex gap-1">Nationality <FaAsterisk className="text-red-600" size="8" /></label>
            <input
              type="text"
              className="border rounded-lg p-2"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm flex gap-1">Age <FaAsterisk className="text-red-600" size="8" /></label>
            <input
              type="number"
              className="border rounded-lg p-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
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
            className="px-4 py-2 border rounded-xl hover:bg-green-200 cursor-pointer"
            onClick={handleAdd}
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtist;
