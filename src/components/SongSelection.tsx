import { FaTimes } from "react-icons/fa";
import { SongProps } from "../interface/Artists";

type ModalType = {
  name: string;
  songs: SongProps[];
  selectedSongIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
};

const SongSelection = ({
  name,
  songs,
  selectedSongIndex,
  onClose,
  onSelect,
}: ModalType) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="bg-white p-8 rounded-xl shadow-md z-10 w-[30rem]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{name} songs for you:</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
        <div>
          {songs.length > 0 && songs.map((song: SongProps, index) => {
            return (
              <div
                key={song.title}
                className={`border my-4 p-4 rounded-xl cursor-pointer ${
                  selectedSongIndex === index ? "bg-green-200 shadow-md" : "hover:bg-gray-50"
                }`}
                onClick={() => onSelect(index)}
              >
                {song.title}
              </div>
            );
          })}
          {songs.length === 0 && (
            <div>
              No songs to display.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongSelection;
