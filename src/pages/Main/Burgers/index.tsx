import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";
import { GetBurgers } from "../../../services/api";

export default function Burgers(){
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    (async () => {
      const burgerRequest = await GetBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])
  
  
  return (
  <>
  <Head title="Hamburgueres" description="Nossos melhores hamburgueres"/>
  <SnackTitle>Hamburgueres</SnackTitle>
  <Snacks snacks={burgers}></Snacks>
  </>
  )
}
