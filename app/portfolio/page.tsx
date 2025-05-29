"use client"
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import { useAppContext } from "../../components/AppContext";
import Portofolio from "../../components/Portofolio";
import { LocalPortofoliosProps, PortfolioReqDto, PortofoliosProps, SortOption } from "../../types";
import { PortofolioResponseDto } from "../../utils/Dto";

const Portfolio = () => {
  const { router, token } = useAppContext();
  const [sortedFeed, setSortedFeed] = useState<LocalPortofoliosProps[] | null>(null);
  const [portofolios, setPortofolios] = useState<LocalPortofoliosProps[] | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("projectName");
  const [newPortofolio, setNewPortofolio] =
    useState<PortfolioReqDto | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    if (portofolios) {
      setSortedFeed([...portofolios]);
      sessionStorage.setItem("portofolios", JSON.stringify(portofolios)); // Cache data in sessionStorage
    }
  }, [portofolios]);

  const fetchPortofolios = async () => {
      try {
        const res = await axios.get(`/project-list.json`);
        // console.log(res.data)
        // const serializedData = res.data.data.map(PortofolioResponseDto);
        setPortofolios(res.data);
        // sessionStorage.setItem("portofolioss", JSON.stringify(serializedData)); // Cache data in sessionStorage
      } catch (error) {
        console.error("Failed to fetch or process portfolio data:", error);
      }
    };

  useEffect(() => {
    fetchPortofolios();
  }, []);

  // useEffect(() => {
  //   portofolios && sortPortfolios();
  // }, [sortOption, portofolios]);

  // const sortPortfolios = () => {
  //   let sorted = [...portofolios ?? []];

  //   switch (sortOption) {
  //     case "projectName":
  //       sorted.sort((a, b) => a.projectName.localeCompare(b.projectName));
  //       break;
  //     case "createdAt":
  //       sorted.sort(
  //         (a, b) =>
  //           new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime()
  //       );
  //       break;
  //     case "updateAt":
  //       sorted.sort(
  //         (a, b) =>
  //           new Date(b.updatedAt as string).getTime() - new Date(a.updatedAt as string).getTime()
  //       );
  //       break;
  //     case "startDate":
  //       sorted.sort(
  //         (a, b) =>
  //           new Date(a.startDate as string).getTime() - new Date(b.startDate as string).getTime()
  //       );
  //       break;
  //     case "endDate":
  //       sorted.sort(
  //         (a, b) =>
  //           new Date(a.endDate as string).getTime() - new Date(b.endDate as string).getTime()
  //       );
  //       break;
  //     default:
  //       break;
  //   }

  //   setSortedFeed(sorted);
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPortofolio((prev)=>prev?{
      ...prev,
      [name]: value,
    }:null);
  };

  const handleStartDateChange = (date: string | moment.Moment) => {
    const formattedDate = moment.isMoment(date)
      ? date.toDate()
      : new Date(date);
    setNewPortofolio((prev)=>prev?{
      ...prev,
      startDate: formattedDate.toISOString(),
    }:null);
  };

  const handleEndDateChange = (date: string | moment.Moment) => {
    const formattedDate = moment.isMoment(date)
      ? date.toDate()
      : new Date(date);
    setNewPortofolio((prev)=>prev?{
      ...prev,
      endDate: formattedDate.toISOString(),
    }:null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v2/portfolios", newPortofolio);

      const result = response.data; // Axios automatically parses JSON

      if (result.success) {
        setShowAddModal(false);
        sessionStorage.removeItem("portofolios");
        sessionStorage.removeItem("portofolio");
        router?.reload(); // Optionally, you might want to handle this more gracefully
      } else {
        console.log("Failed to add portfolio.");
      }
    } catch (error) {
      console.error("Error adding portfolio:", error);
    }
  };

  return (
    <>
      <div className="page m-3">
        <h1>My Portofolio</h1>
        <p className={"text-end"}>{portofolios?.length || "0"} Projek</p>
        <div className="d-flex justify-content-between">
          {/* <div className="d-flex align-items-center">
            <label htmlFor="sortOptions">Urutkan : </label>
            <select
              id="sortOptions"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="form-select w-75"
            >
              <option value="projectName">Nama Projek</option>
              <option value="createdAt">Terakhir Ditambahkan</option>
              <option value="updatedAt">Terakhir Diupdate</option>
              <option value="startDate">Tanggal Mulai</option>
              <option value="endDate">Tanggal Selesai</option>
            </select>
          </div> */}
          {/* <div
              className="btn-group"
              role="group"
              aria-label="this for button"
            >
              <button
                className="btn btn-dark"
                onClick={() => {
                  setShowAddModal(true);
                }}
              >
                Add
              </button>
            </div> */}
          {token && (
            <div
              className="btn-group"
              role="group"
              aria-label="this for button"
            >
              <button
                className="btn btn-dark"
                onClick={() => {
                  setShowAddModal(true);
                }}
              >
                Add
              </button>
            </div>
          )}
        </div>
        <main>
          {portofolios &&
            portofolios.map((portofolio) => (
              <div key={portofolio.id} className="portofolio">
                <Portofolio portofolio={portofolio} />
              </div>
            ))}
        </main>
      </div>
      {/* Add Modal */}
      {showAddModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
          tabIndex={-1}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Portfolio</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      name="projectName"
                      value={newPortofolio?.projectName || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="startDate">Tanggal Mulai:</label>
                    <Datetime
                      value={
                        newPortofolio?.startDate
                          ? moment(newPortofolio.startDate)
                          : undefined
                      }
                      onChange={handleStartDateChange}
                      dateFormat="YYYY-MM-DD"
                      timeFormat="HH:mm"
                      inputProps={{ placeholder: "Select a date and time" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="endDate">Tanggal Selesai:</label>
                    <Datetime
                      value={
                        newPortofolio?.endDate
                          ? moment(newPortofolio.endDate)
                          : undefined
                      }
                      onChange={handleEndDateChange}
                      dateFormat="YYYY-MM-DD"
                      timeFormat="HH:mm"
                      inputProps={{ placeholder: "Select a date and time" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={newPortofolio?.description || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">
                      Budget
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      name="budget"
                      value={newPortofolio?.budget || 0}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <h6>Status</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="ongoing"
                        value="ongoing"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="ongoing">
                        Ongoing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="done"
                        value="done"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="done">
                        Done
                      </label>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary-dark"
                    onClick={() => setShowAddModal(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
