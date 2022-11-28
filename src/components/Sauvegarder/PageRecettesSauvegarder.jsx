import Menu from "../Menu"
import RecettesSauvegarder from "./RecettesSauvegarder"

export default function PageRecettesSauvegarder(){
    return(
        <div className="h-screen bg-white dark:bg-slate-700">
            <Menu />
            <div className="h-screen bg-white dark:bg-slate-700">
                <RecettesSauvegarder />
            </div>
        </div>
    )
}