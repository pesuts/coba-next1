import { ProfileProps } from "../../types/profile.type";
import styles from "./Profile.module.scss";

const ProfileView = ({ profile }: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <h1>Profile Page</h1>
      <div className={styles.profile__container}>
        <div className={styles.profile__container__data}>
          {profile?.image && (
            <img
              src={profile?.image}
              alt={profile?.fullName}
              className={styles.profile__container__data__picture}
              width={150}
            />
          )}
          {/* <p>{profile?.image}</p> */}
          <div>Name : {profile?.fullName}</div>
          <div>Email : {profile?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
