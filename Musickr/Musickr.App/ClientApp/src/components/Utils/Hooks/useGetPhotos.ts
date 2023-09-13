import {useQuery} from "react-query";
import {createSearchParams} from "react-router-dom";

export type Photo = {
  author: string;
  title: string;
  url: string;
};

const useGetPhotos = (
  q: string
) => {
  const params = { q: q };

  return useQuery(
    ['photos', q],
    () => fetch(`api/photos?${createSearchParams(params)}`).then(res =>
      res.json()
    ),
    { enabled: !!q, refetchOnWindowFocus: false }
  );
};

export default useGetPhotos;