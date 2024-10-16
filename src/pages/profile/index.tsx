import ProfileView from "@/views/Profile";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();
  // const { name, email } = data?.user as { name: string, email: string};
  const profile = data?.user as {
    fullName: string;
    email: string;
    image?: string;
  };
  // console.log(profile);
  return <div>{profile && <ProfileView profile={profile} />}</div>;
};

export default ProfilePage;
