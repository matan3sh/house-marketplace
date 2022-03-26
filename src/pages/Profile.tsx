import { useState, useEffect } from "react";
import { getAuth, User } from "firebase/auth";

export function Profile() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : <h1>Not Logged In</h1>;
}
