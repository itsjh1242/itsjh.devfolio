import { CountUp } from "@/components/animate/count-up";
import { useStyle } from "@/hooks/useStyle";

export const InfoGraphic: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-between">
      <InfoGraphicItem title="Projects Launched" count={20} duration={3} />
      <InfoGraphicItem title="Years of Experience" count={6} duration={4} />
      <InfoGraphicItem title="Partners" count={10} duration={5} />
      <InfoGraphicItem title="Tech Stack" count={14} duration={6} />
    </div>
  );
};

interface InfoGraphicItemProps {
  title: string;
  count: number;
  duration: number;
}
const InfoGraphicItem: React.FC<InfoGraphicItemProps> = ({
  title,
  count,
  duration,
}) => {
  const style = useStyle();
  return (
    <div className="flex w-full flex-col justify-end">
      <p className={`text-gray-500 ${style.text("caption")}`}>{title}</p>
      <div className="flex items-start">
        <p className={`font-bebas font-bold ${style.text("display")} `}>
          <CountUp targetNumber={count} duration={duration} />
        </p>
        <p className={`${style.text("subtitle")}`}>+</p>
      </div>
    </div>
  );
};
