import Link from "next/link";
import Image from "next/image";
import UserCard from "./UserCard";
import SidebarNav from "./SidebarNav";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  return (
    <aside className='sidebar'>
      <Link href='/'>
        <span className='text-3xl ml-7 font-bold text-dark-100 px-6 py-2 rounded-full ring-4 ring-brand shadow-md hover:shadow-lg hover:scale-105 transition-all duration-3000 ease-in-out animate-pulse'>
          ShareIt 🚀
        </span>
      </Link>
      <SidebarNav />
      <Image src='/assets/images/files-2.png' alt='logo' width={506} height={418} className='w-full' />
      <UserCard fullName={fullName} avatar={avatar} email={email} />
    </aside>
  );
};
export default Sidebar;
