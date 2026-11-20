
import { NavLink, Outlet } from "react-router-dom";

export const people = [
  {
    id: "1",
    name: "Ada Lovelace",
    role: "Mathematician"
  },
  {
    id: "2",
    name: "Alan Turing",
    role: "Computer Scientist"
  },
  {
    id: "3",
    name: "Grace Hopper",
    role: "Computer Scientist"
  }
];

export default function PeopleLayout() {
  return (
    <section>
      <h1>People Directory</h1>
      <p>Select a person to view their details.</p>

      <div className="master-detail">
        <aside className="people-list">
          <h2>People List</h2>

          <nav aria-label="People navigation">
            {people.map((person) => (
              <NavLink
                key={person.id}
                to={`/people/${person.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "person-link selected"
                    : "person-link"
                }
              >
                {person.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="details-panel">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
