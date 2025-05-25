import React from 'react'
import { healthData } from '../../data/healthData';
import HealthStatusCard from './HealthStatusCard';
import { Search, Heart, Settings as Lungs, Bluetooth as Tooth, Bone, ZoomIn } from 'lucide-react';
import humanBody from "../../assets/human-body.png"
import leg from '../../assets/leg.png'

const AnatomySection = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-fit flex justify-center mx-auto p-5 bg-[#F6FAFF] rounded-xl">
                    <div className="relative">
                        <img
                            src={humanBody}
                            alt="Human anatomy"
                            className="h-full md:max-h-96 w-full object-contain"
                        />

                        {/* Magnifying glass icon */}
                        <button className="absolute top-0 right-0">
                            <ZoomIn className="h-5 w-5 text-gray-500" />
                        </button>

                        {/* Healthy Heart indicator */}
                        <div className="absolute top-[21%] left-[57%]">
                            <div className="w-full h-auto text-nowrap bg-[#3635A9] text-white px-3 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5">
                                <Heart className="h-4 w-4 text-red-500" />
                                <p className='text-xs'>
                                    Healthy Heart
                                </p>
                            </div>
                        </div>

                        {/* Healthy Leg indicator */}
                        <div className="absolute bottom-[25%] -left-[5%] md:-left-[23%]">
                            <div className="w-full h-auto text-nowrap bg-cyan-400 text-white px-3 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5">
                                <img
                                    src={leg}
                                    className="h-4 w-4"
                                />
                                <p className='text-[#3635A9] text-xs'>
                                    Healthy Leg
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="space-y-4">
                    {healthData.map((item, index) => (
                        <HealthStatusCard key={index} data={item} />
                    ))}
                </div>
            </div>

            <div className="flex justify-end">
                <button className="text-indigo-600 text-xs font-medium flex items-center">
                    Details
                    <span className="ml-1">→</span>
                </button>
            </div>
        </div>
    )
}

export default AnatomySection