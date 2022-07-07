import React from "react";
import { SwitchTransition, Transition } from "react-transition-group";

export default function Switching() {
    const [readyState, setReadyState] = React.useState(true);

    const defaultStyle = {
        transition: "opacity 300ms, transform 300ms",
    }

    const transitionStyle = {
        entering: {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        entered: {
            opacity: 1,
            transform: "translateX(0)"
        },
        exiting: {
            opacity: 0,
            transform: "translateX(100%)"
        },
        exited: {
            opacity: 0,
            transform: "translateX(100%)",
        }
    }


    return (
        <SwitchTransition mode="out-in">
            <Transition
                key={readyState}
                timeout={300}
            >
                {state => (
                    <div style={{ ...defaultStyle, ...transitionStyle[state] }} >
                        <button
                            onClick={() => setReadyState(!readyState)}
                        >
                            {readyState.toString()}
                        </button>
                    </div>
                )}
            </Transition >
        </SwitchTransition >
    );
}
