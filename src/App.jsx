import React, { useEffect, useState } from "react";
import Filter from "../src/components/Filter";
import "./App.css";

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      <div className="job-card">
        <div className="logoContaie">
          <div className="logoBox">
            <img src={job.logoUrl} alt="" />
          </div>
          <div className="logoContent">
            <h3>{job.companyName}</h3>
            <span>{job.jobRole}</span>
            <p>{job.location}</p>
          </div>
        </div>
        <div className="expSal">
          <p>
            {`Estimated Salary: ₹ ${
              job.minJdSalary === null ? "" : job.minJdSalary
            } ${job.minJdSalary === null ? "" : "-"} ${job.maxJdSalary} LPA`}
          </p>
          <span aria-label="Offered salary range" class="">
            {" "}
            ✅
          </span>
        </div>
        <div className="aboutComp">
          <p>About Company</p>
          <span>About Us</span>
        </div>
        <p className={`mainDesc ${expanded ? "expanded" : ""}`}>
          {expanded
            ? job.jobDetailsFromCompany
            : job.jobDetailsFromCompany.substring(0, 100) +
              (job.jobDetailsFromCompany.length > 100 ? "..." : "")}
        </p>
        {job.jobDetailsFromCompany.length > 100 && (
          <div className="controlButton">
            <span onClick={() => setExpanded(!expanded)}>
              {expanded ? "Collapse  ↑" : "Expand  ↓"}
            </span>
          </div>
        )}
        <div className="expe">
          <p>Minimum Experience: </p>
          {job.minExp === null ? (
            <span>Any Exp</span>
          ) : (
            <span>{job.minExp} Years</span>
          )}
        </div>
        <a
          className="easyAply"
          href={job.jdLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          ⚡ Easy Apply
        </a>
      </div>
    </div>
  );
}

function App() {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once after initial render

  const fetchData = async () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: datalist.length, // Offset based on current data length
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const data = await response.json();
      setDatalist((prevData) => [...prevData, ...data.jdList]); // Append new data to existing data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      fetchData();
    }
  };

  return (
    <div className="App">
      {/* <Filter /> */}
      <div className="jobCardContainer">
        {datalist.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
