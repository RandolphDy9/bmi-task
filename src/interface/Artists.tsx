export interface SongDetailsProps {
  composer: string;
  producer: string;
  productionDate: string;
  awards: string[];
}

export interface SongProps {
  title: string;
  lyrics: string;
  details: SongDetailsProps;
}

export interface ArtistProps {
  id: string;
  name: string;
  nationality: string;
  age: number | string;
  songs: SongProps[] | [];
}