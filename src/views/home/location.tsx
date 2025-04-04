import { useStyle } from "@/hooks/useStyle";

export const Location: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-end justify-end gap-1 p-2">
      <LocationContainer
        variable="const"
        caption="hometown"
        location="Busan, South Korea"
      />
      <LocationContainer
        variable="const"
        caption="now"
        location="Daejeon, South Korea"
      />
    </div>
  );
};

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
  return (
    <div
      className={`w-fit rounded-md bg-[#1e1e1e] p-2 font-mono ${style.text("caption")}`}
    >
      <div className="flex items-end space-x-2">
        <p className="text-blue-400">{variable}</p>
        <p className="text-gray-400">{caption} = </p>
        <p className="text-yellow-300">
          "{location}"<span className="text-gray-400">;</span>
        </p>
      </div>
    </div>
  );
};
