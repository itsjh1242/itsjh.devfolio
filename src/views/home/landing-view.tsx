import { ViewContainer } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { HardwareInfo } from "./hardware-info";
import { HeroDescriptionName, HeroDescriptionRole, HeroTitle } from "./hero";
import { InfoGraphic } from "./info-graphic";
import { Sign } from "./sign";
import { ThemeMode } from "./theme-mode";

export const LandingView: React.FC = () => {
  return (
    <ViewContainer className={`grid grid-cols-3 py-12`}>
      {/* first */}
      <GridItem className="col-span-2 border-0">
        <HeroTitle />
      </GridItem>
      <GridItem className="col-span-1 border-0 border-l-1"></GridItem>

      {/* second */}
      <GridItem className="col-span-1 border-0 border-t-1">
        <HeroDescriptionName />
      </GridItem>
      <GridItem className="col-span-2 border-r-0 border-b-0">
        <HeroDescriptionRole />
      </GridItem>

      {/* third */}
      <GridItem className="col-span-2 grid h-full grid-rows-3 border-0">
        <GridItem className="col-span-1 grid grid-cols-3 border-0 border-t-1">
          <GridItem className="col-span-1 border-0"></GridItem>
          <GridItem className="col-span-2 border-0 border-r-1 border-l-1">
            <HardwareInfo />
          </GridItem>
        </GridItem>
        <GridItem className="col-span-1 grid grid-cols-3 border-0">
          <GridItem className="col-span-2 border-0 border-t-1 border-r-0"></GridItem>
          <GridItem className="col-span-1 border-b-0">
            <ThemeMode />
          </GridItem>
        </GridItem>
        <GridItem className="col-span-1 border-t-1 border-b-0 border-l-0"></GridItem>
      </GridItem>
      <GridItem className="col-span-1 border-0 border-t-1">
        <Sign />
      </GridItem>
      {/* foutrh */}
      <GridItem className="col-span-3 border-r-0 border-l-0">
        <InfoGraphic />
      </GridItem>
    </ViewContainer>
  );
};

interface GridItemProps {
  children?: React.ReactNode;
  className?: string;
}
const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
  return (
    <div className={cn(`border border-gray-300`, className)}>{children}</div>
  );
};
