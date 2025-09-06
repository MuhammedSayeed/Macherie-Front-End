import Image from 'next/image'
import React from 'react'

const AboutImage = () => {
    return (
        <div className="relative w-full h-fit lg:col-span-6">
            <Image src={"https://res.cloudinary.com/dndjbkrcv/image/upload/v1754850040/model2_k1fnnb.png"} className='relative z-[2] mx-auto' width={500} height={700} alt='model' />
            <div className="absolute left-0 bottom-0 right-0 w-full h-2/3 lg:h-3/4 bg-[#9e9d92] z-[1]"></div>
        </div>
    )
}

export default AboutImage