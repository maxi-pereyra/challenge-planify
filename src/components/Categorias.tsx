//import { Box } from "@mui/material";
import React from "react";
import { Service } from "../models/services_types";
import data from '../utilities/services.json';
import { useDispatch, useSelector } from "react-redux";
import { addReservaService } from "../redux-toolkit/state/reserva";
import { Appstore } from "../redux-toolkit/store";

const services: Service[] = data.services

type Props = {
    cleanService: string;
}

export interface CategoriasInterface {}

const Categorias: React.FC<Props> = (props) => {
    
    const dispatch = useDispatch()
    const storeReserva = useSelector((store: Appstore) => store.reserva)
    
    const handlerEvent = (id: number,name:string) => {
        dispatch(addReservaService({id,name}))
    }

    return (
        <>
            {
                services.map(service =>{
                 return(
                    service.category == props.cleanService
                    ? (
                        <div key={service.id} className="card">
                            <span>{service.name}:</span>
                            <br />
                            <span>{service.description}</span>
                            <br />
                            <div className="card_select_container">
                                {
                                    storeReserva.serviceId === service.id
                                    ?(
                                        <button className="select" onClick={()=>handlerEvent(service.id, service.name)}>select</button>
                                    )
                                    :(
                                        <button onClick={()=>handlerEvent(service.id, service.name)}>select</button>
                                    )
                                }
                            </div>
                        </div>
                    )
                    :(<React.Fragment key={service.id}/>)
                 )   
                    
                })
            }
        </>
    )
}

export default Categorias