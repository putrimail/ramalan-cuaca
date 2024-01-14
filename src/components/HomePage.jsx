import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/Api";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchWeatherData("lombok%20timur");
        setWeatherData(result);
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row min-vh-100 align-items-center justify-content-center p-4">
          <div className="col-md-5 bg-dark text-white p-5 rounded-4 ">
            <h2>prediksi menurut anis</h2>
            <div className="d-flex justify-content-between">
              <div className="p-2">{weatherData?.address}</div>
              <div className="p-2">{weatherData?.days[0]?.datetime}</div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>suhu </h5>
              <h5>sunrise</h5>
              <h5>sunset </h5>
            </div>
            <div className="d-flex justify-content-between">
              <h5>{weatherData?.days[0]?.temp}</h5>
              <h5>{weatherData?.days[0]?.sunrise}</h5>
              <h5>{weatherData?.days[0]?.sunset}</h5>
            </div>
            <p className="text-center pt-5">angin lagin bikin ktp</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
