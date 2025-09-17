import { bg } from '@/constants/imgs'
import React from 'react'
import CircularPath from '@/components/Circular/CircularPath'
import Image from 'next/image'

const CircularSection = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='min-h-[1000px] flex justify-center items-center overflow-x-clip'>
            <div className="relative">
                <CircularPath />
                <div className="absolute inset-0 flex justify-center items-center animate-floatY">
                    <Image src={"https://res.cloudinary.com/dndjbkrcv/image/upload/v1757102906/model_u0hpcf.png"} alt='circular-image-model' width={900} height={900} />
                </div>
            </div>
        </div>
    )
}

export default CircularSection