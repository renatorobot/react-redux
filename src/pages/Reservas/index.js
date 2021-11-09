import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeReserve, updateAmountReserve} from '../../store/modules/reserve/actions'
import './styles.css';

export default function Reservas() {

  const dispatch = useDispatch();
  const reserves = useSelector(state => state.reserve);

  function handleRemove(id){
    dispatch(removeReserve(id))
  }

  function decrementAmout(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount -1))
  }

  function incrementAmout(trip){
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))
  }

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

            <div>
                <button type="button" onClick={()=>{decrementAmout(reserve)}}> - </button>
                <span> {reserve.amount} </span>
                <button type="button" onClick={()=>{incrementAmout(reserve)}}> + </button>
            </div>

            <button type="button" onClick={()=>{handleRemove(reserve.id)}}>
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