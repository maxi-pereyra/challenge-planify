import React from "react";
import { useSelector } from "react-redux";
import { Appstore } from "../redux-toolkit/store";
import { Link } from "react-router-dom";
export interface ConfirmationReservaInterface {}

const ConfirmationReserva: React.FC<ConfirmationReservaInterface> = () => {
    
    const storeReserva = useSelector((store: Appstore) => store.reserva)

    return(
        <div>
            <div className="selection_service">
                <h4>Confirmar turno</h4>
                <div className="progresBar">
                <div className='progresBar_confirm'></div>
                </div>
                <div className="confirm_container">
                        <span>Servicio: {storeReserva.name}</span><br />
                        <span>Fecha: {storeReserva.date} {storeReserva.time}</span>
                </div>
                <div className="next_time_container">
                    <Link to={"/reserva/time"}>
                        <button>Anterior</button>
                    </Link>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationReserva;