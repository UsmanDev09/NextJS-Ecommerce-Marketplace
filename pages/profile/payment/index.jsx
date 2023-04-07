import { useSession } from "next-auth/react";
import ProfileSideBar from "../../../components/Profile/ProfileSideBar";
import AddPayment from "../../../components/Profile/AddPayment";

const Addresses = () => {
  return (
    <div className="mx-auto flex md:flex-nowrap flex-wrap  xl:flex-nowrap min-h-[calc(100vh-260px)]">
      <ProfileSideBar />
      <AddPayment />

    </div>
  );
};

export default Addresses;
