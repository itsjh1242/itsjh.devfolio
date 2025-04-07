import SignitureImage from "@/assets/sign.png";
import { useStyle } from "@/hooks/useStyle";

export const Footer: React.FC = () => {
  const style = useStyle();
  return (
    <div
      className={`font-ibm flex border border-x-0 border-b-0 leading-tight ${style.padding("compact")} ${style.text("caption")}`}
    >
      <div className="flex w-full flex-col">
        <p className="text-gray-400">© 2025</p>
        <img
          src={SignitureImage}
          alt="signiture"
          className="pointer-events-none z-10 h-auto w-[60px] object-contain dark:invert"
        />
      </div>
      <div className="flex w-full flex-col">
        <p className="text-gray-400">Designed by</p>
        <p>Jun-Hyeon Kim</p>
      </div>
    </div>
  );
};
