import { Spinner } from "@/components/lottie/spinner";
import { useStyle } from "@/hooks/useStyle";

export const HeroTitle: React.FC = () => {
  const style = useStyle();

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex items-start gap-4">
        <p className={`${style.text("hero")} font-bebas`}>I Build</p>
        <Spinner />
      </div>
      <p className={`${style.text("hero")} font-bebas`}>What you See.</p>

      <p className={`${style.text("title")} font-bebas`}>
        <span className="underline underline-offset-6">Kim Jun Hyeon</span>,
        Frontend Engineer
      </p>
    </div>
  );
};
