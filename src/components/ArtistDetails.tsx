import { useState } from "react";
import { ArtistProps, SongProps } from "../interface/Artists";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import SongSelection from "./SongSelection";
import { Link, useParams } from "react-router-dom";
import { useArtistContext } from "../context/ArtistContext";

type TitleSectionType = {
  id: string;
  urlId: string | undefined;
  name: string;
  songs: SongProps[];
  index: number;
  selectedSongIndex: number;
  onClick: () => void;
};

const TitleSection = ({
  id,
  urlId,
  name,
  songs,
  index,
  selectedSongIndex,
  onClick,
}: TitleSectionType) => {
  return (
    <div className="border-0 rounded-xl py-2 bg-white">
      <div className="mx-6 flex justify-between items-center gap-4">
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer hover:text-green-600 hover:scale-110" onClick={onClick}>
            <FaBars />
          </div>
          { songs.length > 0 ? <div>{name}: {songs[index]?.title}</div> : <div>No songs to display.</div> }
        </div>
        {!urlId && songs.length > 0 && (
          <Link
            to={`/artist/${id}/${selectedSongIndex}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 hover:scale-110"
          >
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </div>
  );
};

const LyricsSection = ({
  songs,
  index,
}: {
  songs: SongProps[];
  index: number;
}) => {
  return (
    <div className="h-[30rem] overflow-y-scroll border-0 rounded-xl bg-white">
      <div className="my-auto text-sm">
        <div className="py-4">
          {songs[index]?.lyrics ? (
            <>
              <div className="mx-5 text-lg">{songs[index]?.title} Lyrics</div>
              <pre
                dangerouslySetInnerHTML={{
                  __html: songs[index]?.lyrics,
                }}
              />
            </>
          ) : (
            <p className="mx-6">No lyrics found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const DetailsSection = ({
  songs,
  index,
}: {
  songs: SongProps[];
  index: number;
}) => {
  return (
    <div className="border-0 rounded-xl flex flex-1 text-sm bg-white">
      { songs.length > 0 ? (
        <div className="my-auto mx-6">
          <div className="text-lg">{songs[index]?.title} Details</div>
          <div>Composer: {songs[index]?.details.composer}</div>
          <div>Producer: {songs[index]?.details.producer} </div>
          <div>Production Date: {songs[index]?.details.productionDate} </div>
          <div>
            Awards:
            {songs[index]?.details.awards.map((item: any, i: number) => {
              return (
                <span key={item} className="ml-2">
                  {item}{i < songs[index]?.details.awards.length - 1 ? "," : ""}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="m-6">
          No details found.
        </div>
      )}
    </div>
  );
};

const ArtistDetails = ({
  props,
  index,
}: {
  props: ArtistProps;
  index?: number;
}) => {
  const { id, name, songs } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [toggleSelection, setToggleSelection] = useState<boolean>(false);
  const { id: urlId } = useParams();
  const { selectedSongIndex, handleSelectedSongIndex } = useArtistContext();

  const handleSongSelection = (index: number) => {
    handleSelectedSongIndex(index);
    setToggleSelection(true);
    setModal(false);
  };

  return (
    <div className={`grid overflow-y-scroll ${urlId ? "col-span-12" : "col-span-9"}`}>
      <div className="m-6 flex flex-col gap-6">
        <TitleSection
          id={id}
          urlId={urlId}
          name={name}
          songs={songs}
          index={index && !toggleSelection ? index : selectedSongIndex}
          selectedSongIndex={selectedSongIndex}
          onClick={() => setModal(true)}
        />

        <LyricsSection
          songs={songs}
          index={index && !toggleSelection ? index : selectedSongIndex}
        />

        <DetailsSection
          songs={songs}
          index={index && !toggleSelection ? index : selectedSongIndex}
        />

        {modal && (
          <SongSelection
            name={name}
            songs={songs}
            selectedSongIndex={
              index && !toggleSelection ? index : selectedSongIndex
            }
            onClose={() => setModal(false)}
            onSelect={(i) => handleSongSelection(i)}
          />
        )}
      </div>
    </div>
  );
};

export default ArtistDetails;
