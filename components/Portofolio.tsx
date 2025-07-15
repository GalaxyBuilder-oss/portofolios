import React, {useState} from "react";
import {Button, ButtonGroup, Card} from "react-bootstrap"; // Assuming you're using Bootstrap for styling
import ReactMarkdown from "react-markdown";
import {LocalPortofoliosProps} from "../types";
import {useAppContext} from "./AppContext";

const Portofolio: React.FC<{ portofolio: LocalPortofoliosProps }> = ({
                                                                         portofolio,
                                                                     }) => {
    const {timeAgo} = useAppContext()
    const authorName = "GalaxyBuilder-OSS";
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toDate = (date:string) => {
        return new Date(date);
    }

    const stringToColor = (str: string): string => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = "#";
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += ("00" + value.toString(16)).slice(-2);
        }
        return color;
    };

    return (
        <Card
            className="portfolio-card"
            onClick={(e) => {
                e.stopPropagation();
                // location.href = `${portofolio.githubLink}`;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Card.Img
                variant="top"
                src={portofolio.coverUrl ?? "https://portofolio2024.s3.ap-southeast-1.amazonaws.com/public/default_project_thumbnail.png"}
                alt={portofolio.projectName}
                className={`px-4 py-2`}
                style={{height: 85 + "%", objectFit: "contain"}}
            />
            <Card.Body>
                <Card.Title>{portofolio.projectName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fw-light fs-6">
                    By @{authorName}
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
                            >{tag}</span>
                        ))}
                    </Card.Text>
                )}
                <Card.Subtitle className="mb-2 text-muted">
                    {timeAgo && portofolio.endDate ? timeAgo(toDate(portofolio.endDate)): "-"}
                </Card.Subtitle>
                <ReactMarkdown className="text-capitalize">{portofolio.description ?? ""}</ReactMarkdown>
                <ButtonGroup aria-label="Project Type" size="sm" vertical>
                {portofolio.githubLink.fullstack && (
                <Button
                    variant="dark"
                    onClick={(e) => {
                        e.stopPropagation();
                        location.href = `${portofolio.githubLink.fullstack}`;
                    }}
                >
                    View Fullstack Project
                </Button>
                )}
                {portofolio.githubLink.backend && (
                <Button
                    variant="dark"
                    onClick={(e) => {
                        e.stopPropagation();
                        location.href = `${portofolio.githubLink.backend}`;
                    }}
                >
                    View Backend Project
                </Button>
                )}
                {portofolio.githubLink.frontend && (
                <Button
                    variant="dark"
                    onClick={(e) => {
                        e.stopPropagation();
                        location.href = `${portofolio.githubLink.frontend}`;
                    }}
                >
                    View Frontend Project
                </Button>
                )}
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
};

export default Portofolio;
