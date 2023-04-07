import { useSession } from "next-auth/react";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";
import AccountInfo from "../../components/Profile/AccountInfo";
import Footer from '../../components/Footer/Footer'
const Profile = () => {
  return (
    <div className="padding h-auto flex md:flex-nowrap flex-wrap">
      <ProfileSideBar />
      <AccountInfo />

    </div>

  );
};

export default Profile;
