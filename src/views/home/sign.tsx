import SignitureImage from "@/assets/sign.png";
import { useStyle } from "@/hooks/useStyle";
export const Sign: React.FC = () => {
  const style = useStyle();
  return (
    <div className="flex h-full w-full flex-col justify-between p-2">
      <div className={`text-gray-500 ${style.text("caption")}`}>
        <p>itsjh — Code Meets Design.</p>
        <p>
          Beyond <ImpactSpan>Code</ImpactSpan>. Into{" "}
          <ImpactSpan>Experience</ImpactSpan>.
        </p>
        <p>
          © Interface Engineered by <ImpactSpan>Jun-Hyeon Kim</ImpactSpan>
        </p>
      </div>
      {/* Sign */}
      <div className="relative flex w-1/2 justify-end self-end">
        <div className="absolute bottom-1/3 -z-10 h-[1px] w-full border-t dark:border-gray-500"></div>
        <img
          src={SignitureImage}
          alt="signiture"
          className="pointer-events-none z-10 h-auto w-[100px] object-contain dark:invert"
        />
      </div>
    </div>
  );
};

interface ImpactSpanProps {
  children?: React.ReactNode;
}
const ImpactSpan: React.FC<ImpactSpanProps> = ({ children }) => {
  return <span className="text-primary font-bold underline">{children}</span>;
};
