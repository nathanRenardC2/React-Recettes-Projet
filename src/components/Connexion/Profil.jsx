import { useContext } from "react"
import { ConnexionContext } from "../../App";

export default function Profil(){

    let context = useContext(ConnexionContext);
    let user = context[1];
    let setIsConnected = context[4];

    /**
     * Fonction qui permet de se déconnecter
     */
    async function onDeconnexion(){
        await setIsConnected(false);
        localStorage.setItem('isConnected', false);
        window.location.href = '/connexion';
    }


    return(
        <div className="flex flex-col justify-center items-center h-full">
            <div className="p-10 flex flex-col justify-center items-center ">
                <div className="flex flex-col items-center justify-center mb-3">
                    <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{user.prenom}  {user.nom}</h1>
                    <p className="text-lg mt-2 dark:text-white ">Role : {user.role}</p>
                </div>
                <img className="rounded-full w-44 h-44 mb-5" src={user.img} alt="user_icon" />
                <button onClick={onDeconnexion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Deconnexion</button>
            </div>
        </div>
    )
}