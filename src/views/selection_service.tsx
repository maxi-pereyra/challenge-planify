import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { useState } from 'react';
import data from '../utilities/services.json';
import { Service } from '../models/services_types';
import Categorias from '../components/Categorias';
import { useSelector } from 'react-redux';
import { Appstore } from '../redux-toolkit/store';
import { Link } from 'react-router-dom';

const services: Service[] = data.services

const category: string[] = services.map(service => service.category )
const cleanCategory: string[] = [...new Set(category)]

console.log(cleanCategory)
type Panel = {
    isCollapse: boolean,
    index: number[]
}
export interface SelectionServiceInterface {}

const SelectionService: React.FC<SelectionServiceInterface> = () => {

    const [seeMore , setSeeMore] = useState<Panel>({isCollapse:false , index:[]});
    
    const storeReserva = useSelector((store: Appstore) => store.reserva)
    
    const handlerChange = (index:number) => {
        
       if((seeMore.index.findIndex(num => num == index)==-1)){
           setSeeMore({
               isCollapse: true,
               index:[...seeMore.index , index]
           })
       }else{
        setSeeMore({
            isCollapse:true,
            index: seeMore.index.filter(num => num!=index)
        })
       }
    }
    return (
        <div>
            <div className='selection_service'>
            <h4>Seleccionar servicio</h4>
            <div className="progresBar">
                <div className='progresBar_servie'></div>
            </div>
            <h3>Category</h3>

        {
                cleanCategory.map((service:string , index: number) => {
                    return (
                        <Accordion key={index}>
                            <AccordionSummary
                            expandIcon={
                                !(seeMore.isCollapse && (seeMore.index.findIndex(num => num == index)!=-1))?   (  < AddIcon />) : (  < HorizontalRuleOutlinedIcon />)
                                }
                            onClick={ ()=>handlerChange(index)}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                                {service}
                            </AccordionSummary>
                  
                            <AccordionDetails>
                                <Categorias cleanService={service}></Categorias>
                            </AccordionDetails>

                        </Accordion>
                    )
                })
            }
        </div>
            <div className='next_container'>
            {
                storeReserva.name
                ? (
                    <Link to={"/reserva/time"}>
                        <button>Siguiente</button>
                    </Link>
                ) 
                : (
                    <></>
                )
            }
            </div>
    </div>
    )
}

export default SelectionService

