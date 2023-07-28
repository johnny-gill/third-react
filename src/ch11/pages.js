import { Link, Outlet, useLocation } from "react-router-dom";

export const Home = () => (
  <div>
    <h1>[홈페이지]</h1>
    <nav>
      <Link to="about">회사 소개</Link>
      <Link to="events">이벤트</Link>
      <Link to="products">제품</Link>
      <Link to="contact">고객 지원</Link>
    </nav>
  </div>
);

export const About = () => (
  <div>
    <h1>[회사소개]</h1>
    <Outlet />
  </div>
);

export const Events = () => (
  <div>
    <h1>[이벤트]</h1>
  </div>
);

export const Products = () => (
  <div>
    <h1>[제품]</h1>
  </div>
);

export const Contact = () => (
  <div>
    <h1>[고객지원]</h1>
  </div>
);

export const Error = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Resource not founds at {location.pathname}</h1>
    </div>
  );
};

export const Services = () => (
  <section className="services">
    <h2>Our Services</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
      risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
      ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
      tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
  </section>
);

export const Location = () => (
  <section className="location">
    <h2>Our Location</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam.
    </p>
    <p>
      Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
      Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
      ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
      risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
      ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
      tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
  </section>
);
export const Company = () => (
  <section className="company">
    <h2>About the Company</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
      risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
      ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
      tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos.
    </p>
  </section>
);
export const History = () => (
  <section className="history">
    <h2>Our History</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
      nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
      tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
      nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Curabitur sodales ligula in libero.
    </p>
    <p>
      Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
      quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
      tristique sem. Proin ut ligula vel nunc egestas porttitor.
    </p>
    <p>
      {" "}
      Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce
      ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
      ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
      condimentum velit. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos.
    </p>
  </section>
);
