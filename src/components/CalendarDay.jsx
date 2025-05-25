import React from 'react'

const CalendarDay = ({ todaysDate, day, date, timeSlots }) => {
    return (
        <div className={`${todaysDate && 'bg-[#ECF3FE] rounded-2xl'} ${day ==='Sun' && 'opacity-50'} flex flex-col items-center p-1.5 md:p-2.5`}>
            <p className="text-center text-xs font-medium text-[#3635A9] mb-2">
                {day}
            </p>

            <h3 className="text-[#3635A9] text-xl text-center font-bold mb-1 md:mb-4">{date}</h3>

            <div className="space-y-1 md:space-y-2 w-full">
                {timeSlots?.map((slot, index) => (
                    <div
                        key={index}
                        className={`text-xs rounded-md py-1 text-center ${slot.status === 'booked'
                                ? `bg-[#3635A9] text-white ${!todaysDate ? 'opacity-50' : ''}`
                                : slot.time ? 'text-indigo-700' : ''
                            }`}
                    >
                        {slot.time ? slot.time : '---'}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarDay