import useCountdown from "../../hooks/useCountdown";
import SectionWrapper from "../../components/ui/SectionWrapper";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function LockedScreen() {
  const { currentAct, dispatch } = useContext(AppContext);
  const timeLeft = useCountdown(new Date("2026-12-25"));
  return (
    <SectionWrapper>
      <Card>
        <h1>Locked Screen</h1>
        <p>
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
          minutes, {timeLeft.seconds} seconds
        </p>
        <Button onClick={() => dispatch({ type: "UNLOCK" })}>Unlock</Button>
      </Card>
    </SectionWrapper>
  );
}

export default LockedScreen;
