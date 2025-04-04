import { useStyle } from "@/hooks/useStyle";
import { Player } from "@lottiefiles/react-lottie-player";

export const Spinner: React.FC = () => {
  const size = useStyle().lottie("spinner");
  return (
    <Player
      autoplay
      loop
      src="/spinner.json"
      style={{ width: size, height: size }}
      className="dark:invert"
    />
  );
};
