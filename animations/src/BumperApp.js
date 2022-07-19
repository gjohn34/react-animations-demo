import { Router, Routes, Route } from 'react-router-dom'
import { SwitchTransition } from 'react-transition-group'
import { useState } from 'react'
import { Transition } from 'react-transition-group'
import './bumperApp.css'

function Box({ component }) {
    return component
}

export default function () {
    const [page, setPage] = useState("one")

    const defaultStyle = {
        height: "100vh",
        transition: "opacity 300ms linear, transform 300ms linear",
        one: {
            backgroundColor: "gray",
        },
        two: {
            backgroundColor: "blue",
        },
        three: {
            backgroundColor: "green",
        },
    }
    const transitionStyle = {
        entering: {
            opacity: 0,
            transform: "translateY(100vh)"
        },
        entered: {
            opacity: 1,
            transform: "translateY(0)"
        },
        exiting: {
            opacity: 0,
            transform: "translateY(100vh)"

        },
        exited: {
            opacity: 0,
            transform: "translateY(100vh)"

        },
    }
    return (
        <>
            <button onClick={() => setPage("one")}>1</button>
            <button onClick={() => setPage("two")}>2</button>
            <button onClick={() => setPage("three")}>3</button>
            <SwitchTransition>
                <Transition
                    key={page}
                    timeout={300}
                >
                    {state => (
                        <div style={{ ...defaultStyle, ...defaultStyle[page], ...transitionStyle[state] }}></div>
                    )}

                </Transition>
            </SwitchTransition>
        </>
    )
}