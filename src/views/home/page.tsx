import { Section, ViewContainer } from "@/components/layout/section";
import { LandingView } from "./landing-view";

export const HomePage: React.FC = () => {
  return (
    <section>
      <LandingView />

      <ViewContainer>
        <Section>ddd</Section>
      </ViewContainer>
    </section>
  );
};
