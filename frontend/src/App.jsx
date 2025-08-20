import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [quote, setQuote] = useState("Click button to get a random quote!");
  const [loading, setLoading] = useState(false);

  const API_BASE = "http://127.0.0.1:5000";

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/quote`);
      const data = await response.json();
      setQuote(data.quote);
    } catch (err) {
      setQuote("Error fetching quote. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-3"> Random Quote Generator</h3>
        <div className="card-body text-center">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <p className="card-text fs-5">"{quote}"</p>
          )}
          <button
            className="btn btn-primary mt-3"
            onClick={fetchQuote}
            disabled={loading}
          >
            {loading ? "Fetching..." : "Get New Quote"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
