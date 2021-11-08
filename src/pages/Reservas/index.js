import React from 'react';
import {useSelector} from 'react-redux';
import './styles.css';

export default function Reservas() {

  const reserves = useSelector(state => state.reserve);

 return (
   <div>
       <h1 className="title">Voce solicitou {reserves.length} reservas</h1>


  

        {reserves.map(reserve =>(
          <div key={reserve.id}className="reservas">
            <img
            src={reserve.image}
            alt={reserve.title}
            />
            <strong>{reserve.title}</strong>
            <span>{reserve.title}</span>
            <button type="button" onClick={()=>{}}>
              Deletar
            </button>
          </div>
        ))}

        <footer>
          <button type="button">SOLICITAR RESERVAS</button>
        </footer>

   </div>
 );
}