import axios from 'axios';
import {  useState } from 'react';

export default function Commentaire({name, message, date, id, getData}){

    const [isEditing, setIsEditing] = useState(false);
    const [newMessage, setNewMessage] = useState(message);
    const [toggleDelete, setToggleDelete] = useState(false);
    /**
     * Fonction qui converti un timeStamp au format français (vendredi 12 mars 2021 a 12h30)
     */
    function convertDate(timeStamp){
        const date = new Date(timeStamp);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }

    /**
     * Fonction qui modifie le commentaire
     * @param {*} e
     */
    async function editComment(e){
        e.preventDefault();
        await axios.put('http://localhost:3003/articles/' + id, {
            id: id,
            author: name,
            content: newMessage,
            date: new Date()
        })
        .then((response) => {
            getData();
        })
        setIsEditing(false);
    }

    /**
     * Fonction qui ouvre une pop-up pour demander la supression
     */
    function openDeleteModal(){
        setToggleDelete(true);
    }


    /**
     * Fonction qui ouvre l'éditeur de commentaire
     */
    function openEditor(){
        setIsEditing(true);
    }

    /**
     * Fonction qui ferme l'éditeur de commentaire
     */
    function closeEditor(){
        setIsEditing(false);
    }

    /**
     * Fonction qui ferme la pop-up de confirmation
     */
    function closeDeleteModal(){
        setToggleDelete(false);
    }
    
    /**
     * Fonction qui supprime le commentaire
     */
    async function deleteComment(e){
        e.preventDefault();
        await axios.delete('http://localhost:3003/articles/' + id)
        .then((response) => {
            getData();
        })
    }   

    return(
        <>
            <div className="flex flex-col items-center">
                <div className="bg-white dark:bg-slate-700 transition duration-200 border-2 dark-border-slate-700 dark:shadow-white shadow-md rounded-lg overflow-hidden max-w-3xl my-4 w-1/2 md:w-full text-black dark:text-white">
                    <div className="px-4 py-2">
                        <div className="flex items-center">
                            {!isEditing && <button onClick={openDeleteModal} className='bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 text-white font-bold py-1 px-2 rounded mb-3 mr-3'>X</button>}
                            {!isEditing ? <button onClick={openEditor} className='bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold py-1 px-2 rounded mb-3'>Modifier</button> : <button onClick={closeEditor} className='bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold py-1 px-2 rounded mb-3'>Annuler</button>}
                        </div>
                            
                        
                        {isEditing ? (
                            <form onSubmit={editComment}>
                                <textarea 
                                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" 
                                placeholder="Votre message" 
                                value={newMessage} 
                                onChange={(e) => setNewMessage(e.target.value)}></textarea>
                                <button className='bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 text-white font-bold py-1 px-2 rounded mb-3'>Valider</button>
                            </form>
                        ) : (
                            <>
                                <h1 className="font-bold text-xl">{name}</h1>
                                <p className="text-sm whitespace-pre-line break-all">{message}</p>
                                <p className="text-end italic mt-3">Posté le : {convertDate(date)}</p> 
                            </>
                        )}
                    </div>
                </div>
            </div>
            {toggleDelete && 
                <div className="fixed top-0 right-0 left-0 h-full z-50 p-4">
                    <div className="relative w-full h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
                            <div className="p-6 text-center">
                                <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Etes-vous sûr de vouloir supprimer ce commentaire ?</h3>
                                <button onClick={deleteComment} type="button" className="text-white bg-red-600 hover:bg-red-800  focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Oui, je suis sûr
                                </button>
                                <button onClick={closeDeleteModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Non, annuler</button>
                            </div>
                        </div>
                    </div>
                </div>

                
            }
        </>
    )
}