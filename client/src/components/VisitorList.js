import { useEffect, useState } from "react";
import axios from "axios";

function VisitorList() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/visitors"
    );

    setVisitors(res.data);
  };

  return (
    <div>
      <h2>Visitor List</h2>

      {visitors.map((visitor) => (
        <p key={visitor._id}>
          {visitor.name}
        </p>
      ))}
    </div>
  );
}

export default VisitorList;