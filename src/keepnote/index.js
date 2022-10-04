import React, { useState } from "react";
import "./style11.css";
import { toast } from "react-toastify";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const KeepNote = () => {
  const [inputValue, setInputValue] = useState({
    input: "",
    text: "",
  });
  const [click, setClick] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState(null);

  const inputHandler = (e) => {
    setInputValue((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };
  const addHandler = () => {
    console.log(inputValue, "input");
    if (inputValue.input !== "" && inputValue.text !== "") {
      setClick((pre) => {
        return [...pre, inputValue];
      });
    } else {
      toast.error("Please Write a Note");
    }

    setInputValue({
      input: "",
      text: "",
    });
    console.log(click, "click");
  };

  const editHandler = (id) => {
    console.log(id, "id");
    setInputValue(click[id]);
    setToggle(true);
    setUpdate(id);
  };

  const UpdateHandler = (id) => {
    console.log(id, "updat id");
    click[id] = inputValue;
    setToggle(false);
    toast.success("Note Updated");
    setInputValue({
      input: "",
      text: "",
    });
  };

  const deleteHandler = (id) => {
    setClick(
      click.filter((v, index) => {
        return index != id;
      })
    );
    toast.error("Note trashed");
  };
  return (
    <>
      <div className="main_component_div">
        <div
          style={{
            background: "linear-gradient(62deg, #fbeb7e 0%, #F7CE68 100%)",
            textAlign: "center",
            marginBottom: "10px",
            padding: "5px",
          }}
        >
          <h3>
            <NoteAltOutlinedIcon
              style={{ fontSize: 60, paddingRight: "10px" }}
            />
            Keep Note Application
          </h3>
        </div>
        <div className="main_div col-md-3">
          <input
            autoComplete="off"
            name="input"
            value={inputValue.input}
            onChange={inputHandler}
            placeholder="title"
          ></input>
          <textarea
            autoComplete="off"
            name="text"
            value={inputValue.text}
            onChange={inputHandler}
            placeholder="write a note"
          ></textarea>
        </div>
        <div className="btn_div col-md-3">
          {toggle === true ? (
            <button
              onClick={() => {
                UpdateHandler(update);
              }}
              type="button"
              class="btn btn-primary"
            >
              <PublishedWithChangesIcon />
              Update
            </button>
          ) : (
            <button onClick={addHandler} type="button" class="btn btn-primary">
              <AddIcon />
              Add
            </button>
          )}
        </div>

        <div className="container_div">
          {click.length > 0 &&
            click.map((v, index) => {
              return (
                <>
                  <div className="data col-md-3">
                    <div
                      class="shadow-lg p-3 mb-5 bg-body rounded"
                      style={{
                        width: "90%",

                        // display:"flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        margin: "auto",

                        backgroundImage:
                          "linear-gradient(62deg, #fbeb7e 0%, #f7ce68 100%)",
                      }}
                    >
                      <label className="label_1"> {v.input}</label>
                      <label>{v.text}</label>
                      <button
                        onClick={() => {
                          editHandler(index);
                        }}
                        type="button"
                        className="btn"
                      >
                        <EditOutlinedIcon />
                      </button>
                      <button
                        onClick={() => {
                          deleteHandler(index);
                        }}
                        type="button"
                        class="btn"
                      >
                        <ClearIcon />
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default KeepNote;
