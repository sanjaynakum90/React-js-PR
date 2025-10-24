// import React from 'react';

// const WeatherCard = ({ data }) => (
//     <div className="card text-center shadow-sm">
//         <div className="card-body">
//             <h3 className="card-title">{data.name}</h3>
//             <img
//                 src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
//                 alt={data.weather[0].description}
//             />
//             <h4 className="card-text">{Math.round(data.main.temp)}°C</h4>
//             <p className="text-muted">{data.weather[0].main}</p>
//             <div className="row mt-3">
//                 <div className="col">
//                     <strong>Humidity:</strong> {data.main.humidity}%
//                 </div>
//                 <div className="col">
//                     <strong>Wind:</strong> {data.wind.speed} m/s
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// export default WeatherCard;