import { Player } from "@lottiefiles/react-lottie-player";

export const Spinner: React.FC = () => {
  return (
    <Player
      autoplay
      loop
      src="/spinner.json"
      style={{ width: "100px", height: "100px" }}
      className="dark:invert"
    />
  );
};
