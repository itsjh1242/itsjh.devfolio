import REDDOT from "@/assets/reddot-logo.png";

export const Display: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-end justify-end p-2">
      <img
        src={REDDOT}
        alt="Reddot_logo_fallback"
        className="h-[48px] w-auto object-cover"
      />
    </div>
  );
};
