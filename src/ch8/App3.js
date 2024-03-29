const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

const List = (data = [], renderItem, renderEmpty) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

const App3 = () => {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>List is empty</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation.toLocaleString()}ft
        </>
      )}
    />
  );
};

export default App3;
