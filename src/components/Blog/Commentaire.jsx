import axios from 'axios';
import {  useState } from 'react';

export default function Commentaire({name, message, date, id, getData}){

    const [isEditing, setIsEditing] = useState(false);
    const [newMessage, setNewMessage] = useState(message);

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
            date: date
        })
        .then((response) => {
            getData();
        })
        setIsEditing(false);
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

    return(
        /* Card pour les messages */
        <div className="flex flex-col items-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-3xl my-4 w-1/2 md:w-full">
                <div className="px-4 py-2">
                    <div className="flex items-center">
                        {!isEditing && <button onClick={deleteComment} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3 mr-3'>X</button>}
                        {!isEditing ? <button onClick={openEditor} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3'>Modifier</button> : <button onClick={closeEditor} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3'>Annuler</button>}
                    </div>
                    {isEditing ? (
                        <form onSubmit={editComment}>
                            <textarea 
                            className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" 
                            placeholder="Votre message" 
                            value={newMessage} 
                            onChange={(e) => setNewMessage(e.target.value)}></textarea>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3'>Valider</button>
                        </form>
                    ) : (
                        <>
                            <h1 className="text-gray-900 font-bold text-xl">{name}</h1>
                            <p className="text-gray-600 text-sm whitespace-pre-line">{message}</p>
                            <p className="text-end italic mt-3">Posté le : {convertDate(date)}</p> 
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}