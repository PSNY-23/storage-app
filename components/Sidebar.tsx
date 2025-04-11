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
        <Image
          src='/assets/icons/logo-full-brand.svg'
          alt='logo'
          width={160}
          height={50}
          className='hidden h-auto lg:block'
        />

        <Image src='/assets/icons/logo-brand.svg' alt='logo' width={52} height={52} className='lg:hidden' />
      </Link>
      <SidebarNav />
      <Image src='/assets/images/files-2.png' alt='logo' width={506} height={418} className='w-full' />
      <UserCard fullName={fullName} avatar={avatar} email={email} />
    </aside>
  );
};
export default Sidebar;
