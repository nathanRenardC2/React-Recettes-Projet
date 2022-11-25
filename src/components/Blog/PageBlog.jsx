import Menu from "../Menu";
import Message from "./Message";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Commentaire from "./Commentaire";
import Loading from "../Loading";

export default function PageBlog() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData(){
        setLoading(true);
        axios.get('http://localhost:3003/articles')
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
    }


    useEffect(() => {
        getData();
      }, []);


    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    return (
        <>
            <Menu />
            <div className="bg-white dark:bg-slate-700 h-screen p-10">
                <Message name={name} setName={setName} message={message} setMessage={setMessage} getData={getData} />
                {loading ? <Loading /> : 
                    <div className="mt-10 mb-10">
                        {data.map((article) => (
                            <Commentaire key={article.id} name={article.author} message={article.content} date={article.date} id={article.id} getData={getData}></Commentaire>
                        ))}     
                    </div>  
                }
            </div>
        </>
    );
}
