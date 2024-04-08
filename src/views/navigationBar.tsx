import React from "react";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { Link } from "react-router-dom";
export interface NavigationBarInterface {}

const NavigationBar: React.FC<NavigationBarInterface> = () => {
    return (
        <div className="navBar">
            <Link to={"/"}>
                <button className="btn-cafe"><LocalCafeIcon fontSize="medium"/>Reservar</button>
            </Link>
            <Link to={"/mis-turnos"}>
                <button className="btn-cafe"><LocalCafeIcon fontSize="medium"/>Mis turnos</button>
            </Link>
        </div>
    )
}

export default NavigationBar