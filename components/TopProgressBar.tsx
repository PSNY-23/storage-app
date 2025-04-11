"use client";

import { Progress } from "@/components/ui/progress";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TopProgressBar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress to 0
    setProgress(0);

    // Animate to 100% over 3s
    const increment = 100 / 10; // update every 100ms
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }
      setProgress(current);
    }, 100);

    return () => clearInterval(interval); // clean up if pathname changes quickly
  }, [pathname]);

  return (
    <div className='absolute top-0 left-0 w-full h-[3px] bg-transparent z-50'>
      <Progress value={progress} className="h-[3px]" />
    </div>
  );
};

export default TopProgressBar;
