
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="card">
      <h1>People Directory</h1>
      <p>Welcome to Lab 4 - Multi-Route React App.</p>
      <Link to="/people/1" className="button">
        View Person Details
      </Link>
    </section>
  );
}
