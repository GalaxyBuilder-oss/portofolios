import React, { useEffect, useState } from "react";
import { Button, Modal, Alert, Form, FloatingLabel } from "react-bootstrap";
import Layout from "../../components/Layout";
import { UsersProps } from "../../types";
import axios from "axios";
import { useAppContext } from "../../components/AppContext";

const ProfilePage = () => {
  const { router, token } = useAppContext()
  const [profile, setProfile] = useState<UsersProps>(null);
  const [defaultProfile] = useState<UsersProps>({
    id: 0,
    fullName: "Salim Hidayat",
    username: "salim26",
    email: "email@example.com",
    phoneNumber: "123-456-7890",
    address: "Alamat Anda",
    profilePictureUrl:
      "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1480&auto=format&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1658579222223-ca243ef7c520?q=80&w=1470&auto=format&fit=crop",
    isActive: true,
    isVerified: true,
    createdAt: Date.toString(),
    password: "",
    updatedAt: Date.toString(),
  });
  const [editProfile, setEditProfile] = useState({ ...profile });
  const [showEditModal,   setShowEditModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  useEffect(() => {
    // If the token exists, redirect to the homepage
    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const cachedData = sessionStorage.getItem("profile");
        if (cachedData) {
          setProfile(JSON.parse(cachedData));
          setEditProfile(JSON.parse(cachedData));
        } else {
          const response = await axios.get(`/api/v1/users`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          const data = response.data.data;
          const profileData = {
            id: parseInt(data.id, 10),
            fullName: data.full_name,
            username: data.username,
            password: "",
            email: data.email,
            address: data.address,
            cover: data.cover_url,
            createdAt: data.created_at,
            isActive: data.is_active,
            isVerified: data.is_verified,
            phoneNumber: data.phone_number,
            profilePictureUrl: data.profile_picture_url,
            updatedAt: data.updated_at,
          };
          setProfile(profileData);
          setEditProfile(profileData);
          sessionStorage.setItem("profile", JSON.stringify(profileData));
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setAlertMessage("Data profil tidak tersedia, menggunakan profil dummy");
        setAlertVariant("warning");
      }
    };

    fetchProfile();
  }, [setProfile, setEditProfile, setAlertMessage, setAlertVariant]);

  const onFileChange = (type) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (type === "image") {
          setEditProfile((prev) => ({
            ...prev,
            image: reader.result as string,
          }));
        } else if (type === "cover") {
          setEditProfile((prev) => ({
            ...prev,
            cover: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/api/v1/users`, editProfile, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      const result = response.data
      if (!result.success) {
        throw new Error("Failed to update profile");
      }

      setProfile(editProfile);
      setAlertMessage("Profil berhasil diperbarui");
      setAlertVariant("success");
      setShowEditModal(false);
      sessionStorage.removeItem("profile");
      router.reload()
    } catch (error) {
      setAlertMessage("Gagal memperbarui profil");
      setAlertVariant("danger");
    }
  };

  const handleProfileImageEdit = () => {
    console.log("tes")
    alert("Profile Updated")
  };

  const handleCoverImageEdit = () => {
    console.log("tes")
    alert("Cover Updated")
  };

  return (
    <Layout title="Profile | GalaxyBuilder-Oss">
      <section className="profile-page container py-5">
        {/* Cover Image */}
        <div className="cover-image-container">
          <div
            className="cover-image"
            style={{
              backgroundImage: `url(${profile?.cover || defaultProfile.cover})`,
            }}
          ></div>
          <div className="overlay">
            <i
              className="bi bi-pencil-square"
              onClick={handleCoverImageEdit}
            ></i>
          </div>
        </div>

        {/* Profile Image and Name */}
        <div className="profile-info text-center">
          <div className="profile-image-container">
            <img
              src={
                profile?.profilePictureUrl || defaultProfile.profilePictureUrl
              }
              alt="Profile Image"
              className="profile-image mb-3"
            />
            <div className="overlay">
              <i
                className="bi bi-pencil-square"
                onClick={handleProfileImageEdit}
              ></i>
            </div>
          </div>
          <h2 className="mb-0 d-flex align-items-top justify-content-center">
            @{profile?.username || defaultProfile.username}
            {profile?.isVerified && (
              <i className="bi bi-patch-check fs-5 text-primary"></i>
            )}
          </h2>
          <p className="text-muted">{profile?.email || defaultProfile.email}</p>
          <Button
            variant="dark"
            onClick={() => {
              setShowEditModal(true);
              setEditProfile(profile);
            }}
          >
            Edit Profil
          </Button>
        </div>

        {/* Display Data Profil */}
        <div className="mt-4">
          <strong>Nama Lengkap:</strong>{" "}
          {profile?.fullName || defaultProfile.fullName} <br />
          <strong>Telepon:</strong>{" "}
          {profile?.phoneNumber || defaultProfile.phoneNumber} <br />
          <strong>E-mail:</strong> {profile?.email || defaultProfile.email}{" "}
          <br />
          <strong>Alamat:</strong> {profile?.address || defaultProfile.address}
        </div>

        {/* Modal Edit Profil */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit} className="gap-4">
              <FloatingLabel controlId="name" label="Nama Lengkap" className="mb-3">
                <Form.Control
                  type="text"
                  value={editProfile.fullName}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, fullName: e.target.value })
                  }
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  value={editProfile.email}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, email: e.target.value })
                  }
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="phone" label="Nomor Telepon" className="mb-3">
                <Form.Control
                  type="text"
                  value={editProfile.phoneNumber}
                  onChange={(e) =>
                    setEditProfile({
                      ...editProfile,
                      phoneNumber: e.target.value,
                    })
                  }
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="address" label="Alamat" className="mb-3">
                <Form.Control
                  type="text"
                  value={editProfile.address}
                  onChange={(e) =>
                    setEditProfile({ ...editProfile, address: e.target.value })
                  }
                  required
                />
              </FloatingLabel>
              <Form.Group className="mb-3">
              <Button variant="dark" type="submit">
                Simpan
              </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Alert */}
        {alertMessage && (
          <Alert
            variant={alertVariant}
            dismissible
            onClose={() => setAlertMessage("")}
            className="mt-3"
          >
            {alertMessage}
          </Alert>
        )}
      </section>
    </Layout>
  );
};

export default ProfilePage;
