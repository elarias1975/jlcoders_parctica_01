import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";

export const Comments = () => {
    const navigation = useNavigate();
    const [comments,setComments]=useState([]);
    const [inputSearch,setInputSearch]=useState("");

    useEffect (()=>{
        getComments();
    },[]);

    const getComments = async ({title}) => {
        try {
          const data = await Axios.get('https://jsonplaceholder.typicode.com/posts')  
          console.log(data);
        } catch (error){
            console.log("Error en getComments",error.message);
        }
    }

  return (
    <div>Comments</div>
  )
}
