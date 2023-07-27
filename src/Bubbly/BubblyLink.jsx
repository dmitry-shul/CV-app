import { createRoot } from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BubblyBubbles } from "./BubblyBubbles";

export const BubblyLink = ({
  to,
  children,
  colorStart = "#8f44fd",
  colorEnd = "#0f0f0f",
  duration = 1200,
  side
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e?.preventDefault();

    if (
      !document.getElementById("react-bubbly-transitions__bubbles") &&
      window.location.pathname !== to
    ) {
      // change the url in address bar
      window.history.pushState("", "", to);

      // get access to wave container
      const container = createRoot(
        document.getElementById("react-bubbly-transitions__container")
      );

      // show the waves
      container.render(
        <BubblyBubbles
          side={side}
          colorStart={colorStart}
          colorEnd={colorEnd}
          duration={duration}
        />
      );

      // do the route change
      setTimeout(() => navigate(to), duration / 2); // half total animation

      // hide the waves
      setTimeout(() => container.unmount(), duration); // total animation
    }
  };

  return (
    <button
      type="button"
      className={`react-bubbly-transitions__bubbly-link`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
