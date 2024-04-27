export interface User {
  login: string;
  date_joined: string;
  name: string;
  avatar: string;
  bio: string;
  repos: number;
  followers: number;
  following: number;
  location: string;
  twitter: string;
  website: string;
  company: string;
}

export const fetchUser = async (username: string): Promise<User | null> => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );

    const data = await response.json();

    if (data.total_count > 0) {
      const user = data.items[0];
      const { login, followers_url, following_url, repos_url, url } = user;

      const [
        followersResponse,
        followingResponse,
        reposResponse,
        profileResponse,
      ] = await Promise.all([
        fetch(followers_url),
        fetch(following_url.replace("{/other_user}", "")),
        fetch(repos_url),
        fetch(url),
      ]);
      const [followersData, followingData, reposData, profileData] =
        await Promise.all([
          followersResponse.json(),
          followingResponse.json(),
          reposResponse.json(),
          profileResponse.json(),
        ]);

      return {
        login,
        name: profileData.name ? profileData.name : profileData.login,
        avatar: profileData.avatar_url,
        followers: followersData.length,
        following: followingData.length,
        repos: reposData.length,
        location: profileData.location ? profileData.location : "Not Available",
        website: profileData.blog ? profileData.blog : "Not Available",
        twitter: profileData.twitter_username
          ? profileData.twitter_username
          : "Not Available",
        company: profileData.company ? profileData.company : "Not Available",
        bio: profileData.bio
          ? profileData.bio
          : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        date_joined: formatDate(profileData.created_at),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};
