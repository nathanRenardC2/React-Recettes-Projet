import Menu from "../Menu"
import RecettesSauvegarder from "./RecettesSauvegarder"

export default function PageRecettesSauvegarder(){
    return(
        <div className="h-screen bg-white dark:bg-slate-700">
            <Menu />
            <div className="h-screen bg-white dark:bg-slate-700 p-10">
                <h1 className='text-center text-3xl dark:text-white mb-6'>Recettes sauvegardées</h1>
                <RecettesSauvegarder />
            </div>
        </div>
    )
}