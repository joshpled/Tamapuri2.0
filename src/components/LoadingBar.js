import React, { useState, useEffect, useRef } from "react";
import { ProgressBar, Container } from "react-bootstrap";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const LoadingBar = () => {
  const [counter, setCounter] = useState(0);

  useInterval(() => {
    setCounter(counter + 10);
  }, 100);

  return (
    <div>
      <Container style={{ maxWidth: "540px" }}>
        <ProgressBar
          animated
          now={counter}
          style={{ marginTop: "50vh" }}
          label={"Loading..."}
        />
      </Container>
    </div>
  );
};
export default LoadingBar;
