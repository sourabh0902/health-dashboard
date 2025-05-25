import React from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Bluetooth as Tooth } from 'lucide-react';
import { calendarData } from '../../data/appointmentsData';
import CalendarDay from '../CalendarDay';
import AppointmentCard from '../AppointmentCard';

const CalendarView = () => {
    const { month, year, days, appointments } = calendarData;

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">

                <div className="w-full h-auto flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-[#3635A9] mr-4">
                        {month} {year}
                    </h2>

                    <div className="flex">
                        <button className="h-8 w-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                            <ArrowLeft className="h-5 w-5 text-[#3635A9]" />
                        </button>
                        <button className="h-8 w-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                            <ArrowRight className="h-5 w-5 text-[#3635A9]" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-7">

                {days.map((day, index) => (
                    <CalendarDay
                        key={index}
                        date={day?.date}
                        day={day?.day}
                        timeSlots={day.timeSlots}
                        todaysDate={day?.todaysDate}
                    />
                ))}
            </div>

            <div className="flex flex-col md:flex-row grow gap-4 mt-6">
                {appointments.map((appointment, index) => (
                    <AppointmentCard
                        key={index}
                        type={appointment.type}
                        timeRange={appointment.timeRange}
                        doctor={appointment.doctor}
                        icon={appointment.icon}
                    />
                ))}
            </div>
        </div>
    )
}

export default CalendarView