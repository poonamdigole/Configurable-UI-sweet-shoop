import logo from './logo.svg';
import './App.css';
import Config from "./utils/config.json"

function App() {
  return (
    <div className="container p-3 mt-4" style={{backgroundColor:Config.theme.bgColor}}>
      <h1 className='text-center' > {Config.title} </h1>
      <p  className='text-center m-3 fs-5'> {Config.description} </p>
      <h2 className='m-4'>Sweet Items :</h2>
      {
        Config.services.map((serviceData, index) => {
          const { title, description, price } = serviceData;

          return (
            <div className='card m-3 '>
              <div className='card-body'>
              <h3 className='card-title' style={{color: Config.theme.secondaryColor}}> {title} </h3>
              <p className='card-text fs-5'> {description} </p>
              <p className='card-text fs-4 fw-bold'>Price : {price}</p>
              </div>
              </div>
              )
       })
           }

            </div>
          );
        }

export default App;
