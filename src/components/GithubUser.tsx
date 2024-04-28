import { User } from "../utils/api";
import CompanyIcon from "./icons/CompanyIcon";
import LocationIcon from "./icons/LocationIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WebsiteIcon from "./icons/WebsiteIcon";

interface GithubUserProps {
  userData: User | null | undefined;
  isDarkMode: boolean;
}
const GithubUser = ({ userData, isDarkMode }: GithubUserProps) => {
  return (
    <div className="h-100 rounded-lg relative bg-pure-white dark:bg-shaded-dark-blue lg:flex lg:justify-end">
      <div className="dark:text-white flex flex-col justify-around p-5 gap-y-5 lg:gap-y-2  lg:w-4/5">
        <div className="flex gap-x-5 ">
          <div className="w-17 lg:absolute lg:left-10  lg:w-28">
            <img
              className="w-full block rounded-full"
              src={userData?.avatar}
              alt="user_avatar"
            />
          </div>
          <div>
            <h1 className="font-bold text-black dark:text-white">
              {userData?.name}
            </h1>
            <p className="text-deep-blue">@{userData?.login}</p>
            <p>Joined {userData?.date_joined}</p>
          </div>
        </div>

        <div>
          <p>{userData?.bio}</p>
        </div>

        <div className="flex justify-around bg-off-white dark:bg-navy-blue p-5 text-center rounded-lg">
          <div>
            <p>Repos</p>
            <p className="font-bold text-black dark:text-white">
              {userData?.repos}
            </p>
          </div>
          <div>
            <p>Followers</p>
            <p className="font-bold text-black  dark:text-white">
              {userData?.followers}
            </p>
          </div>
          <div>
            <p>Following</p>
            <p className="font-bold text-black  dark:text-white">
              {userData?.following}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:order-1">
          <p className="flex gap-x-4 items-center">
            <LocationIcon isDarkMode={isDarkMode} />
            {userData?.location}
          </p>

          <a
            href={userData?.website}
            className={`flex gap-x-4 items-center md:order-3 ${
              userData?.website === "Not Available"
                ? "opacity-20"
                : "hover:underline"
            }`}
          >
            <WebsiteIcon isDarkMode={isDarkMode} />
            {userData?.website}
          </a>

          <a
            href={userData?.twitter}
            className={`flex gap-x-4 items-center md:order-2 ${
              userData?.twitter === "Not Available"
                ? "opacity-20"
                : "hover:underline"
            }`}
          >
            <TwitterIcon isDarkMode={isDarkMode} />
            {userData?.twitter}
          </a>

          <a
            href={userData?.company}
            className={`flex gap-x-4 items-center md:order-4 ${
              userData?.company === "Not Available"
                ? "opacity-20"
                : "hover:underline"
            }`}
          >
            <CompanyIcon isDarkMode={isDarkMode} />
            {userData?.company}
          </a>
        </div>
      </div>
    </div>
  );
};
export default GithubUser;
