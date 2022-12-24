import { useState, useEffect } from "react";

import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { GetDrinks } from "../../../services/api";



export default function Drinks(){

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    (async () => {
      const drinkRequest = await GetDrinks()
      setDrinks(drinkRequest.data)
    })()
  }, [])
  
  
  return (
    <>
     <Head title="Drinks" description="Escolha o seu e refesque o seu dia"/>
    <SnackTitle>Bebidas</SnackTitle>
    <Snacks snacks={drinks} />
    </>
  )
}
