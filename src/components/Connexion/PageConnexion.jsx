import Menu from "../Menu";
import FormulaireConnexion from "./FormulaireConnexion";
import { useContext } from "react";
import { ConnexionContext } from "../../App";
import Profil from "./Profil";

export default function PageConnexion() {

  let context = useContext(ConnexionContext);
  let isConnected = context[3];

  return(
    <>
        <Menu />
        <div className="bg-white dark:bg-slate-700 h-screen">
          {isConnected ? <Profil/> : <FormulaireConnexion/>}
        </div>
    </>
  )
}