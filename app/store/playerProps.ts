export interface PlayerProps {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: ItemType;
  uri: string;
}

interface Album {
  album_type: AlbumTypeEnum;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: ReleaseDatePrecision;
  total_tracks: number;
  type: AlbumTypeEnum;
  uri: string;
}

enum AlbumTypeEnum {
  Album = "album",
  Single = "single",
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: ArtistType;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

enum ArtistType {
  Artist = "artist",
}

interface Image {
  height: number;
  url: string;
  width: number;
}

enum ReleaseDatePrecision {
  Day = "day",
}

interface ExternalIDS {
  isrc: string;
}

enum ItemType {
  Track = "track",
}
