import { useState } from "react";
import axios from "axios";

export default function Message({name, setName, message, setMessage, getData}) {

    const [messageToShort, setMessageToShort] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        
        if(message.length < 140){
            setMessageToShort(true);
        } else {
            setMessageToShort(false);
            // Envoie du message dans la base de donnée
            axios.post('http://localhost:3003/articles', {
                author: name,
                content: message,
                date: new Date()
            })
            .then((response) => {
                getData();
            }
            )
        }

        // On vide les champs
        setName('');
        setMessage('');
    }

    return(
        <div className="flex justify-center ">
            <div className="">
                <h1 className='text-3xl mb-6 text-center'>Blog</h1>
                <form onSubmit={onSubmit} className="flex flex-col text-center justify-center">
                    <input 
                        type="text"
                        placeholder="Nom"
                        className="mb-4 p-2 border-2 border-gray-300 rounded-lg"
                        id="name" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required/>
                    <textarea 
                        id="message" 
                        name="message"
                        placeholder="Message"
                        className="p-2 border-2 border-gray-300 rounded-lg" 
                        rows="4" 
                        cols="50" 
                        minLength="140"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        required></textarea>
                    {messageToShort && <p class="mt-3 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, non !</span> Le message est trop court. Celui-ci doit faire au moins <span className="font-medium">140 caractères</span></p>}
                    <button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}