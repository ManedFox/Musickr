import {useQuery} from "react-query";
import {createSearchParams} from "react-router-dom";

const useGetTracks = (
  place: string
) => {
  const params = { place: place };

  return useQuery(
    ['tracks', place],
    () => fetch(`api/tracks?${createSearchParams(params)}`).then(res =>
      res.json()
    ),
    { enabled: !!place }
  );
};

export default useGetTracks;