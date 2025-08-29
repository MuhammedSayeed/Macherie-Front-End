import clsx from "clsx";

interface IProps {
    length: number;
    currentIndex: number;
    className?: string
}
const ImageSliderCounter = ({ currentIndex, length, className }: IProps) => {
    return (
        <div>
            <span className={clsx('text-3xl tracking-wide flex font-semibold' , className)}>0{currentIndex}<span className='text-base'>/0{length}</span> </span>
        </div>
    )
}

export default ImageSliderCounter