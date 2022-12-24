import { useState, useEffect } from "react";

import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { GetIceCreams } from "../../../services/api";
export default function IceCreams(){
  
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    (async () => {
      const IceCreamRequest = await GetIceCreams()
      setIceCreams(IceCreamRequest.data)
    })()
  }, [])    
  
  return (
  <>
    <Head title="Sorvetes" description="Escolha o seu" />
    <SnackTitle>Sorvetes</SnackTitle>
    <Snacks snacks={iceCreams}/>

  </>)
}
