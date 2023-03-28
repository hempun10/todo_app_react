import React, { useState } from "react";
import "../Style.css";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item,setItem] = useState([])

//   Add all items
const addItem =()=>{
    if(!inputData){
        alert("please enter a todo item")
    }else{
        const myinputData = {
            id : new Date().getTime().toString(),
            name: inputData
        }
        setItem([...item , myinputData])
        setInputData('')
    }
}
// Delete each item
const deleteItem =(index)=>{
    const updatedItem = item.filter((currElem)=>{
        return currElem.id !== index;
    })
    setItem(updatedItem)
}
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="../../assets/todo.svg" alt="todo logo" />
            <figcaption>Add your todo List Here 🫶</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item ✍️"
              className="form-control"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i class="fa fa-solid fa-plus" onClick={addItem}></i>
          </div>
          {/* Show our items */}
          <div className="showItems">
          {item.map((currElem)=>{
            const { id,name }= currElem
            return(
            <div className="eachItem" key={id}>
              <h3>{name}</h3>
              <div className="todo-btn">
                <i class="far fa-solid fa-edit"></i>
                <i class="far fa-solid fa-trash-alt" onClick={()=> deleteItem(id)}></i>
              </div>
            </div>
            )
          })}
          </div>
          <div className="showItems">
            {/* remove all items */}
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=> setItem([])}>
              <span>CHECKLIST</span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
