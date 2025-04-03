import { useStyle } from "@/hooks/useStyle";

export const InfoGraphic: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-around">
      <InfoGraphicItem title="Launched Projects" description="100+" />
      <InfoGraphicItem title="Years of Experience" description="7+" />
      <InfoGraphicItem title="Partners" description="20+" />
      <InfoGraphicItem title="Tech Stack" description="10+" />
    </div>
  );
};

interface InfoGraphicItemProps {
  title: string;
  description: string;
}
const InfoGraphicItem: React.FC<InfoGraphicItemProps> = ({
  title,
  description,
}) => {
  const style = useStyle();
  return (
    <div className="flex flex-col justify-end">
      <p className={`text-gray-500 ${style.text("caption")}`}>{title}</p>
      <p className={`font-bebas font-bold ${style.text("title")} `}>
        {description}
      </p>
    </div>
  );
};
