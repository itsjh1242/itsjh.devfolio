import { useStyle } from "@/hooks/useStyle";
import { getOS } from "@/lib/getOS";
import {
  MonitorCogIcon,
  ProportionsIcon,
  SlashIcon,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export const HardwareInfo: React.FC = () => {
  const style = useStyle();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex h-full w-full items-end justify-end p-2 text-gray-500 ${style.text("caption")}`}
    >
      <div>
        {/* OS */}
        <div className={`flex items-center`}>
          <MonitorCogIcon size={16} className="mr-1" />
          <p>{getOS()}</p>
        </div>

        {/* Screen Size */}
        <div className={`flex items-center`}>
          <ProportionsIcon size={16} className="mr-1" />
          <p>{size.width}</p>
          <XIcon size={10} />
          <p>{size.height}</p>
          <SlashIcon size={10} className="mx-1" />
          <p>px</p>
        </div>
      </div>
    </div>
  );
};
