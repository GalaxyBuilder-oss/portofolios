import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Card, Button } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import { PortofoliosProps } from "../types";
import { useAppContext } from "./AppContext";

const Portofolio: React.FC<{ portofolio: PortofoliosProps }> = ({
  portofolio,
}) => {
  const {timeAgo} = useAppContext()
  const authorName = portofolio.users
    ? portofolio.users.username
    : "Unknown User";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleString("en-US", options);
    const [month, day, year, time, daytime] = formattedDate.split(" ");

    return `${day} ${month} ${year.replace(",","")} ${time} ${daytime}`;
  };

  const endDateDisplay = isHovered
    ? `Berakhir tanggal ${formatDate(new Date(portofolio.endDate as string))}`
    : timeAgo && timeAgo(new Date(portofolio.endDate  as string));

  return (
    <Card
      className="portfolio-card"
      onClick={(e) => {
      e.stopPropagation();
      location.href = `/p/${portofolio.id}`;
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Img
        variant="top"
        src={portofolio.coverUrl ?? "https://portofolio2024.s3.amazonaws.com/default_project_thumbnail.png"}
        alt={portofolio.projectName}
        style={{ height: 125 + "px", objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{portofolio.projectName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By @{authorName}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {endDateDisplay}
        </Card.Subtitle>
        <ReactMarkdown>{portofolio.description ?? ""}</ReactMarkdown>
        <Button
          variant="dark"
          onClick={(e) => {
            e.stopPropagation();
            location.href = `/p/${portofolio.id}`;
          }}
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Portofolio;
