export const calendarData = {
    month: 'October',
    year: 2021,
    days: [
        {
            day: 'Mon',
            date: 25,
            timeSlots: [
                { time: '10:00' },
                { time: '11:00' },
                { time: '12:00' }
            ],
            todaysDate: false,
        },
        {
            day: 'Tue',
            date: 26,
            timeSlots: [
                { time: '08:00' },
                { time: '09:00', status: 'booked' },
                { time: '10:00' }
            ],
            todaysDate: true,
        },
        {
            day: 'Wed',
            date: 27,
            timeSlots: [
                { time: '12:00' },
                { time: '' },
                { time: '13:00' }
            ],
            todaysDate: false,
        },
        {
            day: 'Thurs',
            date: 28,
            timeSlots: [
                { time: '10:00' },
                { time: '11:00', status: 'booked' },
                { time: '' }
            ],
            todaysDate: false,
        },
        {
            day: 'Fri',
            date: 29,
            timeSlots: [
                { time: '' },
                { time: '14:00' },
                { time: '16:00' }
            ],
            todaysDate: false,
        },
        {
            day: 'Sat',
            date: 30,
            timeSlots: [
                { time: '12:00', status: 'booked' },
                { time: '14:00' },
                { time: '15:00' }
            ],
            todaysDate: false,
        },
        {
            day: 'Sun',
            date: 31,
            timeSlots: [
                { time: '09:00', status: 'booked' },
                { time: '10:00' },
                { time: '11:00' }
            ],
            todaysDate: false,
        }
    ],
    appointments: [
        {
            type: 'Dentist',
            timeRange: '09:00-11:00',
            doctor: 'Dr. Cameron Williamson',
            icon: 'tooth'
        },
        {
            type: 'Physiotherapy Appointment',
            timeRange: '11:00-12:00',
            doctor: 'Dr. Kevin Davies',
            icon: 'physiotherapy'
        }
    ]
};


export const upcomingAppointments = [
    {
        day: 'Thursday',
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'checkup'
    },
    {
        day: 'Thursday',
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'eye'
    },
    {
        day: 'Saturday',
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'heart'
    },
    {
        day: 'Saturday',
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'brain'
    }
];