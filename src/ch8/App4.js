import { faker } from "@faker-js/faker";

const bigList = [...Array(5000)].map(() => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const List = ({ data = [], renderItem }) => {
  return !data.length ? (
    <p>List is Empty</p>
  ) : (
    data.map((item, i) => renderItem(item, i))
  );
};

const App4 = () => {
  const renderItem = (item, i) => {
    return (
      <div key={i} style={{ display: "flex" }}>
        <img src={item.avatar} alt={item.name} width={50} />
        <p>
          {item.name} - {item.email}
        </p>
      </div>
    );
  };

  return <List data={bigList} renderItem={renderItem} />;
};

export default App4;
