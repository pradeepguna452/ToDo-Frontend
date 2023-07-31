import axios from "axios";

const baseURl = "http://localhost:4000";


const getAllTodo = (setTodo) =>{
axios
    .get(baseURl)
    .then(({data}) =>{
        console.log(data);
        setTodo(data);
    })
    .catch((err)=>{
        console.log(err);
    })  
}

const addTodo = (text,setText,setTodo) =>{
    axios
    .post(`${baseURl}/save`, {text})
        .then((data)=>{
            console.log(data);
            setText("");
            getAllTodo(setTodo)
        })
        .catch((err)=>{
            console.log(err);
        })
}
const updateTodo = (todo_id,text,setText,setTodo,setUpdating)=>{
    axios
    .post(`${baseURl}/update`,{_id : todo_id,text})
        .then(()=>{
            setUpdating(false);
            setText("");
            getAllTodo(setTodo)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
const deleteTodo = (_id,setTodo)=>{
    axios
    .post(`${baseURl}/delete`,{ _id })
        .then((data)=>{
            console.log(data);
            console.log(getAllTodo(setTodo));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
export {getAllTodo,addTodo,updateTodo,deleteTodo}