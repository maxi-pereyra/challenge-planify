import { configureStore } from "@reduxjs/toolkit";
import { Reserva } from "../models/services_types";
import { reservaSlice } from "./state/reserva";

export interface Appstore{
    reserva: Reserva
}
export default configureStore<Appstore>({
    reducer: {
        reserva: reservaSlice.reducer
    }
})