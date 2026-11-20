
import { useParams } from "react-router-dom";
import { people } from "./PeopleLayout.jsx";

export default function PersonDetail() {
  const { id } = useParams();

  const person = people.find(
    (p) => p.id === id
  );

  if (!person) {
    return (
      <div className="not-found">
        <h2>404 - Person Not Found</h2>
        <p>The requested person does not exist.</p>
      </div>
    );
  }

  return (
    <article className="person-details">
      <h2>Person Details</h2>

      <dl>
        <dt>Name:</dt>
        <dd>{person.name}</dd>

        <dt>Role:</dt>
        <dd>{person.role}</dd>

        <dt>ID:</dt>
        <dd>{person.id}</dd>
      </dl>
    </article>
  );
}
