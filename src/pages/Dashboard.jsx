import React from 'react'
import Header from '../components/layout/Header'
import { ChevronDown, Plus } from 'lucide-react'
import MainView from '../components/layout/MainView'
import CalendarView from '../components/dashboard/CalendarView'
import UpcomingSchedule from '../components/dashboard/UpcomingSchedule'
import ActivityFeed from '../components/dashboard/ActivityFeed'
import AnatomySection from '../components/dashboard/AnatomySection'

const Dashboard = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row'>
            <MainView>
                <section className='w-full md:w-[50%] h-auto p-4 md:p-6'>
                    <Header />
                    <div className='w-full flex justify-between items-center my-2.5'>
                        <h1 className='text-2xl font-medium text-[#3635A9]'>Dashboard</h1>
                        <div className="flex items-center">
                            <span className="text-sm mr-2 text-[#3635A9] font-medium">This Week</span>
                            <ChevronDown className="h-4 w-4 text-[#3635A9]" />
                        </div>
                    </div>
                    <AnatomySection />
                    <ActivityFeed />
                </section>
            </MainView>
            <MainView>
                <section className='w-full md:w-[50%] h-auto bg-[#F6FAFF] p-4 md:p-6'>
                    {/* Action CTAs  */}
                    <div className='w-full h-auto hidden md:flex justify-end gap-5'>
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-cyan-100 flex items-center justify-center overflow-hidden">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="User profile"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <button className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                            <Plus className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Calendar */}
                    <CalendarView />

                    {/* UpcomingSchedules  */}
                    <UpcomingSchedule />
                </section>
            </MainView>
        </div>
    )
}

export default Dashboard