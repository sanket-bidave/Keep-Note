import React, { useState } from "react";
import { toast } from "react-toastify";
import "./indextodo.css"

const ToDoTest = () => {
  const [value, setValue] = useState({
    add: "",
  });
  const [click, setClick] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [updateID, setUpdateId] = useState(null);

  const inputEvent = (e) => {
    setValue((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });

    console.log(e.target.value);
  };

  const clickHandler = () => {
    setClick((pre) => {
      return [...pre, value];
    });
    setValue({
      add: "",
    });
  };

  const deleteHandler = (id) => {
    setClick(
      click.filter((v, index) => {
        return index != id;
      })
    );
    toast.success("Data Delted");
  };
  const updateHandler = (id) => {
    console.log((click[id] = value), "update");
    click[id] = value;
    setValue({ add: "" });
    setToggle(false);

    // setClick((pre)=>{
    //     return[...pre,[id]= value]
    // })
  };

  const editHandler = (id) => {
    console.log(id);
    console.log(click[id]);
    setClick(click[id]);
    setToggle(true);
    setUpdateId(id);
  };
  console.log(click, "click");

  return (
    <>
      <div className="info col-md-3">
        <div>
          <input
            value={value.add}
            name="add"
            onChange={inputEvent}
            placeholder="Add Task"
          ></input>
        </div>
        <div>
          {toggle === true ? (
            <button
              onClick={() => {
                updateHandler(updateID);
              }}
            >
              Update
            </button>
          ) : (
            <button onClick={clickHandler}>Add</button>
          )}
        </div>
      </div>
      <div className="data">
        {click.length > 0 &&
          click.map((v, index) => {
            return (
              <>
                <div key={index}>
                  <label>Task - {v.add}</label>
                  <button
                    onClick={() => {
                      deleteHandler(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      editHandler(index);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
export default ToDoTest;
