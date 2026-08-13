import VisitorForm from "./VisitorForm";
import VisitorList from "./VisitorList";

function Dashboard() {
  return (
    <div>
      <h1>Visitor Pass Management System</h1>

      <VisitorForm />

      <hr />

      <VisitorList />
    </div>
  );
}

export default Dashboard;