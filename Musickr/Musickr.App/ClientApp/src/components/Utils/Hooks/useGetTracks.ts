import {useQuery} from "react-query";
import {createSearchParams} from "react-router-dom";

export type Track = {
  author: string;
  title: string;
  url: string;
  artworkUrl: string;
  genre: string;
  tags: string[];
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