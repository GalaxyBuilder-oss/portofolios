// components/AboutPage.js

import Layout from "../../components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout
      title="Terms of Service | GalaxyBuilder-Oss"
      description="Terms of Service for GalaxyBuilder-Oss Portfolio"
    >
      <div className="container mt-5">
        <h1 className="mb-4">Terms of Service</h1>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with and be bound by these terms of service.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Any changes will be effective immediately upon posting.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          In no event shall GalaxyBuilder-Oss be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
        </p>

        <h2>5. Governing Law</h2>
        <p>
          These terms shall be governed by the laws of the jurisdiction in which GalaxyBuilder-Oss operates.
        </p>

        <h2>6. Contact Information</h2>
        <p>
          For any questions about these terms, please contact us at support@galaxybuilder-oss.com.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
