import { useState } from "react";
import { Transition } from 'react-transition-group';


export default function ScrollBy() {
    const [animate, setAnimate] = useState(false)

    const scrollDefaultStyle = {
        backgroundColor: "black",
        height: "200px",
        width: "200px",
        overflow: "hidden",
        transform: "translateY(0)"
    }

    const scrollTransitionStyles = {
        entering: { transform: "translateY(200px)" },
        entered: { transform: "translateY(200px)" },
        exiting: { transform: "translateY(0px)" },
        exited: { transform: "translateY(0px)" },
    };

    return (
        <>
            <div style={scrollDefaultStyle}>
                <Transition in={animate} timeout={300}>
                    {state => (
                        <>
                            <div style={{
                                ...scrollDefaultStyle,
                                backgroundColor: "red",
                                transition: "transform 300ms ease-in",
                                ...scrollTransitionStyles[state]
                            }}>

                            </div>
                        </>
                    )}
                </Transition>
            </div>
            <button onClick={() => setAnimate(!animate)}>Scroll</button>
        </>
    )
}