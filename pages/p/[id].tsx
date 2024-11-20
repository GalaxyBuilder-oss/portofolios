import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { PortofoliosProps } from "../../types";
import Cookies from "js-cookie";
import moment from "moment";
import Datetime from "react-datetime";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useAppContext } from "../../components/AppContext";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params.id, // Directly return the id
    },
  };
};

const Portofolio: React.FC<{ id: string }> = ({ id }) => {
  const { portofolios, token, router, fetchPortofolios } = useAppContext();
  const [props, setProps] = useState<PortofoliosProps>(null);
  const [editPortofolio, setEditPortofolio] = useState<PortofoliosProps>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
    const fetchData = async () => {
      try {
        const item = portofolios.find((data) => data.id === parseInt(id));
        if (item === null) {
          console.error("Error Eung");
        }
        setProps(item); // Ensure setProps is defined in your component
        sessionStorage.setItem("portofolio", JSON.stringify(item));
      } catch (error) {
        console.error("Failed to fetch or process portfolio data:", error);
        throw new AxiosError(error);
      }
    };
    fetchData();
  }, []);

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

    if (date > now) {
      const diff = date.getTime() - now.getTime();
      const seconds1 = Math.floor(diff / 1000);
      const minutes1 = Math.floor(seconds1 / 60);
      const hours1 = Math.floor(minutes1 / 60);
      const days1 = Math.floor(hours1 / 24);
      if (days1 > 0) {
        return `${days1} hari ${hours1%24} jam ${minutes1%60} menit lagi`;
      } else if (hours1 > 0) {
        return `${hours1} jam ${minutes1%60} menit lagi lagi`;
      }  else if (minutes1 > 0) {
        return `${minutes1} menit lagi`;
      } else return "Mendatang";
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    editPortofolio.updatedAt = new Date().toISOString();

    try {
      const response = await fetch(
        `/api/v1/portofolios/${props.id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editPortofolio)
        }
      );

      const result = await response.json(); // Axios automatically parses JSON

      if (result.success) {
        setShowEditModal(false);
        sessionStorage.removeItem("portofolios");
        sessionStorage.removeItem("portofolio");
        router.push("/portofolio"); // Optionally, you might want to handle this more gracefully
      } else {
        console.log("Failed to update portfolio.");
      }
    } catch (error) {
      console.error("Error updating portfolio:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Anda yakin ingin menghapus ini?")) return;

    try {
      const response = await axios.delete(`/api/v1/portofolios/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
        <h2>{props?.projectName || "Loading..."} {props?.status.match("Ongoing") && "(Ongoing)"}</h2>
        <p className="author">By {props?.users?.username || "Unknown User"}</p>
        {props?.coverUrl && (
          <img
            src={props.coverUrl}
            alt={props.projectName}
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

          <div className="btn-group" role="group">
            <button
              className="btn btn-dark"
              onClick={() => {
                setShowEditModal(true);
                setEditPortofolio(props);
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
