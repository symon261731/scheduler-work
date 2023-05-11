import { memo } from "react";
import './ButtonPrevnext.css';

interface ButtonPrevNextProps {
    prev: ()=>void;
    next: ()=> void;
    className: string,
}

export const ButtonPrevNext = memo((props: ButtonPrevNextProps) => {
    const {next, prev, className} = props;

    return (
        <div className= {`${className} buttonNextPrevGroup`}>
            <button
             type="button" 
             className="buttonNextPrevGroup__button"
             onClick={prev}
             >
                {'<'}
            </button>
            <button 
            type="button" 
            className="buttonNextPrevGroup__button"
            onClick={next}
            >
                {'>'}
            </button>
        </div>
    ) 
});