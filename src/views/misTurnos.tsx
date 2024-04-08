import React from "react";
import { useSelector } from "react-redux";
import { Appstore } from "../redux-toolkit/store";

export interface MisTurnosInterface {}

const MisTurnos: React.FC<MisTurnosInterface> = () => {

    const storeTurnos = useSelector((store: Appstore) => store.turno)
    
    return(
        <>
            <span>Mis Turnos:</span><br />
        {
            storeTurnos.length
            ?(<>
                    {
                        storeTurnos.map(turno => {
                            return(
                                <>
                                    <div className="confirm_container">
                                    <span>Servicio: {turno.name}</span><br />
                                    <span>Fecha: {turno.date} {turno.time}</span>
                                    </div>
                                </>
                            )
                        })
                    }
            </>
            )
            :(<span>aun no tiene turnos confirmados</span>)
        }
        </>
    )
}

export default MisTurnos