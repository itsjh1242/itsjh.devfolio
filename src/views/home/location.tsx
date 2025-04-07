import { Button } from "@/components/ui/button";
import { useStyle } from "@/hooks/useStyle";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

interface LocationProps {
  variable: string;
  caption: string;
  location: string;
}
const HOMETOWN = {
  variable: "const",
  caption: "root",
  location: `"Busan, South Korea"`,
};
const NOW = {
  variable: "let",
  caption: "now",
  location: `"Daejeon, South Korea"`,
};

export const Location: React.FC = () => {
  const [location, setLocation] = useState<LocationProps>(HOMETOWN);

  const toggleLocation = (location: LocationProps) => {
    setLocation(location);
  };

  return (
    <div className="flex h-full w-full flex-wrap items-end justify-between">
      <LocationContainer
        variable={location.variable}
        caption={location.caption}
        location={location.location}
      />
      <div className="flex w-full items-end justify-end gap-2 pr-2">
        <Button
          variant="link"
          className={`p-0 ${location === HOMETOWN ? "font-bold text-blue-400" : "text-gray-400"}`}
          onClick={() => toggleLocation(HOMETOWN)}
        >
          Root
        </Button>
        <Button
          variant="link"
          className={`p-0 ${location === NOW ? "font-bold text-blue-400" : "text-gray-400"}`}
          onClick={() => toggleLocation(NOW)}
        >
          Now
        </Button>
      </div>
    </div>
  );
};

interface LocationContainerProps {
  variable: string;
  caption: string;
  location: string;
}

interface LocationContainerProps {
  variable: string;
  caption: string;
  location: string;
}

const LocationContainer: React.FC<LocationContainerProps> = ({
  variable,
  caption,
  location,
}) => {
  const style = useStyle();
  const key = `${variable}-${caption}-${location}`; // 매번 바뀌면 애니메이션 재실행됨

  return (
    <div className={`w-full font-mono ${style.text("caption")}`}>
      <div className="flex flex-wrap items-center justify-start space-x-2 text-sm">
        <p className="text-blue-400">{variable}</p>
        <p className="text-gray-400">{caption} = </p>
        <p className="text-yellow-300">
          <Typewriter
            key={key}
            words={[location]}
            cursor={true}
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#d3d3d3"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
          <span className="text-gray-400"></span>
        </p>
      </div>
    </div>
  );
};
