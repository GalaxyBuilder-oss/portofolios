import React, { useState } from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { Card, Button } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import { PortofoliosProps } from "../types";

const Portofolio: React.FC<{ portofolio: PortofoliosProps }> = ({
  portofolio,
}) => {
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
    ? `Berakhir tanggal ${formatDate(new Date(portofolio.endDate))}`
    : timeAgo(new Date(portofolio.endDate));

  function timeAgo(date: Date): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - date.getTime();

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months =
      now.getMonth() -
      date.getMonth() +
      12 * (now.getFullYear() - date.getFullYear());
    const years = now.getFullYear() - date.getFullYear();

    if (years > 0) {
      return `${years} tahun lalu`;
    } else if (months > 0) {
      return `${months} bulan lalu`;
    } else if (days > 0) {
      return `${days} hari lalu`;
    } else if (hours > 0) {
      return `${hours} jam lalu`;
    } else if (minutes > 0) {
      return `${minutes} menit lalu`;
    } else {
      return "Baru Saja"; // If the date is within the last minute
    }
  }

  return (
    <Card
      className="portfolio-card"
      onClick={() => Router.push("/p/[id]", `/p/${portofolio.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {portofolio.coverUrl && (
        <Card.Img
          variant="top"
          src={portofolio.coverUrl}
          alt={portofolio.projectName}
          style={{ height: 125 + "px", objectFit: "contain" }}
        />
      )}
      <Card.Body>
        <Card.Title>{portofolio.projectName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By @{authorName}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {endDateDisplay}
        </Card.Subtitle>
        <ReactMarkdown>{portofolio.description}</ReactMarkdown>
        <Button
          variant="dark"
          onClick={() => Router.push("/p/[id]", `/p/${portofolio.id}`)}
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Portofolio;
