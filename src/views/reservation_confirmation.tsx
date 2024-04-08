import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Appstore } from "../redux-toolkit/store";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { Reserva } from "../models/services_types";
import { addTurno } from "../redux-toolkit/state/turnos";
import { clearReserva } from "../redux-toolkit/state/reserva";
export interface ConfirmationReservaInterface {}

const ConfirmationReserva: React.FC<ConfirmationReservaInterface> = () => {
    
    const storeReserva = useSelector((store: Appstore) => store.reserva)
    const [isConfirm , setIsConfirm] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handlerConfirm = (storeReserva: Reserva) => {
        setIsConfirm(!isConfirm)
        dispatch(addTurno(storeReserva))
        dispatch(clearReserva())
    }
    return(
        <div>
            <div className="selection_service">
                <h4>Confirmar turno</h4>
                <div className="progresBar">
                <div className='progresBar_confirm'></div>
                </div>
                <div className="confirm_container">
                    {
                        isConfirm
                        ? (
                            <Stack  sx={{ width: '100%' }} spacing={2}>
                                <Alert severity="success">
                                    <AlertTitle>Confirmado</AlertTitle>
                                    Su reserva para {storeReserva.name} a sido confirmada.
                                </Alert>
                            </Stack>
                        )
                        : (
                            <>
                                <span>Servicio: {storeReserva.name}</span><br />
                                <span>Fecha: {storeReserva.date} {storeReserva.time}</span>
                            </>
                        )
                    }
                </div>
                <div className="next_time_container">
                    {
                        isConfirm
                        ?(
                            <>
                            <Link to={"/"}>
                                <button>Hacer otra reservacion</button>
                            </Link>
                            </>
                        )
                        :(
                            <>
                            <Link to={"/reserva/time"}>
                                <button>Anterior</button>
                            </Link>
                            <button onClick={()=> handlerConfirm(storeReserva)}>Confirmar</button>
                            </>
                        )
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ConfirmationReserva;