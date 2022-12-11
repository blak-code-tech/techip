import React from 'react'
import { OurE4Item } from './sub-components/OurE4Item'

export const OurE4 = () => {
    return (
        <div className='grid auto-rows-auto divider-y'>

            <div className='py-16'>
                <h2 className='text-[40px]'>
                    Our E4
                    <br />
                    <span>Take A Look.</span>
                </h2>
                <p className='text-[16px] text-[#F2F2F2]'>We never faill to deliver desired result with E4!! </p>
            </div>

            <div className='grid grid-cols-4 divider-x'>
                <OurE4Item img='/images/square.png' title='Explore' desc='We shape brands through exploration,applying in-depth research to challenge assumptions at every turn. '/>
                <OurE4Item img='/images/circle.png' title='Experiment' desc='Our design approch is to simplify. We embrace the joy in creating something unique that is easy for end users.'/>
                <OurE4Item img='/images/triangle.png' title='Execute' desc="Using modern technologies, we build with efficency and skill, creating flexible and scalable business-driven solutions."/>
                <OurE4Item img='/images/pie.png' title='Evolve' desc="Using modern technologies, we build with efficency and skill, creating flexible and scalable business-driven solutions."/>
            </div>
        </div>
    )
}
