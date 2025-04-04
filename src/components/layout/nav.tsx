import LOGO_B from "@/assets/logo-b.png";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export const Nav: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // 최상단 여부
      const atTop = currentY <= 50;
      setIsTop(atTop);

      // 방향 감지
      if (!atTop) {
        if (currentY > prevScrollY.current) {
          setVisible(false); // 아래로 스크롤 중
        } else {
          setVisible(true); // 위로 스크롤 중
        }
      } else {
        setVisible(true); // top일 땐 항상 보이기
      }

      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isTop ? "bg-transparent" : "bg-background border-b"}`}
    >
      <nav
        className={`m-auto flex h-[70px] w-full max-w-[1920px] items-center justify-between px-8`}
      >
        {/* Logo */}
        <div className="flex w-[200px] items-center justify-start">
          <img
            src={LOGO_B}
            alt="logo-black"
            className="h-auto w-[100px] object-cover dark:invert"
          />
        </div>
        {/* Navigation */}
        <div className="flex flex-1 items-center justify-center space-x-10">
          <p>Projects</p>
          <p>Playground</p>
          <p>Insights</p>
          <p>About</p>
        </div>
        {/* Action Menu */}
        <div className="flex w-[200px] items-center justify-end space-x-4">
          <Button
            className="flex items-center justify-center rounded-full"
            variant="outline"
          >
            <p>Contact</p>
            <ChevronRightIcon size={16} />
          </Button>
        </div>
      </nav>
    </div>
  );
};
