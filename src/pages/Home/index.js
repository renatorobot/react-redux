import React, {useState, useEffect}from 'react';
//import { MdFlightTakeoff } from 'react-icons/md';
import {useDispatch} from 'react-redux';
import './styles.css';


import api from '../../services/api';

export default function Reservas() {

  const dispatch = useDispatch();

  const [trips, setTrips] = useState([]);
  
  useEffect(()=>{
    async function loadApi(){
      const response = await api.get('trips')
      setTrips(response.data);
      //console.log(response.data);
    }

    loadApi();


  }, [])

  function handleAdd(trip){
    dispatch({
      type: 'ADD_RESERVE',
      trip
    })
  }


 return (
   <div>
       <div className="box">
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title}/>
              <strong>{trip.title}</strong>
              <span>status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>

              <button type="button" onClick={()=>handleAdd(trip)}>
                <div>
                  +
                </div>
                <span>SOLICITAR RESERVA</span>
              </button>

            </li>
          ))}
       </div>
   </div>
 );
}