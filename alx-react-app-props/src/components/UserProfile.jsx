import { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  // ✅ استدعاء البيانات من الـ Context بدل props
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
