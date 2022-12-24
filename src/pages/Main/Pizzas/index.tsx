import { useState, useEffect } from "react";

import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { GetPizzas } from "../../../services/api";


export default function Pizzas(){
   const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (async () => {
      const pizzasRequest = await GetPizzas()
      setPizzas(pizzasRequest.data)
    })()
  }, []) 
  return (
    <> 
    <Head title="Pizzas" description="Melhores do Brasil"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizzas} />
    </>
  )
}
