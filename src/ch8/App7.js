import Fetch from "./Fetch";
import SearchForm from "./SearchForm";
import UserRepositories from "./UserRepositories";

const GitHubUser = ({ login }) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      onSuccess={handleSuccess}
    />
  );
};

const handleSuccess = ({ data }) => {
  return (
    <div className="githubUser">
      <SearchForm />
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} is selected`)}
      />
    </div>
  );
};

const App7 = () => {
  return <GitHubUser login="moonhighway" />;
};

export default App7;
