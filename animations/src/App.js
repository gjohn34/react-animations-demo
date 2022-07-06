import { Transition } from 'react-transition-group';
import React, { useState } from "react";
import TransitionEffect from './components/Transition';
import TransitionGroupEffect from './components/TransitionGroupEffect';

function TransitionWrapper({ text, child }) {
  const [state, setState] = useState(false)
  return <>
    <h2>{text}</h2>
    {React.createElement(child, { inProp: state, style: { backgroundColor: 'red' } })}
    <button onClick={() => setState(!state)}>{state ? "Hide" : "Show"}</button>
  </>
}

function App() {
  const [showTransition, setShowTransition] = useState(false)
  const [showTransitionGroup, setShowTransitionGroup] = useState(false)

  return (
    <div className="App">
      <TransitionWrapper text="Transitions" child={
        TransitionEffect
      } />
      <TransitionWrapper text="Transitiuon Groups" child={
        TransitionGroupEffect
      } />
    </div>
  );
}

export default App;
