import { Link } from "react-router-dom";

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
