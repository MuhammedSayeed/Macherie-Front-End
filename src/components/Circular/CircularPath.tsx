import React, { useId } from "react";

interface IProps {
    size?: number;
    text?: string;
    speedSeconds?: number;
}

const CircularPath = ({ size = 600, text = "MACHERIE • MACHERIE • MACHERIE • MACHERIE • MACHERIE • MACHERIE • MACHERIE", speedSeconds = 30 }: IProps) => {
    const pathId = useId();

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg className="absolute animate-spin" viewBox="0 0 200 200" role="img" aria-label="Circular spinning brand text" style={{ width: size, height: size, animationDuration: `${speedSeconds}s`, transformBox: "fill-box", transformOrigin: "50% 50%" }}>
                <defs>
                    <path id={pathId} d="M 100,100 m -95,0 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0"/>
                </defs>
                <text className="uppercase tracking-[5px] text-[7px] fill-[#22201C]">
                    <textPath href={`#${pathId}`} startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default CircularPath;
