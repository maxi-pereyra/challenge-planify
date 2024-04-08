export interface Service {
    id: number,
    name: string,
    description: string,
    category: string
}

export interface Reserva {
    serviceId: number,
    name: string,
    time?: string,
    date?: string
}

export interface Slots {
    date: string,
    serviceId: number,
    availableTimeslots: string[] 
}

export interface Time {
    time: Slots[]
}