import "./App.css";
import VisitorForm from "./components/VisitorForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

function App() {
  const [latestVisitor, setLatestVisitor] = useState(null);
  const [visitors, setVisitors] = useState([]);

  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchVisitors = async () => {
    const res = await axios.get(
  "https://visitor-pass-management-yx58.onrender.com/api/visitors"
);

    setVisitors(res.data);

    if (res.data.length > 0) {
      setLatestVisitor(
        res.data[res.data.length - 1]
      );
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const adminLogin = () => {
    if (
      username === "admin" &&
      password === "admin123"
    ) {
      setIsAdmin(true);
      setShowLogin(false);

      setTimeout(() => {
        document
          .getElementById("history")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 200);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
  <div>


{/* NAVBAR */}
<header className="navbar">

  {/* LEFT SIDE - LOGO */}
  <div className="logo">

    <div className="logo-icon">
      🏢
    </div>

    <div className="logo-text">
      <h2>TechGate</h2>
      <span>IT Company Visitor Management</span>
    </div>

  </div>

  {/* RIGHT SIDE - NAV LINKS */}
  <nav className="nav-links">

    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#form">Register</a>
    <a href="#gallery">Gallery</a>

    {isAdmin && <a href="#history">History</a>}

    {isAdmin ? (
      <button
        className="admin-btn"
        onClick={() => setIsAdmin(false)}
      >
        Logout
      </button>
    ) : (
      <button
        className="admin-btn"
        onClick={() => setShowLogin(true)}
      >
        Admin Login
      </button>
    )}

  </nav>

</header>
      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
Welcome to TechGate
</h1>
          <p>
Simplify visitor registration with secure QR-based access,
real-time monitoring and digital visitor records.
</p>

      <div className="hero-buttons">

  <a href="#form" className="primary-btn">
    Register Visitor
  </a>

  <a href="#services" className="secondary-btn">
    Learn More
  </a>

</div>
        </div>
      </section>

      {/* WHY TECHGATE */}
<section className="services" id="services">

  <h2>Why Choose TechGate?</h2>

  <p className="service-subtitle">
    A modern visitor management platform designed for IT companies to
    streamline visitor registration and enhance workplace security.
  </p>

  <div className="service-container">

    <div className="service-card">
      <div className="icon">🔒</div>
      <h3>Secure Entry</h3>
      <p>
        Every visitor is digitally verified before entering the office.
      </p>
    </div>

    <div className="service-card">
      <div className="icon">⚡</div>
      <h3>Fast Registration</h3>
      <p>
        Register visitors within seconds using an easy online form.
      </p>
    </div>

    <div className="service-card">
      <div className="icon">📱</div>
      <h3>QR Verification</h3>
      <p>
        Instantly generate QR-based visitor passes for secure access.
      </p>
    </div>

    <div className="service-card">
      <div className="icon">📊</div>
      <h3>Digital Records</h3>
      <p>
        Maintain complete visitor history for security and auditing.
      </p>
    </div>

  </div>

</section>



      {/* FORM */}
      <section id="form" className="section">
        <h2>Visitor Registration</h2>

        <div className="card">
          <VisitorForm refresh={fetchVisitors} />
        </div>
      </section>

      {/* QR SECTION */}
          <section className="qr-section">

  <h2>Digital Visitor Pass</h2>

  <p className="qr-subtitle">
    Present this QR pass at the reception for secure entry.
  </p>

  {latestVisitor ? (

    <div className="visitor-pass">

      <div className="pass-header">
        <h3>🏢 TechGate</h3>
        <span>Visitor Pass</span>
      </div>

      <div className="pass-body">

        <div className="pass-details">

          <h2>{latestVisitor.name}</h2>

          <p><strong>Phone:</strong> {latestVisitor.phone}</p>

          <p><strong>Purpose:</strong> {latestVisitor.purpose}</p>

          <p><strong>Date:</strong> {latestVisitor.date}</p>

          <p><strong>Visitor Type:</strong> {latestVisitor.type}</p> 

          <p><strong>Company:</strong> {latestVisitor.company}</p>

<p><strong>Email:</strong> {latestVisitor.email}</p>

<p><strong>Department:</strong> {latestVisitor.department}</p> 
        </div>

        <div className="pass-qr">

          <QRCodeCanvas
            value={
              latestVisitor.name +
              "|" +
              latestVisitor.phone +
              "|" +
              latestVisitor.purpose +
              "|" +
              latestVisitor.date +
              "|" +
              latestVisitor.state
            }
            size={170}
          />

        </div>

      </div>

      <div className="pass-footer">

        <small>
          Valid only for the selected visit date.
        </small>

      </div>

    </div>

  ) : (

    <div className="empty-pass">

      <h3>No Visitor Pass Generated</h3>

      <p>
        Register a visitor to generate a secure QR pass.
      </p>

    </div>

  )}

</section>


{/* OFFICE GALLERY */}
<section className="gallery-section" id="gallery">

  <h2>Office Gallery</h2>

  <p className="gallery-subtitle">
    Explore our modern workplace designed for innovation,
    collaboration, and secure visitor experiences.
  </p>

  <div className="gallery">

    <div className="gallery-card">
      <img src="r.jfif" alt="Reception" />
      <h3>Reception Area</h3>
    </div>

    <div className="gallery-card">
      <img src="w.jfif" alt="Workspace" />
      <h3>Workspace</h3>
    </div>

    <div className="gallery-card">
      <img src="m.jfif" alt="Meeting Room" />
      <h3>Meeting Room</h3>
    </div>

    <div className="gallery-card">
      <img src="e.jfif" alt="Meeting Room" />
      <h3>Employee Collaboration Zone</h3>
    </div><div className="gallery-card">
      <img src="t.jfif" alt="Meeting Room" />
      <h3>Breakout & Cafeteria</h3>
    </div><div className="gallery-card">
      <img src="d.jfif" alt="Meeting Room" />
      <h3>Check-in Desk</h3>
    </div>
  </div>

</section>

      {/* HISTORY */}
      {isAdmin && (
        <section
          id="history"
          className="section"
        >
          <h2>Visitor History</h2>

          <div className="history-grid">
            {visitors.length === 0 ? (
              <p>No visitors found</p>
            ) : (
              visitors.map((v, i) => (
                <div
                  className="history-card"
                  key={i}
                >
                  <h3>{v.name}</h3>

                  <p>📞 {v.phone}</p>

                  <p>🎯 {v.purpose}</p>

                  <p>📅 {v.date}</p>

                 <p>🏢 {v.company}</p>


<p>👤 {v.type}</p>

<p>🏬 {v.department}</p>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* POPUP LOGIN */}
      {showLogin && (
        <div className="popup">
          <div className="popup-box">
            <h2>Admin Login</h2>

            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button onClick={adminLogin}>
              Login
            </button>

            <button
              className="close-btn"
              onClick={() =>
                setShowLogin(false)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}



  

      {/* FOOTER */}
      <footer className="footer">
        <h3>
🏢 TechGate Pvt. Ltd.
</h3>
<p>
Secure • Smart • Digital Visitor Management
</p>

        🏢 TechGate
      </footer>
    </div>
  );
}

export default App;