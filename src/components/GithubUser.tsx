import { User } from "../utils/api";
import CompanyIcon from "./icons/CompanyIcon";
import LocationIcon from "./icons/LocationIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WebsiteIcon from "./icons/WebsiteIcon";

interface GithubUserProps {
  userData: User | null | undefined;
}
const GithubUser = ({ userData }: GithubUserProps) => {
  return (
    <div className=" h-100 flex flex-col justify-around p-5 gap-y-5 bg-pure-white rounded-lg">
      <div className="flex gap-x-5">
        <div className="w-17">
          <img
            className="w-full block rounded-full"
            src={userData?.avatar}
            alt="user_avatar"
          />
        </div>
        <div>
          <h1 className="font-bold text-black">{userData?.name}</h1>
          <p className="text-deep-blue">@{userData?.login}</p>
          <p>Joined {userData?.date_joined}</p>
        </div>
      </div>

      <div>
        <p>{userData?.bio}</p>
      </div>

      <div className="flex justify-around bg-off-white p-5 text-center rounded-lg">
        <div>
          <p>Repos</p>
          <p className="font-bold text-black">{userData?.repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p className="font-bold text-black">{userData?.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className="font-bold text-black">{userData?.following}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:order-1">
        <p className="flex gap-x-4 items-center">
          <LocationIcon />
          {userData?.location}
        </p>

        <p className="flex gap-x-4 items-center md:order-3">
          <WebsiteIcon />
          {userData?.website}
        </p>

        <p className="flex gap-x-4 items-center md:order-2">
          <TwitterIcon />
          {userData?.twitter}
        </p>

        <p className="flex gap-x-4 items-center md:order-4">
          <CompanyIcon />
          {userData?.company}
        </p>
      </div>
    </div>
  );
};
export default GithubUser;
