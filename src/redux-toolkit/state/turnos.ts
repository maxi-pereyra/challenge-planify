import { PayloadAction, createSlice,  } from "@reduxjs/toolkit";
import { Reserva } from "../../models/services_types";


const initialState: Reserva[] = []

export const turnoSlice = createSlice({
    name: "turnos",
    initialState: initialState,
    reducers: {
        addTurno: (state,action: PayloadAction<Reserva>) => {
           const verify = state.findIndex(servicio => servicio.serviceId == action.payload.serviceId)
           if(verify != -1){
            state[verify]=action.payload;
            }else{    
            state.push(action.payload);
           }
        }
    }
})

export const {addTurno} = turnoSlice.actions;