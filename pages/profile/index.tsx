import { useSession } from "next-auth/react";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";
import AccountInfo from "../../components/Profile/AccountInfo";

const Profile = () => {
  const session = useSession();
  return (
    <div className="mx-auto mt-0 md:pl-16 sm:pl-8 xs:flex xs:flex-col xs:flex-wrap md:flex-row  xl:flex-nowrap min-h-[calc(100vh-260px)]">
      <ProfileSideBar />
      <AccountInfo />
    </div>
  );
};

export default Profile;
