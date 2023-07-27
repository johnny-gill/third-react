import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

const UserRepositories = ({ login, onSelect }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      onSuccess={({ data }) => (
        <RepoMenu repositories={data} onSelect={onSelect} />
      )}
    />
  );
};

export default UserRepositories;
