import { faker } from "@faker-js/faker";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const App5 = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, display: "flex" }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};

export default App5;
