import React, { useCallback, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { PortofoliosProps } from "../../types";
import moment from "moment";
import Datetime from "react-datetime";
import axios, { AxiosError } from "axios";
import { useAppContext } from "../../components/AppContext";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params.id, // Directly return the id
    },
  };
};

const Portofolio: React.FC<{ id: string }> = ({ id }) => {
  const { fetchPortofolio, token, router, timeAgo } = useAppContext();
  const [props, setProps] = useState<PortofoliosProps>(null);
  const [editPortofolio, setEditPortofolio] = useState<PortofoliosProps>(props);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchPortofolio(parseInt(id), setProps);
  },[]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditPortofolio({
      ...editPortofolio,
      [name]: value,
    });
  };

  const handleStartDateChange = (date: string | moment.Moment) => {
    const formattedDate = moment.isMoment(date)
      ? date.toDate()
      : new Date(date);
    setEditPortofolio({
      ...editPortofolio,
      startDate: formattedDate.toISOString(),
    });
  };

  const handleEndDateChange = (date: string | moment.Moment) => {
    const formattedDate = moment.isMoment(date)
      ? date.toDate()
      : new Date(date);
    setEditPortofolio({
      ...editPortofolio,
      endDate: formattedDate.toISOString(),
    });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault(); // Prevent the default form submission behavior

      // if (!editPortofolio) return;
      // Update the timestamp
      editPortofolio.updatedAt = new Date().toISOString();

      try {
        const response = await axios.patch(
          `/api/v1/portofolios/${id}`,
          editPortofolio,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setShowEditModal(false);
          sessionStorage.removeItem("portofolios");
          sessionStorage.removeItem("portofolio");
          router.push("/portofolio"); // Navigate after successful update
        } else {
          console.log("Failed to update portfolio.");
        }
      } catch (error) {
        console.error("Error updating portfolio:", error);
      }
    },
    [token]
  );

  const handleDelete = async (id: number) => {
    if (!confirm("Anda yakin ingin menghapus ini?")) return;

    try {
      const response = await axios.delete(`/api/v1/portofolios/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      const result = response.data; // Axios automatically parses JSON

      if (result.success) {
        sessionStorage.removeItem("portofolios");
        sessionStorage.removeItem("portofolio");
        router.push("/portofolio"); // Redirect to portfolio page
      } else {
        console.log("Failed to delete portfolio.");
      }
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  return (
    <Layout
      title={`${props?.projectName || "Loading..."} | GalaxyBuilder-Oss`}
      description={`This post is about ${props?.projectName || "Loading..."}`}
    >
      <div className="portfolio-page">
        <h2>
          {props?.projectName || "Loading..."}{" "}
          {props?.status.match("ongoing") && "(Ongoing)"}
        </h2>
        <p className="author">By {props?.users?.username || "Unknown User"}</p>
        {props?.coverUrl && (
          <img
            src={props?.coverUrl}
            alt={props?.projectName}
            className="cover-image"
          />
        )}
        <div>
          <p>
            <i className="bi bi-calendar"></i> Projek Mulai :{" "}
            {props?.startDate && timeAgo(new Date(props.startDate))}
          </p>
          <p>
            <i className="bi bi-calendar"></i> Projek Selesai :{" "}
            {props?.endDate && timeAgo(new Date(props.endDate))}
          </p>
          <p>
            <i className="bi bi-calendar"></i> Lama Projek :{" "}
            {props?.endDate &&
              props?.startDate &&
              Math.round(
                (new Date(props.endDate).getTime() -
                  new Date(props.startDate).getTime()) /
                  86400000
              )}{" "}
            Hari
          </p>
          <p>
            <i className="bi bi-calendar"></i> Terakhir Update :{" "}
            {props?.updatedAt
              ? timeAgo(new Date(props.updatedAt))
              : " Belum Di Update"}
          </p>
          <ReactMarkdown>{props?.description}</ReactMarkdown>

          {token && (
            <div className="btn-group" role="group">
              <button
                className="btn btn-dark"
                onClick={() => {
                  setEditPortofolio(props ? props : null);
                  setShowEditModal(true);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-secondary-dark"
                onClick={() => handleDelete(props?.id)}
              >
                Hapus
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
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
                  onClick={() => setShowEditModal(false)}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      name="projectName"
                      value={editPortofolio?.projectName || ""}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="projectName">Nama Projek</label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="startDate">Tanggal Mulai:</label>
                    <Datetime
                      value={
                        editPortofolio?.startDate
                          ? moment(editPortofolio.startDate)
                          : null
                      }
                      onChange={handleStartDateChange}
                      dateFormat="YYYY-MM-DD"
                      timeFormat="HH:mm"
                      inputProps={{ placeholder: "Select a date and time" }}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="endDate">Tanggal Selesai:</label>
                    <Datetime
                      value={
                        editPortofolio?.endDate
                          ? moment(editPortofolio.endDate)
                          : null
                      }
                      onChange={handleEndDateChange}
                      dateFormat="YYYY-MM-DD"
                      timeFormat="HH:mm"
                      inputProps={{ placeholder: "Select a date and time" }}
                      className="form-control"
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows={4}
                      value={editPortofolio?.description || ""}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="description">Deskripsi</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="coverUrl"
                      name="coverUrl"
                      value={editPortofolio?.coverUrl || ""}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="coverUrl">Sampul</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      value={editPortofolio?.status || ""}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="status">Status</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="budget"
                      name="budget"
                      value={editPortofolio?.budget || ""}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="budget">Budget</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary-dark"
                    onClick={() => setShowEditModal(false)}
                  >
                    Tutup
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Portofolio;
