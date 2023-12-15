import { useArtistContext } from "../context/ArtistContext";
import { ArtistProps } from "../interface/Artists";

const ArtistCard = ({ props }: { props: ArtistProps }) => {
  const { id, name, nationality, age, songs } = props;
  const { selectedArtist, handleArtistClick } = useArtistContext();

  return (
    <div
      className={`border py-4 rounded-xl px-12 text-sm cursor-pointer ${
        selectedArtist && selectedArtist.id === id
          ? "bg-green-200 shadow-lg"
          : "hover:bg-gray-50"
      }`}
      onClick={() => handleArtistClick({ id, name, nationality, age, songs })}
    >
      <div>
        Name: <span className="font-semibold">{name}</span>
      </div>
      <div>Nationality: {nationality}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export default ArtistCard;
