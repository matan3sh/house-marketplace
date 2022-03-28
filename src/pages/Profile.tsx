import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

type FormData = {
  name: string | null | undefined;
  email: string | null | undefined;
};

export function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [formData, setFormData] = useState<FormData>({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">Profile</p>
        <button type="button" onClick={onLogout} className="logOut">
          Logout
        </button>
      </header>
    </div>
  );
}
