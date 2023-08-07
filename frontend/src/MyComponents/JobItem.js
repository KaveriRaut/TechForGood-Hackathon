import React from 'react';

export const JobItem = ({ job, onDelete }) => {
  const { title, description, salary, time, location, category, mobile_no, email, posted_by } = job;
  
  // let customCardStyle = {
  //   width: "350px",
  //   borderRadius: "20px"
  // };
  // const customCardStyle = {
  //   width: "350px",
  //   borderRadius: "40px",
  //   left: "50%",
  //   transform: "translate(-50%, -0%)",
  //   backgroundColor: "#f0f0f0", 
  //   boxShadow: "0 0 20px 0 rgb(112 121 138 / 18%)", // Box shadow for hover effect
  //   transition: "box-shadow 0.3s ease-in-out", // Transition for smooth hover effect
  //   cursor: "pointer", // Show pointer cursor on hover
  // };
  const customCardStyle = {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "40px",
    left: "50%",
    transform: "translate(-50%, -0%)",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 0 20px 0 rgb(112 121 138 / 18%)",
    transition: "box-shadow 0.3s ease-in-out",
    cursor: "pointer",
    margin: "10px", // Add some margin for spacing between cards
  
    /* Media queries for responsiveness */
    "@media (max-width: 768px)": {
      maxWidth: "300px", // Adjust width for smaller screens
    },
  
    "@media (max-width: 576px)": {
      maxWidth: "250px", // Adjust width for even smaller screens
    },
  };
  

  let customHrStyle = {
    margin: 0,
    marginBottom: 10
  };

  let customBtnStyle = {
    width: "30%",
  }

  return (
    <div className="card mb-3" style={customCardStyle}>
      <div className="card-body d-flex flex-column" >
      <div className="card-body">
        <h5 className="card-title"><strong>Domestic Job: </strong>{title}</h5>
        <p className="card-text"> <strong>Description: </strong>{description}</p>
        <p className="card-text"><strong>Salary: </strong>{salary}</p>
        <p className="card-text"><strong>Time: </strong>{time}</p>
        <p className="card-text"><strong>Location: </strong>  {location}</p>
        <p className="card-text"><strong>Category: </strong>  {category}</p>
        <p className="card-text"><strong>Mobile Number: </strong>{mobile_no}</p>
        <p className="card-text"><strong>Email: </strong>{email}</p>
        <p className="card-text"><strong>Posted By: </strong> {posted_by}</p>
      </div>
    </div>
    </div>
  );
};

