"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { LocalPortofoliosProps } from "../../../types";
import { useParams } from "next/navigation";
import { Button } from "react-bootstrap";

const Portofolio = () => {
  const [props, setProps] = useState<LocalPortofoliosProps>();
  const id = useParams()?.id as string;

  const fetchPortofolio = async (id: number) => {
    try {
      const response = await axios.get(`/project-list.json`);
      const portfolio = response.data.data.find(
        (p: LocalPortofoliosProps) => p.id === id
      );
      if (!portfolio) {
        location.href = "/";
        return;
      }
      sessionStorage.setItem("portofolio", JSON.stringify(portfolio));
      setProps(portfolio);
    } catch (error) {
      console.error("Failed to fetch or process portfolio data:", error);
    }
  };
  useEffect(() => {
    if (id) fetchPortofolio(parseInt(id));
  }, []);

  function formatDateToDDMMM(dateString: string, version: number): string {
    const date = new Date(dateString);
    if (version === 1) {
      return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
      }).format(date); // Output: 25 Jul
    } else if (version === 2) {
      return new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date); // Output: 25 Jul 2025
    } else {
      return "Tidak Diketahui";
    }
  }

  return (
    <>
      <div className="portfolio-page w-75">
        <Button variant="light" onClick={()=>{
          location.href="/portfolio"
        }}><i className="bi bi-arrow-left"></i> Back</Button>
        <h2>
          {props?.projectName || "Loading..."}{" "}
          {props?.status?.match("ongoing") && "(Ongoing)"}
        </h2>
        <p className="author">
          By{" "}
          <a
            href={`http://github.com/GalaxyBuilder-oss`}
            className="me-2 link-offset-2 link-underline link-underline-opacity-0 pointer-event"
          >
            GalaxyBuilder-OSS
          </a>
        </p>
        {props?.coverUrl && (
          <img
            src={
              props?.coverUrl ??
              "https://portofolio2024.s3.amazonaws.com/default_project_thumbnail.png"
            }
            alt={props?.projectName}
            className="cover-image w-50"
          />
        )}
        <fieldset className="my-3">
          <div className="project-dates mb-2 d-flex">
            <i className="bi bi-calendar me-2 mt-1"></i>
            <div className="d-flex">
              <strong className="me-2" style={{ minWidth: "125px" }}>
                Timeline
              </strong>:&nbsp;
              <span>
                {props?.startDate && formatDateToDDMMM(props.startDate, 1)} →{" "}
                {props?.endDate && formatDateToDDMMM(props.endDate, 2)}
                {props?.startDate && props?.endDate && (
                  <span>
                    {" "}
                    (
                    {Math.round(
                      (new Date(props.endDate).getTime() -
                        new Date(props.startDate).getTime()) /
                        86400000
                    )}{" "}
                    Hari)
                  </span>
                )}
              </span>
            </div>
          </div>

          <div className="mb-2 d-flex">
            <i className="bi bi-person me-2 mt-1"></i>
            <div className="d-flex">
              <strong className="me-2" style={{ minWidth: "125px" }}>
                Role
              </strong>:&nbsp;
              <span>{props?.role ?? "Backend"}</span>
            </div>
          </div>

          <div className="mb-2 d-flex">
            <i className="bi bi-tools me-2 mt-1"></i>
            <div className="d-flex">
              <strong className="me-2" style={{ minWidth: "125px" }}>
                Tools
              </strong>:&nbsp;
              <span>{props?.tools?.join(", ") ?? "Visual Studio Code"}</span>
            </div>
          </div>

          <div className="mb-2 d-flex">
            <i className="bi bi-link me-2 mt-1"></i>
            <div className="d-flex flex-wrap">
              <strong className="me-2" style={{ minWidth: "125px" }}>
                Links
              </strong>:&nbsp;
              <span>
                {props?.githubLink?.backend && (
                  <a
                    href={props.githubLink.backend}
                    className="me-2 text-decoration-none"
                  >
                    Back End Repository
                  </a>
                )}
                {props?.githubLink?.frontend && (
                  <a
                    href={props.githubLink.frontend}
                    className="me-2 text-decoration-none"
                  >
                    Front End Repository
                  </a>
                )}
                {props?.githubLink?.fullstack && (
                  <a
                    href={props.githubLink.fullstack}
                    className="me-2 text-decoration-none"
                  >
                    Full Stack Repository
                  </a>
                )}
                {!props?.githubLink?.backend &&
                  !props?.githubLink?.frontend &&
                  !props?.githubLink?.fullstack &&
                  "No Links Available"}
              </span>
            </div>
          </div>

          {props?.tags && props?.tags?.length > 0 && (
            <div className="mb-2 d-flex">
              <i className="bi bi-tags me-2 mt-1"></i>
              <div className="d-flex">
                <strong className="me-2" style={{ minWidth: "125px" }}>
                  Tags
                </strong>:&nbsp;
                <span>{props.tags.join(", ")}</span>
              </div>
            </div>
          )}

          {props?.description && (
            <div className="d-flex">
              <i className="bi bi-card-text me-2 mt-1"></i>
              <div className="d-flex">
                <strong className="d-block me-2" style={{ minWidth: "125px" }}>
                  Description
                </strong>:&nbsp;
                <div>
                  <ReactMarkdown>{props.description}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </fieldset>
      </div>
    </>
  );
};

export default Portofolio;
