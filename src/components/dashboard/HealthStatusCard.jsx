import React from 'react'
import Bone from '../../assets/bone.png'
import Teeth from '../../assets/teeth.png'
import Lungs from '../../assets/lungs.png'

const HealthStatusCard = ({ data }) => {

    const getIcon = () => {
        switch (data.name) {
            case 'Lungs':
                return <img src={Lungs} className="h-8 w-8 text-red-500" />;
            case 'Teeth':
                return <img src={Teeth} className="h-8 w-8 text-blue-500" />;
            case 'Bone':
                return <img src={Bone} className="h-8 w-8 text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center gap-3 p-5 bg-[#F6FAFF] rounded-xl">
            <div className="w-full flex-shrink-0 flex gap-3 justify-start items-center">
                <div className="h-8 w-8">
                    {getIcon()}
                </div>
                <h3 className="text-base font-semibold text-[#3635A9]">{data.name}</h3>
            </div>

            <div className="w-full h-auto flex-1 flex flex-col gap-1.5">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-300">Date: {data.date}</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className={`h-2 rounded-full ${data.status === 'healthy' ? 'bg-[#7DCEC0]' : 'bg-[#B44E4E]'}`}
                        style={{ width: `${data.percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default HealthStatusCard