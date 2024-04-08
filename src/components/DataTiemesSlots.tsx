import React from "react";
import { Slots } from "../models/services_types";
import { useDispatch } from "react-redux";
import { addReservaTime } from "../redux-toolkit/state/reserva";

export interface DataTimesSlotsInterface {}
type Props = {
    slot: Slots
}
const DataTimeSlots: React.FC<Props> = (props) => {

    const dispatch = useDispatch();

    const handlerTime = (date: string , time: string) => {
        dispatch(addReservaTime({date , time}))
    }

    return (
        <>
            <div className="card">
                <span>{props.slot.date}</span>
                <br />
                <div className="time_grid">
                {
                    props.slot.availableTimeslots.map((time: string , index: number) => {
                        return(
                            <div key={index} >
                                <button onClick={() => handlerTime(props.slot.date , time)}>{time}</button>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        </>
    )
}

export default DataTimeSlots;