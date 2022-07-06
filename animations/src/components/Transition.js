import { Transition } from 'react-transition-group';
import { useState } from "react";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
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
                ...transitionStyles[state]
            }}>
                <button onClick={close}>Close</button>
                I'm a fade Transition!
            </div>
        )}
    </Transition>
)

function TransitionEffect({ inProp, style }) {
    const [isIn, setIsIn] = useState(false)

    const onClick = () => {
        setIsIn(!isIn)
    }

    return (
        <Transition in={inProp} timeout={500} mountOnEnter={true} unmountOnExit={true}>
            {state => (
                <div style={{
                    ...style,
                    ...transitionStyles[state]
                }}>
                    <p>element is still in the dom, transition effects are just being applied.</p>
                    <button onClick={onClick}>BUTTON</button>
                    <Fade in={isIn} close={onClick} />
                </div>
            )}
        </Transition>
    );
}

export default TransitionEffect
