const Instructions = ({ title, steps }) => {
  return (
    <section>
      <h2>{title}</h2>
      {steps.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );
};

export default Instructions;
