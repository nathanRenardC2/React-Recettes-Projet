import Menu from "../Menu";
import Message from "./Message";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import Commentaire from "./Commentaire";

export default function PageBlog() {

    const [data, setData] = useState([]);

    async function getData(){
        axios.get('http://localhost:3003/articles')
        .then((response) => {
            setData(response.data);
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
            <Message name={name} setName={setName} message={message} setMessage={setMessage} getData={getData} />
            <div className="mt-10">
                {data.map((article) => (
                    <Commentaire key={article.id} name={article.author} message={article.content} date={article.date} id={article.id} getData={getData}></Commentaire>
                ))}
            </div>
        </>
    );
}
