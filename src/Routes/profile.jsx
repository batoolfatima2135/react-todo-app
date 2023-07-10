import { useAuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <div className="container p-5">
      <h2>
        Hello,
        {user}
      </h2>
    </div>
  );
};
export default Profile;
