import Image from "next/image";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const UserCard = ({ fullName, avatar, email }: Props) => {
  return (
    <div className='sidebar-user-info'>
      <Image src={avatar} alt='Avatar' width={44} height={44} className='sidebar-user-avatar' />
      <div className='hidden lg:block'>
        <p className='subtitle-2 capitalize'>{fullName}</p>
        <p className='caption'>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
