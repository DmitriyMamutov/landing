import { useRef } from "react";
import Header from "components/Header";
import Hero from "./components/Hero";
import Clario from "./components/Clario";
import Problem from "./components/Problem";
import Steps from "./components/Steps";
import Start from "./components/Start";
import Protect from "./components/Protect";
import Lets from "./components/Lets";
import Stop from "./components/Stop";
import Footer from "components/Footer";
import useIsVisible from "hooks/useIsVisible";

import styles from "./styles.module.scss";

const Home = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div className={styles["home"]}>
      <Header isVisible={isVisible} />
      <Hero refProp={ref} />
      <Clario />
      <Problem />
      <Steps />
      <Start />
      <Protect />
      <Lets />
      <Stop />
      <Footer />
    </div>
  );
};

export default Home;
