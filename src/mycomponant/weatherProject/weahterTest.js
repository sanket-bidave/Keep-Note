import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import SearchIcon from "@mui/icons-material/Search";

const TempApptest = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const [selects, setSelects] = useState("Mumbai");

  useEffect(() => {
    const fetchApi1 = async () => {
      try {
        const url = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selects}&units=metric&appid=5e012fbee81d47e3924b2a0de9ce4b5a`
        );
        setCity(url.data);
      } catch (err) {
        setCity(err.response.status);
      }
    };
    fetchApi1();
  }, [selects]);

  let iamge_clear =
    "https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg";
  let image_rain =
    "https://us.123rf.com/450wm/geraktv/geraktv1602/geraktv160200009/53452491-rain-cloud-vector-blue-illustration-isolated.jpg?ver=6";
  let image3_cloud =
    "https://img.freepik.com/premium-vector/clouds-blue-sky-background_181679-461.jpg";
  let image_non = "https://wallpaperaccess.com/full/1548686.png";

  return (
    <>
      <div className="main_body">
        <div
          className="box col-md-3"
          style={
            city != null && city.main && city.weather[0].main == "Clear"
              ? {
                  backgroundImage: `url(${iamge_clear})`,
                }
              : city != null && city.main && city.weather[0].main == "Rain"
              ? {
                  backgroundImage: `url(${image_rain})`,
                }
              : (city != null && city == 404) || search === ""
              ? {
                  backgroundImage: `url(${image_non})`,
                }
              : {
                  backgroundImage: `url(${image3_cloud})`,
                }
          }
        >
          <div className="inputdata">
            <SearchIcon />
            <input
              placeholder="please enter city"
              value={selects}
              onChange={(e) => {
                setSelects(e.target.value);
              }}
              className="inputField"
              type="search"
            ></input>
          </div>
          {(city != null && city == 404) || search === "" ? (
            <p>No Data Found</p>
          ) : (
            <div className="info">
              <h2 className="location">
                <LocationOnIcon />

                {city != null && city.sys
                  ? `${city.name} , ${city.sys.country}`
                  : null}
              </h2>
              <h3 className="temp">
                <ThermostatIcon />
                Temp : {city != null && city.main ? city.main.temp : null} °cel
              </h3>
              <h5 className="tempmin_max">
                Min - {city != null && city.main ? city.main.temp_min : null}
                °cel | Max -{" "}
                {city != null && city.main ? city.main.temp_max : null} °cel
              </h5>
              <h5 className="humidity">
                humidity -{" "}
                {city != null && city.main ? city.main.humidity : null}%
              </h5>
              <h3 className="weather">
                Weather -{" "}
                {city != null && city.main ? city.weather[0].main : null}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TempApptest;
