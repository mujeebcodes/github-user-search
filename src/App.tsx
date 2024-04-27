import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import GithubUser from "./components/GithubUser";
import { User, fetchUser } from "./utils/api";

function App() {
  const [username, setUsername] = useState<string>("octocat");
  const [userData, setUserData] = useState<User | null>();

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUser(username);
      console.log(data);
      setUserData(data);
    };

    getUserData();
  }, []);
  return (
    <div className="min-h-screen container mx-auto p-8 bg-off-white flex flex-col gap-y-5">
      <Navbar />
      <Searchbar />
      <GithubUser />
    </div>
  );
}

export default App;
