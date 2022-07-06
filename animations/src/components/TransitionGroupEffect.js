import { useState } from 'react'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
import './tge.css'

const defaultStyle = {
    transition: `opacity 500ms ease-in`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function TransitionGroupEffect() {
    const [items, setItems] = useState([
        { id: 1, text: 'Buy eggs' },
        { id: 2, text: 'Pay bills' },
        { id: 3, text: 'Invite friends over' },
        { id: 4, text: 'Fix the TV' },
    ]);

    return (
        <>
            <p>Need to wrap any mapping list with transition group. having just the transition component will not trigger changes</p>
            <TransitionGroup className="foo">
                {
                    items.map(item => (
                        <CSSTransition key={item.id} timeout={500} classNames="item">
                            {state => (
                                <p style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                >{item.text}
                                    <button onClick={() =>
                                        setItems(items =>
                                            items.filter(e => e.id !== item.id)
                                        )
                                    }>X
                                    </button></p>
                            )}
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
            <button
                onClick={() => {
                    const text = prompt('Enter some text');
                    if (text) {
                        setItems(items => [
                            ...items,
                            { id: items.length + 1, text },
                        ]);
                    }
                }}
            >
                Add Item
            </button>
        </>
    )
}

export default TransitionGroupEffect