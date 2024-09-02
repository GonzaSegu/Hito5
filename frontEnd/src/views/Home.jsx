import {useState, useEffect} from "react";
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
//import {pizzas} from '../data/listado_pizzas';
import '../assets/css/Home.css';

const Home = () => {
  const [bbdd, setInfo] = useState([]);
  useEffect(() => {consultarinfo()},[]);

  const consultarinfo = async () =>{
    const url = 'http://localhost:5000/api/pizzas'
    const response = await fetch (url);
    const data = await response.json();
    setInfo(data)
  }

  return (
    <div>
      <Header />
      <div className='row'>
        {bbdd.map((dato, index) => (
          <div key={index} className='col-md-4' style={{ display: 'flex', justifyContent: 'center' }}>
            <CardPizza
              name={dato.name}
              price={dato.price}
              ingredients={dato.ingredients}
              img={dato.img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
