import React from "react";

const ReportCard = ({ analyst, title, description, date }) => {
  return (
    <div className="report-card">
      <p className="analyst">{analyst}</p>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default ReportCard;
