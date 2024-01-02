import React from 'react'
import TeamCard from './team-card'
import { teamMembers } from '../../../../utils/CONSTANTS'

export default function MeetOurTeam() {
    const MobileViewTeamList = () => {
        return (
            <div className='grid grid-cols-1 px-10  md:grid-cols-3 w-full  gap-8 md:hidden last:mb-10 ' >
                {teamMembers?.map((item, index) => (
                    <div key={index} className='sticky top-0 rounded-xl '>
                        <TeamCard
                            name={item?.name}
                            role={item?.role}
                            image={item?.image}
                            className={item?.className}
                        />
                    </div>
                ))}
            </div>
        )
    }

    const DesktopViewTeamList = () => {
        return (
            <div className='hidden grid-cols-1   md:grid-cols-4 w-full  gap-6 md:grid ' >
                {teamMembers?.map((item, index) => (
                    <TeamCard
                        name={item?.name}
                        role={item?.role}
                        image={item?.image}
                        className={item?.className}
                        key={index}
                    />
                ))}
            </div>
        )
    }
    return (
        <div className=' isolate md:h-screen flex flex-col items-center  bg-[#EDEFEF] '>
            <div className='flex  flex-col  text-center '>
                <div className='flex  flex-col items-center text-center '>
                    <div className='grid max-w-3xl  px-10 md:px-0 py-10'>
                        <h1 className='text-3xl md:text-5xl font-bold'> Meet our star team</h1>

                    </div>


                    <DesktopViewTeamList />
                    <MobileViewTeamList />

                </div>
            </div>


        </div>



    )
}
