import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { Reserva } from "../../models/services_types";


const initialState: Reserva = {
    serviceId: 0,
    name: "",
};

export const reservaSlice = createSlice({
    name: "reserva",
    initialState: initialState,
    reducers: {
        addReservaService: (state, action: PayloadAction<{id: number, name:string }>) => {
            
                state.serviceId= action.payload.id;
                state.name= action.payload.name;
            
        },
        addReservaTime: (state, action: PayloadAction<{time:string,date:string}>) =>{
                state.time=action.payload.time;
                state.date=action.payload.date;
        },
        removeReservaTime: (state) => {
            state.date="";
            state.time="";
        },
        clearReserva: (state) => {
            state.serviceId= 0;
            state.name= "";
            state.time="";
            state.date="";
        }
    }
})

export const {addReservaService , addReservaTime, removeReservaTime, clearReserva} = reservaSlice.actions;