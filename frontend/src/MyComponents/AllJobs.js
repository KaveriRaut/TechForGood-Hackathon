import React, { useState } from "react";
import { JobItem } from "./JobItem";
import { useEffect } from "react";

export const AllJobs = (props) => {
  const [alljobs, setAllJobs] = useState([]);
  // /******************************************************************* */
  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    let result = await fetch("http://localhost:5000/jobs");
    result = await result.json();
    setAllJobs(result);
  };
  // /******************************************************************* */

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // const filteredJobs = props.alljobs.filter((job) => {
  //     const lowerCaseFields = {
  //         title: job.title,
  //         desc: job.desc,
  //         sal: job.sal,
  //         time: job.time,
  //         loc: job.loc,
  //         category: job.category,
  //         mobileNo: job.mobileNo,
  //         email: job.email,
  //         postedBy: job.postedBy,
  //     };

  //     // return Object.values(lowerCaseFields).some((field) =>
  //     //     field.includes(searchQuery.toLowerCase())
  //     // );
  // });

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const jobChunks = chunkArray(props.alljobs, 3);

  let customSearchbtnStyle = {
    width: "200px",
    marginTop: "20px",
    transform: "translate(230%, -0%)",
  };

  let customHeading = {
    marginTop: "55px",
  };

  let customP = {
    marginBottom: "100px",
    textAlign: "center",
    marginTop: "50px",
    fontSize: "20px",
  };

  return (
    <div className="container pb-52">
      {/* Display Jobs */}
      <h2 className="mt-32 text-center fw-bold" style={customHeading}>
        All Jobs
      </h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Jobs"
          className="form-control"
          style={customSearchbtnStyle}
        />
      </div>
      
      {jobChunks.map((chunk, index) => (
        <div key={index} className="row mb-3">
          {alljobs.map((eachJob) => (
            <div key={eachJob.sno} className="col-md-4">
              <JobItem job={eachJob} onDelete={props.onDelete} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
