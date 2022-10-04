import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const TempApp = () => {
  // api key = 5e012fbee81d47e3924b2a0de9ce4b5a

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e012fbee81d47e3924b2a0de9ce4b5a`
        );

        setCity(url.data);
      } catch (err) {
        setCity(err.response.status);
      }
    };

    fetchApi();
  }, [search]);
  // useEffect(() => {

  //   const fetchApi = async () => {

  //     const url = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5e012fbee81d47e3924b2a0de9ce4b5a`
  //     );
  //     const res = await url.json()
  //     console.log(res,"res");
  //     setCity(res)

  //   };

  //   fetchApi()

  // },[search]);
  console.log(city, "datacity");
  return (
    <>
      <div className="box col-md-3">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {city != null && city == 404 ? (
          <p>No Data Found</p>
        ) : (
          <div className="info">
            <h2 className="location"></h2>
            <i class="fa-solid fa-street-view"></i>
            {city != null ? city.name : null}
            <h1 className="temp">
              main Temp : {city != null && city.main ? city.main.temp : null}
              °Cel
            </h1>
            <h4 className="tempmin_max">
              min :{city != null && city.main ? city.main.temp_min : null}° cel
              | Max : {city != null && city.main ? city.main.temp_max : null}°
              Cel{" "}
            </h4>
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;
