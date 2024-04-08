import React, { useEffect } from "react";
import dataslots from "../utilities/slots.json";
import { Slots } from "../models/services_types";
import DataTimeSlots from "../components/DataTiemesSlots";
import { useDispatch, useSelector } from "react-redux";
import { Appstore } from "../redux-toolkit/store";
import { Link } from "react-router-dom";
import { removeReservaTime } from "../redux-toolkit/state/reserva";


export interface SelectionTimeInterface {}

const slots: Slots[]= [];
slots.push(dataslots)

const SelectionTime: React.FC<SelectionTimeInterface> = () => {

    const storeReserva = useSelector((store: Appstore) => store.reserva)
    const dispatch = useDispatch();

    const handlerDeletle=() =>{
        dispatch(removeReservaTime())
    }

    useEffect(()=>{
        dispatch(removeReservaTime())
    },[dispatch])

    return (
        <div className="container">
            <div className="selection_service ">
                <h4>Seleccionar horario</h4>
                <div className="progresBar">
                <div className='progresBar_time'></div>
                </div>
                <h3>Proximos turnos disponibles</h3>
                {
                    slots.map(slot => {
                        return(
                            slot.serviceId === storeReserva.serviceId
                            ?(

                                <DataTimeSlots slot={slot} key={slot.serviceId}/>
                            )
                            :(<React.Fragment key={slot.serviceId}/>)
                        )
                    })
                }
            </div>
            <div className="next_time_container">
            <Link to={"/"}><button onClick={()=>handlerDeletle()}>Atras</button></Link>
            {
                storeReserva.time
                ? (
                    <Link to={"/reserva/confirmaReserva"}><button>Siguiente</button></Link>
                )
                :(<></>)
            }
            </div>
        </div>
    )
}

export default SelectionTime;