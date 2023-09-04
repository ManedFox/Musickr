import React, {useCallback} from "react";

import PageContent from "../../Utils/PageContent";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import Playlist from "../Components/Playlist";
import {useDisclosure} from "@chakra-ui/react";

const PlayerPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  
  const place = searchParams.get("place");
  
  
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSearchBarChange = useCallback((value: string) => {
      const params = { place: value };

      navigate({
        pathname: "/player",
        search: `?${createSearchParams(params)}`
      })
    },
    [navigate]);
  
  return (
    <Playlist onChange={onSearchBarChange} defaultValue={place} playlist={require(`../../Utils/dummy.json`)}lang={require(`../../Utils/lang.json`)["fr-FR"]}/>
  );
};

export default React.memo(PlayerPage);