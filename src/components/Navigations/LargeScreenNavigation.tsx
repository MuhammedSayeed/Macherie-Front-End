import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ImageSliderCounter from '../ImageSliderCounter/ImageSliderCounter'
import clsx from 'clsx'


interface IProps {
    currentIndex: number,
    length: number,
    onNext: () => void
    onPrev: () => void
}

const LargeScreenNavigation = ({ currentIndex, length, onNext, onPrev }: IProps) => {

    const renderDots = Array.from({ length: 3 }).map((_, idx) => {
        const isActive = currentIndex === idx;
        return (
            <span key={idx} className={clsx('block rounded-full bg-primary-light transition-all', isActive ? "size-3.5" : "size-2")}></span>
        )
    })
    return (
        <div className='space-y-6'>
            <div className="flex justify-between items-center gap-20">
                <div className="flex gap-4 items-center">
                    {renderDots}
                </div>
                <Button onClick={onNext} size={"icon"} variant={"ghost"} className='text-primary-light hover:text-primary cursor-pointer' ><ArrowRight className='size-7' /></Button>
            </div>
            <div className="flex items-center gap-20">
                <ImageSliderCounter currentIndex={currentIndex + 1} length={length} className='text-primary-light' />
                <Button onClick={onPrev} size={"icon"} variant={"ghost"} className='text-primary-light hover:text-primary cursor-pointer' ><ArrowLeft className='size-7' /></Button>
            </div>
        </div>
    )
}

export default LargeScreenNavigation