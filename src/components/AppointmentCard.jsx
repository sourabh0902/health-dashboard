import React from 'react'
import { BicepsFlexed, Brain, CheckCircle, Eye, Heart, Syringe, Bluetooth as Tooth, User } from 'lucide-react';
import toothIcon from '../assets/tooth.png';
import strongIcon from '../assets/strong.png';

const AppointmentCard = ({
    title,
    time,
    type,
    timeRange,
    doctor,
    icon
}) => {

    const getIcon = () => {
        switch (icon) {
            case 'checkup':
                return <Syringe className="h-6 w-6 text-red-500" />;
            case 'eye':
                return <Eye className="h-6 w-6 text-blue-500" />;
            case 'heart':
                return <Heart className="h-6 w-6 text-red-500" />;
            case 'brain':
                return <User className="h-6 w-6 text-purple-500" />;
            default:
                return null;
        }
    };

    return (
        <div className={`rounded-4xl p-4 grow ${type === 'Dentist' ? ' bg-[#3635A9] text-white' : 'bg-[#DDE2F9] text-[#3a3364]'
            } ${icon === 'tooth' ? 'max-w-full md:max-w-[250px]' : 'max-w-full'} `}>
            <div className={`flex justify-between items-start`}>
                <div>
                    {type && <h3 className="font-medium">{type}</h3>}
                    {title && <h3 className="font-medium">{title}</h3>}
                    {timeRange && <p className="text-sm mt-1">{timeRange}</p>}
                    {time && <p className="text-sm mt-1">{time}</p>}
                    <div className="text-sm mt-3">{doctor}</div>
                </div>
                {type ? (
                    icon === 'tooth' ? (
                        <>
                            <img src={toothIcon} width={24} height={24} alt="tooth" />
                        </>
                    ) : (
                        <>
                            <img src={strongIcon} width={24} height={24} alt="strong" />
                        </>
                    )
                ) : (
                    getIcon()
                )}
            </div>
        </div>
    )
}

export default AppointmentCard