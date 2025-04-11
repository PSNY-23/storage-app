'use client'

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
            <li className={cn("sidebar-nav-item", pathname === url && "shad-active")}>
              <Image
                src={icon}
                alt={name}
                width={16}
                height={16}
                className={cn("nav-icon", pathname === url && "nav-icon-active")}
              />
              <p className='hidden lg:block'>{name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
