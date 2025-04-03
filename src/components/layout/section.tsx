import { useStyle } from "@/hooks/useStyle";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
export const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        `m-auto h-full min-h-screen w-full max-w-[1920px]`,
        className,
      )}
    >
      {children}
    </section>
  );
};

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  className,
}) => {
  const style = useStyle();
  return (
    <Section
      className={cn(
        `relative h-full min-h-screen w-full ${style.padding("section")}`,
        className,
      )}
    >
      {children}
    </Section>
  );
};
