import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import GithubUser from "./components/GithubUser";
import { User, fetchUser } from "./utils/api";

function App() {
  const [username, setUsername] = useState<string>("octocat");
  const [userData, setUserData] = useState<User | null>();
  const [isNoResults, setIsNoResults] = useState<boolean>(false);

  useEffect(() => {
    const getUserData = async () => {
      setIsNoResults(false);
      const data = await fetchUser(username);
      if (!data) {
        return setIsNoResults(true);
      }
      setUserData(data);
    };

    getUserData();
  }, [username]);
  return (
    <div className="min-h-screen container mx-auto p-8 bg-off-white text-blue-gray flex flex-col gap-y-5">
      <Navbar />
      <Searchbar setUsername={setUsername} isNoResults={isNoResults} />
      <GithubUser userData={userData} />
    </div>
  );
}

export default App;
