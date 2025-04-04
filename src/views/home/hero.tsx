import { Spinner } from "@/components/lottie/spinner";
import { useStyle } from "@/hooks/useStyle";
import {
  BlendIcon,
  CommandIcon,
  LucideIcon,
  SquareTerminalIcon,
} from "lucide-react";

export const HeroTitle: React.FC = () => {
  const style = useStyle();

  return (
    <div className="flex h-full flex-col justify-end">
      <div className="flex items-start gap-4">
        <p className={`${style.text("hero")} font-bebas`}>I Build</p>
        <Spinner />
      </div>
      <p className={`${style.text("hero")} font-bebas`}>What you See.</p>
    </div>
  );
};

export const HeroDescriptionName: React.FC = () => {
  const style = useStyle();
  return (
    <div
      className={`flex h-full flex-col items-end justify-between p-2 ${style.text("subtitle")}`}
    >
      <p className={`font-montserrat ${style.text("title")}`}>김준현</p>
      <p
        className={`font-montserrat self-start font-bold ${style.text("title")}`}
      >
        Jun-Hyeon Kim
      </p>
    </div>
  );
};
export const HeroDescriptionRole: React.FC = () => {
  const style = useStyle();
  return (
    <div
      className={`font-bebas flex h-full w-full items-end justify-end p-2 ${style.text("display")}`}
    >
      <div className="flex h-full flex-col items-end justify-between">
        <p className="">FRONT-END</p>
        <div className="space-y-1">
          <HeroRoleContainer
            Icon={CommandIcon}
            role="Engineer >>"
            command="--sref 77421 --stack deepcore --runtime stable --precision 9000 --logic-mode async --compile true --v 6.1 --ar 16:9"
          />
          <HeroRoleContainer
            Icon={SquareTerminalIcon}
            role="<Developer />"
            command="--sref 88913 --framework react19 --language typescript --bundler turbo --package pnpm --bundle split --typed true --v 6.1 --ar 16:9"
          />
          <HeroRoleContainer
            Icon={BlendIcon}
            role="Designer ✦"
            command="--sref 44210 --tool figma --layout grid --framework tailwind --motion enabled --interaction dynamic --aesthetic soft-modern --align precise --v 6.1 --ar 4:5"
          />
        </div>
      </div>
    </div>
  );
};

interface HeroRoleContainerProps {
  Icon: LucideIcon;
  role: string;
  command: string;
}
const HeroRoleContainer: React.FC<HeroRoleContainerProps> = ({
  Icon,
  role,
  command,
}) => {
  const style = useStyle();
  return (
    <div
      className={`font-montserrat flex w-full max-w-[500px] min-w-[280px] cursor-pointer items-start justify-between space-x-2 rounded-md border bg-gray-100/10 p-2 text-left backdrop-blur-sm hover:bg-gray-100/50 ${style.text("caption")}`}
    >
      <div className="flex w-[110px] items-center space-x-1">
        <Icon size={14} />
        <p className="font-gowun">{role}</p>
      </div>
      <p className="font-gowun line-clamp-2 flex-1">{command}</p>
    </div>
  );
};
