
import { useContext } from "react";
import { useState } from "react";
import { ConnexionContext } from "../../App";

export default function FormulaireConnexion() {

    let context = useContext(ConnexionContext);
    let users = context[0];
    let setUser = context[2];
    let isConnected = context[3];
    let setIsConnected = context[4];


    const [goodLogin, setGoodLogin] = useState(null);
    const [login , setLogin] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmitAuthentifier(e){
        e.preventDefault();
        // On parcourt le tableau d'utilisateurs
        for(let i = 0; i < users.length; i++){
            if(users[i].pseudo === e.target.pseudo.value && users[i].mdp === e.target.mdp.value){
                await setIsConnected(true);
                await setGoodLogin(true);
                await setUser(users[i]);

                // On set le user dans le localStorage
                localStorage.setItem('user', JSON.stringify(users[i]));

                // On set le booléen isConnected dans le localStorage
                localStorage.setItem('isConnected', true);

            }
            
        }

        if(!isConnected){
            setGoodLogin(false);
        }

    }



    return(
        <div className="flex w-full items-center justify-center h-full">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Connexion
                    </h1>
                    <form onSubmit={onSubmitAuthentifier} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="pseudo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom d'utilisateur</label>
                            <input 
                                type="text" 
                                name="pseudo" 
                                id="pseudo"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user123" required=""/>
                        </div>
                        <div>
                            <label htmlFor="mdp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input 
                                type="password" 
                                name="mdp" 
                                id="mdp"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="••••••••" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                required=""/>
                        </div>
                        {goodLogin === false && <p className="mt-3 text-sm text-red-600 dark:text-red-500">Nom d'utilisateur ou mot de passe <span className="font-medium">Incorrect</span></p>}
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Connexion</button>
                    </form>
                </div>
            </div>
        </div>
    )
}