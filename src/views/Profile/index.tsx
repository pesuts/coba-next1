import { ProfileProps } from "../../types/profile.type";
import styles from "./Profile.module.scss";

const ProfileView = ({ profile }: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <h1>Profile Page</h1>
      <div className={styles.profile__container}>
        <div className={styles.profile__container__data}>
        <div>Name : {profile?.fullName}</div>
        <div>Email : {profile?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
