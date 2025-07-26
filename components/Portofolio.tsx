import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import ReactMarkdown from "react-markdown";
import { LocalPortofoliosProps } from "../types";
import { useAppContext } from "./AppContext";
import Image from "next/image";

const Portofolio: React.FC<{ portofolio: LocalPortofoliosProps }> = ({
  portofolio,
}) => {
  const { timeAgo } = useAppContext();
  const authorName = "GalaxyBuilder-OSS";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toDate = (date: string) => {
    return new Date(date);
  };

  const stringToColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate RGB values but limit brightness
    const r = (hash & 0xff) % 180; // Red: 0-179 (darker)
    const g = ((hash >> 8) & 0xff) % 180; // Green: 0-179 (darker)
    const b = ((hash >> 16) & 0xff) % 180; // Blue: 0-179 (darker)

    // Convert to hex and pad with zeros
    const color = `#${[r, g, b]
      .map((c) => c.toString(16).padStart(2, "0"))
      .join("")}`;

    return color;
  };

  return (
    <Card
      className="portfolio-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="position-relative"
        style={{ height: "250px", width: "100%" }}
      >
        <Image
          src={portofolio.coverUrl || "/default-project-thumbnail.png"}
          alt={portofolio.projectName}
          fill
          className="px-4 py-2"
          style={{ objectFit: "contain" }}
          sizes="100vw"
        />
      </div>
      <Card.Body>
        <Card.Title>{portofolio.projectName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fw-light fs-6">
          By{" "}
          <a
            href={`https://github.com/${authorName}`}
            className="me-2 link-offset-2 link-underline link-underline-opacity-0 pointer-event"
          >
            @{authorName}
          </a>
        </Card.Subtitle>
        {portofolio.tags && portofolio.tags.length > 0 && (
          <Card.Text className="mb-2 d-flex flex-wrap gap-1">
            {portofolio.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="badge text-white text-uppercase"
                style={{
                  backgroundColor: stringToColor(tag),
                  padding: "0.5em 0.75em",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                }}
              >
                {tag}
              </span>
            ))}
          </Card.Text>
        )}
        {portofolio.startDate && portofolio.endDate && (
          <Card.Subtitle className="mb-2 text-muted">
            Dibuat{" "}
            {timeAgo && portofolio.endDate
              ? timeAgo(toDate(portofolio.endDate))
              : "-"}
          </Card.Subtitle>
        )}
        <ReactMarkdown className="text-capitalize">
          {portofolio.description ?? ""}
        </ReactMarkdown>
        <ButtonGroup aria-label="Project Type" size="sm" vertical>
          <Button
            variant="dark"
            onClick={(e) => {
              e.stopPropagation();
              location.href = `/p/${portofolio.id}`;
            }}
          >
            Lihat Detail
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Portofolio;
