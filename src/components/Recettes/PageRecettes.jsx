import Menu from "../Menu";
import Recettes from "./Recettes";
import { createContext } from "react";
import { useState } from "react";

export const RecettesSaveContext = createContext();

export default function PageRecettes() {

    const [recettesSave, setRecettesSave] = useState([]);

    return (
        <RecettesSaveContext.Provider value={[recettesSave, setRecettesSave]}>
            <Menu />
            <div className="h-screen bg-white dark:bg-slate-700">
                <Recettes />
            </div>
        </RecettesSaveContext.Provider>
    );
}