import { Transition } from 'react-transition-group';
import React, { useState } from "react";
import TransitionEffect from './components/Transition';
import TransitionGroupEffect from './components/TransitionGroupEffect';




function TransitionWrapper({ text, children }) {

  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const [state, setState] = useState(false)
  return <>
    <h2>{text}</h2>
    <Transition in={state} timeout={300} mountOnEnter={true} unmountOnExit={true}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
    <button onClick={() => setState(!state)}>{state ? "Hide" : "Show"}</button>
  </>
}

function App() {
  return (
    <div className="App">
      <TransitionWrapper text="Transitions">
        <TransitionEffect />
      </TransitionWrapper>
      <TransitionWrapper text="Transitiuon Groups">
        <TransitionGroupEffect />
      </TransitionWrapper>
    </div>
  );
}

export default App;
