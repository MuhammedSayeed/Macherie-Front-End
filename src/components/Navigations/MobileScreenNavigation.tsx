import { ArrowLeft, ArrowRight } from 'lucide-react'
import ImageSliderCounter from '@/components/ImageSliderCounter/ImageSliderCounter'
import { Button } from '../ui/button'


interface IProps {
    onNext: () => void
    onPrev: () => void
    currentIndex: number
    length: number
}

const MobileScreenNavigation = ({ onNext, onPrev, currentIndex, length }: IProps) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <Button onClick={onPrev} size={"icon"} className="bg-primary/50 hover:bg-primary/80 backdrop-blur-md transition-colors cursor-pointer p-6 rounded-full border border-secondary">
                <ArrowLeft className='size-7' />
            </Button>
            <ImageSliderCounter currentIndex={currentIndex + 1} length={length} />
            <Button onClick={onNext} size={"icon"} className="bg-primary/50 hover:bg-primary/80 backdrop-blur-md transition-colors cursor-pointer p-6 rounded-full border border-secondary">
                <ArrowRight className='size-7' />
            </Button>
        </div>
    )
}

export default MobileScreenNavigation