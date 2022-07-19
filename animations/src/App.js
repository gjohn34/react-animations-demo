import { SwitchTransition, Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useState } from "react";
import TransitionEffect from './components/Transition';
import TransitionGroupEffect from './components/TransitionGroupEffect';
import InsertBetween from './components/InsertBetween';
import ColorChange from './components/ColourChange';
import ScrollBy from './components/ScrollBy';
import Switching from './components/Switching';
import { BrowserRouter, Link, Routes, Route, useParams, useLocation, useResolvedPath, useNavigate } from 'react-router-dom';
import './components/kill-me.css'



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

const AnimatedSwitch = () => {
  const location = useLocation();

  const [transitionName, setTransitionName] = useState("next");

  /*
  useEffect(() => {
    if (transitionName === "next") setTransitionName("prev");
    if (transitionName === "prev") setTransitionName("next");
  }, [location]);
  */
  const defaultStyle = {
    transition: `transform 300ms, opacity 300ms`,
    position: 'relative'
  }

  const transitionStyles = {
    entering: { opacity: 0, transform: 'translateX(-100%)' },
    entered: { opacity: 1, transform: 'translateX(0)' },
    exiting: { opacity: 1, transform: 'translateX(100%)' },
    exited: { opacity: 0, transform: 'translateX(100%))' },
  };

  return (
    <TransitionGroup component={null}>
      <Transition
        key={location.pathname}
        timeout={300}
      >
        {state => (
          <Routes location={location}>
            <Route path="/first" element={<h2 style={{ ...defaultStyle, ...transitionStyles[state] }}>kill me son</h2>} exact />
            <Route path="/second" element={<h2 style={{ ...defaultStyle, ...transitionStyles[state] }}>sure thing pops</h2>} />
          </Routes>
        )}
      </Transition>
    </TransitionGroup>
  );
};

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <Link to="/first">Page 1</Link>
          <Link to="/second">Page 2</Link>
        </nav>
        <AnimatedSwitch />
      </BrowserRouter>
      <TransitionWrapper text="Transitions">
        <TransitionEffect />
      </TransitionWrapper>
      <TransitionWrapper text="Transition Groups">
        <TransitionGroupEffect />
      </TransitionWrapper>
      <TransitionWrapper text="Insert Between">
        <InsertBetween />
      </TransitionWrapper>
      <TransitionWrapper text="Colour Change">
        <ColorChange />
      </TransitionWrapper>
      <TransitionWrapper text="Scroll Down">
        <ScrollBy />
      </TransitionWrapper>
      <TransitionWrapper text="switch">
        <Switching />
      </TransitionWrapper>
    </div >
  );
}

export default App;
