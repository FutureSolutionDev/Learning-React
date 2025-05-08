import { memo } from "react";

function About() {
  return (
    <div>
      <h1>About Page </h1>
      <header>Page Header</header>
      <section>Page Body</section>
      <footer>page Footer</footer>
    </div>
  );
}
export default memo(About);
