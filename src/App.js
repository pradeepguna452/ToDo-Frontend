import Todo from "../src/components/Todo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { getAllTodo,addTodo,updateTodo,deleteTodo } from "./utils/HandleApi";
import { text } from "@fortawesome/fontawesome-svg-core";



function App() {
 const[todo,setTodo] = useState([]);
//  whihc is used to get the data from the database 
 const[text,setText] = useState("");
 // which is used to render the input feild input to the db 
 const [updating,setUpdating] = useState(false);
 const [todo_id,setTodo_id] = useState("");

 useEffect (()=>{
  getAllTodo(setTodo)
 },[]);
 // getalldata which has the predefined data that where stored in the data base and its parameter (setTodo) newly typed input as the parameter for that function 


 const updatetodo = (_id,text)=>{
  setText(text)
  setUpdating(true)
  setTodo_id(_id)
 }
 //this function is triggered when the updtae button is "on" 


  return (
    <div className="App">
      <Container className="w-25 mt-5 p-5 rounded bg-secondary text-white">
            <Row className="text-center" lg={12} sm={12}>
              <h2>Todolist ....</h2>
            </Row>
        <Row className="text-center mt-2">
                <Col sm={6} md={6} lg={8}>
                <input className="input-tag me-2 pb-2 bg-transparent " type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="ToDo list..."></input>
                </Col>
                <Col sm={6} md={6} lg={4}>
                <div className="btn btn-light" onClick={
                    updating ? ()=> updateTodo(todo_id,text,setText,setTodo,setUpdating): 
                    ()=>addTodo(text,setText,setTodo)}>
                    {updating ? "updating" : "Add"}</div>
                </Col> 
        </Row> 
            <Row>
                 {todo.map(item => (<
                  Todo key={item._id} 
                  text={item.text}
                  updatetodo = {()=> updatetodo(item._id,item.text)}
                  deleteTodo = {()=> deleteTodo(item._id)} />
                  ))}
             </Row>
        </Container> 
    </div> 
  );
}

export default App;
