import React from 'react'
import { upcomingAppointments } from '../../data/appointmentsData';
import AppointmentCard from '../AppointmentCard';

const UpcomingSchedule = () => {

    const appointmentsByDay = upcomingAppointments.reduce((acc, appointment) => {
        if (!acc[appointment.day]) {
            acc[appointment.day] = [];
        }
        acc[appointment.day].push(appointment);
        return acc;
    }, {});

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold text-[#3635A9] mb-4">
                The Upcoming Schedule
            </h2>

            <div className="space-y-6">
                {Object.entries(appointmentsByDay).map(([day, appointments]) => (
                    <div key={day}>
                        <h3 className="text-md text-gray-500 mb-3">On {day}</h3>

                        <div className="flex flex-col md:flex-row gap-4">
                            {appointments.map((appointment, index) => (
                                <AppointmentCard
                                    key={index}
                                    title={appointment.title}
                                    time={appointment.time}
                                    icon={appointment.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingSchedule