import { useParams } from "react-router-dom";
import { getDiploma } from "../api";

export default function Category() {
  const { diplomasId } = useParams();

  const diploma = getDiploma({ id: diplomasId });

  if (!diploma) {
    return <div>Invalid diploma ID</div>;
  }

  return (
    <>
      <h2>{diploma.name} Modules</h2>
      <ul className="session-list">
        {diploma?.modules.map((module, index) => (
          <li className="session" key={index}>
            <p className="session-name">Module Code: {module.moduleCode}</p>
            <p>Lecturer: {module.lecturer}</p>
          </li>
        ))}
      </ul>
    </>
  );
}