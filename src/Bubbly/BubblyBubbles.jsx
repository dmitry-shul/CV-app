import "./styles.css";

export const BubblyBubbles = ({
  side,
  colorStart,
  colorEnd,
  duration,
}) => {
  return (
    <div id="react-bubbly-transitions__bubbles">
      <div
        style={{ animationDuration: `${duration}ms`, background: colorStart }}
        className={side === "left" ? "react-bubbly-transitions__first" : "react-bubbly-transitions__first_right"}
      />
      <div
        style={{ animationDuration: `${duration}ms`, background: colorEnd }}
        className={side === "left" ? "react-bubbly-transitions__second" : "react-bubbly-transitions__second_right"}
      />
    </div>
  );
};
