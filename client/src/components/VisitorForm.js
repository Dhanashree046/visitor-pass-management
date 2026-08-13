import { useState } from "react";
import axios from "axios";

function VisitorForm({ refresh }) {
 const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  company: "",
  type: "",
  purpose: "",
  date: "",
  department: ""
});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const submit = async (e) => {
  e.preventDefault();

  console.log(form);

  await axios.post(
    "http://localhost:5000/api/visitors",
    form
  );

  setForm({
  name: "",
  phone: "",
  email: "",
  company: "",
  type: "",
  purpose: "",
  date: "",
  department: ""
});
  refresh();
};

  return (
    <form onSubmit={submit}>

      <input
        name="name"
        placeholder="Visitor Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={form.email}
  onChange={handleChange}
/>
      <input
  name="company"
  placeholder="Company Name"
  value={form.company}
  onChange={handleChange}
/>


<select
  name="purpose"
  value={form.purpose}
  onChange={handleChange}
>
  <option value="">Purpose of Visit</option>
  <option>Business Meeting</option>
  <option>Interview</option>
  <option>Product Demo</option>
  <option>Technical Support</option>
  <option>Delivery</option>
  <option>Maintenance</option>
</select>

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <select
  name="department"
  value={form.department}
  onChange={handleChange}
>
  <option value="">Department to Visit</option>
  <option>Software Development</option>
  <option>Human Resources</option>
  <option>Marketing</option>
  <option>Finance</option>
  <option>Administration</option>
  <option>Management</option>
</select>

    <select
  name="type"
  value={form.type}
  onChange={handleChange}
>
  <option value="">Visitor Type</option>
  <option>Client</option>
  <option>Interview Candidate</option>
  <option>Vendor</option>
  <option>Consultant</option>
  <option>Delivery Executive</option>
  <option>Maintenance Staff</option>
</select>

      <button type="submit">Generate Visitor Pass</button>
    </form>
  );
}

export default VisitorForm;