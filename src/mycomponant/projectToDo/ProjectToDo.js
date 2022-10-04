import React, { useState } from "react";


const ToDoPro = () => {
  const [value, setValue] = useState({
    name: "",
    name1: "",
  });
  var [updatedIndex, setUpdatedIndex] = useState(0);
  const [click, setClick] = useState([]);
  const [clickedit, setclickedit] = useState(false);

  const inputEvent1 = (e) => {
    setValue((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.value);
  };
  const clickEvent = () => {
    setClick((pre) => {
      return [...pre, value];
    });

    setValue({ name: "", name1: "" });
  };

  const editHandler = (id) => {
    setUpdatedIndex(id);
    console.log(id);
    let ediedValue = click.find((value, index) => {
      return index === id;
    });
    setValue(ediedValue);
    console.log(ediedValue);
    setclickedit(true);
  };
  const updateEvent = (id) => {
    click[id] = value;

    setValue({
      name: "",
      name1: "",
    });
    setclickedit(false);
  };

  const deleteevent = (id) => {
    console.log(id);
    setClick(
      click.filter((value, index) => {
        return id !== index;
      })
    );
  };

  return (
    <>
      <div className="mian_div col-md-3">
        <label>Keep Note</label>
        <input
          placeholder="tital"
          autoComplete="off"
          value={value.name}
          name="name"
          onChange={inputEvent1}
        ></input>
        <textarea
          placeholder="write a note"
          autoComplete="off"
          value={value.name1}
          name="name1"
          onChange={inputEvent1}
        ></textarea>
      </div>
      <div
        className="col-md-3"
        style={{ margin: "auto", textAlign: "center", marginTop: "5px" }}
      >
        {clickedit === true ? (
          <button
            onClick={() => {
              updateEvent(updatedIndex);
            }}
          >
            Update
          </button>
        ) : (
          <button onClick={clickEvent}>Add</button>
        )}
      </div>

      {click.length > 0 &&
        click.map((v, index) => {
          return (
            <>
              <div className="note col-md-3">
                <label key={index} id={index}>
                  {v.name}
                </label>
                <label>{v.name1}</label>
              </div>
              <div
                className="btn col-md-3"
                style={{
                  margin: "auto",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                <button
                  onClick={() => {
                    editHandler(index);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deleteevent(index);
                  }}
                >
                  Delete
                </button>
              </div>

              {/* <h5>hi</h5> */}
            </>
          );
        })}
    </>
  );
};
export default ToDoPro;
