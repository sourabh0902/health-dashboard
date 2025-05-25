import React from 'react'
import activityData from '../../data/activityData';

const ActivityFeed = () => {
    return (
        <div className="bg-[#F6FAFF] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#3635A9]">Activity</h2>
                <div className="text-sm text-gray-400">
                    {activityData && activityData?.appointmentsCount} appointments on this week
                </div>
            </div>

            <div className="h-25">
                <div className="h-full flex items-end space-x-2">
                    {activityData && activityData?.days?.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                            {day.activities.map((activity, activityIndex) => (
                                <div
                                    key={activityIndex}
                                    className={`w-4 mb-1 rounded-sm ${activity.color}`}
                                    style={{ height: `${activity.height}px` }}
                                ></div>
                            ))}
                            <div className="text-xs text-gray-500 mt-2">{day.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed