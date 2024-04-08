import React from "react";
import SelectionService from "./selection_service";


export interface ReservasInterface {}

const Reservas: React.FC<ReservasInterface> = () => {
    return(
        <div className="container">
        <SelectionService ></SelectionService>
        </div>
    )
}

export default Reservas