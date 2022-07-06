import { Transition } from 'react-transition-group';
import { useState } from "react";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStylesTwo = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const Fade = ({ in: inProp, close }) => (
    <Transition in={inProp} timeout={duration}>
        {state => (
            <div style={{
                ...defaultStyle,
                position: 'absolute',
                top: 0,
                right: 0,
                ...transitionStylesTwo[state]
            }}>
                <button onClick={close}>Close</button>
                I'm a fade Transition!
            </div>
        )}
    </Transition>
)

function TransitionEffect() {
    const [isIn, setIsIn] = useState(false)

    const onClick = () => {
        setIsIn(!isIn)
    }

    return (
        <>
            <p>element is still in the dom, transition effects are just being applied.</p>
            <button onClick={onClick}>BUTTON</button>
            <Fade in={isIn} close={onClick} />
        </>
    );
}

export default TransitionEffect
