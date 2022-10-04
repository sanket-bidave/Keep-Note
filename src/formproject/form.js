import React, { useState } from "react";

const FormProject = () => {
  const [click1, setClick1] = useState(false);
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setClick1(true);
    console.log(click1, "Clicked me");
  };

  const changeHandler = (e) => {
    setName(e.target.value);
    setClick1(false);
    // console.log(e.target.value,'value')
  };

  console.log(name,"name");
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Fullname</label>
          <input
            type={"text"}
            value={name}
            onChange={changeHandler}
            autoComplete="off"
            name="name"
            id="name"
          ></input>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            type={"text"}
            onChange={changeHandler}
            autoComplete="off"
            name="email"
            id="email"
          ></input>
        </div>

        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            type={"text"}
            autoComplete="off"
            name="Phone"
            id="Phone"
          ></input>
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            type={"password"}
            autoComplete="off"
            name="Password"
            id="Password"
          ></input>
        </div>

        {/* <div>
            <label htmlFor="dob">Date Of Birth</label>
            <input type={'date'} autoComplete="off" name="dob" id="dob"></input>
        </div> */}

        <button type="submit">Submit</button>
      </form>
      {click1 === true && (
        <div>
          <h1>{name}</h1>
        </div>
      )}
    </>
  );
};

export default FormProject;
