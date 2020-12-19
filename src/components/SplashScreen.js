import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../images/Logo.png";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "../styles/canvas.css";

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

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(true)

  const defaultState = {
    opacity: 0
  };

  useInterval(() => {
    setLoading(false);
  }, 3000);

  useInterval(() => {
    setDone(!done);
  }, 2500);


  if (loading) {
  return (
    <div>
    <AnimatePresence>

    {done && (
      <motion.div
      initial={defaultState}
      exit={defaultState}
      animate={{
              opacity: 1
            }}
      >
        <Container
          style={{
            maxWidth: "540px",
            borderStyle: "ridge",
            borderWidth: "3px",
          }}
          id="canvasSetting"
        >
          <img
            alt="logo"
            className="img-fluid"
            src={Logo}
            style={{ margin: "auto", verticalAlign: "baseline" }}
          ></img>
        </Container>
      </motion.div>)}
      </AnimatePresence>
    </div>
  );
   }
   else {
    return <Redirect to="/name" />;
  }
};
export default SplashScreen;
