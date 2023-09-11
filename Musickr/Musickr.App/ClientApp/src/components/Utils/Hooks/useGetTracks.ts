import {useQuery} from "react-query";
import {createSearchParams} from "react-router-dom";

export type Track = {
  author: string;
  title: string;
  url: string;
  image: string;     // (NEEDED) album image (must be a square picture)
  duration: number;  // (unused) track's duration in seconds
  plays: number;     // (unused) number of plays
  likes: number;     // (unused)
  reposts: number;   // (unused)
  comments: number;  // (unused)
  followers: number; // (unused)
  tags: string[];    // (NEEDED) music genre tags
};

const useGetTracks = (
  place: string
) => {
  const params = { place: place };

  return useQuery(
    ['tracks', place],
    () => fetch(`api/tracks?${createSearchParams(params)}`).then(res =>
      res.json()
    ),
    { enabled: !!place, refetchOnWindowFocus: false }
  );
};

export default useGetTracks;