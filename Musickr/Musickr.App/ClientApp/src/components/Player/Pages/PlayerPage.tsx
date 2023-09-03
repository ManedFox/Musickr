import React from "react";

import PageContent from "../../Utils/PageContent";
import {useSearchParams} from "react-router-dom";
import Playlist from "../Components/Playlist";

const PlayerPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const place = searchParams.get("place");
  
  const playlist = [
    {
      image:"https://i1.sndcdn.com/artworks-7PSGKYJFKXCmyssF-LSW6IA-t500x500.jpg",
      link:"https://soundcloud.com/bjonti/sanne-som-meg",
      title:"Sånne Som Meg",
      artist:"Bjørn Kristoffer",
      duration:82,
      plays:562,
      likes:1104012,
      reposts:11453,
      comments:1182,
      tags:["folk & singer-songwriter"]
    },
    {
      image:"https://i1.sndcdn.com/artworks-7PSGKYJFKXCmyssF-LSW6IA-t500x500.jpg",
      link:"https://soundcloud.com/bjonti/sanne-som-meg",
      title:"Sånne Som Meg",
      artist:"Bjørn Kristoffer",
      duration:345,
      plays:562,
      likes:447520,
      reposts:112,
      comments:0,
      tags:["folk & singer-songwriter"]
    },
    {
      image:"https://i1.sndcdn.com/artworks-7PSGKYJFKXCmyssF-LSW6IA-t500x500.jpg",
      link:"https://soundcloud.com/bjonti/sanne-som-meg",
      title:"Sånne Som Meg",
      artist:"Bjørn Kristoffer",
      duration:130,
      plays:562,
      likes:9,
      reposts:3086,
      comments:112,
      tags:["folk & singer-songwriter"]
    },
  ]
  
  return (
    <div style={{width:'50%'}}>
      <Playlist playlist={playlist} l="fr"/>
    </div>
  );
};

export default React.memo(PlayerPage);