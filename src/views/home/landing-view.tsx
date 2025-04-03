import { TypingText } from "@/components/animate/typing-text";
import { ViewContainer } from "@/components/layout/section";
import { useStyle } from "@/hooks/useStyle";
import { cn } from "@/lib/utils";
import { HeroTitle } from "./hero-title";
import { InfoGraphic } from "./info-graphic";

export const LandingView: React.FC = () => {
  const style = useStyle();
  return (
    <ViewContainer className={`grid grid-cols-3 py-12`}>
      {/* first */}
      <GridItem colSpan={2}>
        <HeroTitle />
      </GridItem>
      <GridItem colSpan={1} className="border-r-0"></GridItem>
      {/* second */}
      <GridItem colSpan={1}></GridItem>
      <GridItem colSpan={2} className="border-r-0"></GridItem>
      {/* third */}
      <GridItem colSpan={2} className="border-r-0">
        <div className="grid h-full grid-rows-3">
          <GridItem colSpan={1} className="grid grid-cols-3 border-b-0">
            <GridItem colSpan={1}></GridItem>
            <GridItem
              colSpan={2}
              className="flex items-end justify-end border-r-0 p-2"
            >
              <p className={`font-dancing ${style.text("title")}`}>
                {TypingText({ text: "itsjh.devfolio", duration: 1.5 })}
              </p>
            </GridItem>
          </GridItem>
          <GridItem
            colSpan={1}
            className="grid grid-cols-3 border-r-0 border-b-0"
          >
            <GridItem colSpan={2}></GridItem>
            <GridItem colSpan={1}></GridItem>
          </GridItem>
          <GridItem colSpan={1} className="border-b-0">
            <InfoGraphic />
          </GridItem>
        </div>
      </GridItem>
      <GridItem colSpan={1} className="border-r-0 border-b-0"></GridItem>
    </ViewContainer>
  );
};

interface GridItemProps {
  children?: React.ReactNode;
  className?: string;
  colSpan: number;
}
const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  colSpan,
}) => {
  return (
    <div
      className={cn(
        `border border-t-0 border-l-0 border-gray-300 col-span-${colSpan}`,
        className,
      )}
    >
      {children}
    </div>
  );
};
