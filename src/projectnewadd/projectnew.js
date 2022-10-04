import React, { useState } from "react";

const Project = () => {
  const [event, setEvent] = useState(false);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [value1, setValue1] = useState([]);

  /**
   * 
  setvalue1([{
     username: "sanket',
    password: "akshay",
  },{
     username: "honu',
    password: "vit",
  }])

   */

  const inputEvent = (e) => {
    setValue((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
    // console.log(e.target.value);
  };
  const clickEvent = () => {
    setValue1((pre) => {
      return [...pre, value];
    });

    setEvent(true);
    setValue({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <label>Username</label>
        <input
          value={value.username}
          name="username"
          onChange={inputEvent}
        ></input>
      </div>
      <div>
        <label>password</label>
        <input
          value={value.password}
          name="password"
          onChange={inputEvent}
        ></input>
      </div>
      <button onClick={clickEvent}>Submit</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {value1.length > 0 &&
          value1.map((v) => {
            return (
              <>
                <div className="col-3" style={{ border: "solid black 1px" }}>
                  <h5>username - {v.username}</h5>
                  <h5>password - {v.password}</h5>
                </div>
              </>
            );

            {
              /* 
<h5>{value1[0].username}</h5>
 */
            }
          })}
      </div>
    </>
  );
};
export default Project;
