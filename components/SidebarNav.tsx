"use client";

import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav className='sidebar-nav'>
      <ul className='flex flex-1 flex-col gap-4'>
        {navItems.map(({ url, name, icon }) => (
          <Link key={name} href={url} className='lg:w-full'>
            <li
              className={cn(
                "sidebar-nav-item flex items-center gap-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:ring-2 ring-gray-300  hover:scale-[1.02]",
                pathname === url && " text-slate-100 shadow-lg ring-2"
              )}
            >
              <Image
                src={icon}
                alt={name}
                width={16}
                height={16}
                className={cn(
                  "nav-icon transition-transform duration-300",
                  pathname === url && "scale-110 brightness-125 "
                )}
              />
              <p className='hidden lg:block transition-colors duration-300'>{name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
