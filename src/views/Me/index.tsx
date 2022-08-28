import axios from "axios";
import { useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";

interface MeProps {}

const Me: FC<MeProps> = ({}) => {
  const [userInfo, setUserInfo] = useState<object | null>(null);
  const { data: session, status } = useSession({ required: true });

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("/api/users/me", {
        headers: { Authorization: `Bearer ${session?.jwt}` },
      });
      setUserInfo(data);
    };
    if (session?.jwt) {
      getUserInfo();
    }
  }, [session]);

  return (
    <main>
      <h1>Me</h1>
      <div className="py-2 bg-green-100">
        <h3>session</h3>
        {JSON.stringify(session)}
      </div>
      <div className="py-2 bg-blue-100">
        <h3>session</h3>
        {JSON.stringify(userInfo)}
      </div>
    </main>
  );
};
export default Me;
