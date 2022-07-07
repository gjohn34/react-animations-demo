import { useState } from 'react'
import { Transition } from 'react-transition-group'
export default function ColorChange() {
    const [ani, setState] = useState(false)
    const defaultStyle = {
        border: 'solid 1px black',
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
        transition: 'background-color 300ms ease-in'
    }

    const transitionStyle = {
        entering: { backgroundColor: "green" },
        entered: { backgroundColor: "green" },
        exiting: { backgroundColor: "red" },
        exited: { backgroundColor: "red" },
    }

    return (
        <Transition in={ani} timeout={300}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyle[state]
                }} onClick={() => setState(!ani)}>
                </div>
            )}
        </Transition>
    )
}