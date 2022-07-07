import { useState } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const defaultStyle = {
    border: 'solid 1px black',
    transition: `opacity 500ms ease-in`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export default function InsertBetween() {
    const [items, setItems] = useState([
        { id: 1, text: 'Buy eggs' },
        { id: 3, text: 'Pay bills' },
        { id: 5, text: 'Invite friends over' },
        { id: 7, text: 'Fix the TV' },
    ]);

    const insert = () => {
        const id = prompt("id")
        const text = prompt("text")
        const newItems = [...items, { id, text }]
        newItems.sort((a, b) => a.id > b.id)
        setItems(newItems)
    }
    return <>
        <TransitionGroup className="bar">
            {
                items.map(item => (
                    <CSSTransition key={item.id} timeout={500} classNames="item">
                        {state => (
                            <p style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                            >{item.id}. {item.text}
                            </p>
                        )}
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
        <button onClick={insert}>Insert</button>
    </>


}