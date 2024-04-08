import { configureStore } from "@reduxjs/toolkit";
import { Reserva } from "../models/services_types";
import { reservaSlice } from "./state/reserva";
import { turnoSlice } from "./state/turnos";

export interface Appstore{
    reserva: Reserva,
    turno: Reserva[]
}
export default configureStore<Appstore>({
    reducer: {
        reserva: reservaSlice.reducer,
        turno: turnoSlice.reducer
    }
})