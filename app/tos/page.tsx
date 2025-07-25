"use client";
const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="container my-3"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onKeyDown={(e) => {
          if (
            (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "v")) ||
            e.key === "F12"
          ) {
            e.preventDefault();
          }
        }}
      >
        <div className="text-center mb-5">
          <h1 className="display-4">TERMS OF SERVICE</h1>
          <p className="text-muted">Last updated July 26, 2025</p>
        </div>

        <section className="mb-4">
          <h4 className="h4">AGREEMENT TO OUR LEGAL TERMS</h4>
          <p>
            We are <strong>GalaxyBuilder-oss</strong> (“Company,” “we,” “us,”
            “our”), a company registered in Indonesia at Jalan Dakota no 8a,
            Bandung, Jawa Barat 40195.
          </p>
          <p>
            We operate the website{" "}
            <a
              href="https://galaxybuilder.vercel.app"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://galaxybuilder.vercel.app
            </a>{" "}
            (the “Site”), as well as any other related products and services
            that refer or link to these legal terms (the “Legal Terms”)
            (collectively, the “Services”).
          </p>
          <p>
            You can contact us by email at{" "}
            <a
              href="mailto:hidayatsalim004@outlook.com"
              className="text-primary"
            >
              hidayatsalim004@outlook.com
            </a>{" "}
            or by mail to Jalan Dakota no 8a, Bandung, Jawa Barat 40195,
            Indonesia.
          </p>
        </section>

        <section className="mb-4">
          <p>
            These Legal Terms constitute a legally binding agreement made
            between you and GalaxyBuilder-oss. By accessing the Services, you
            agree to these Legal Terms. If you do not agree with all of them,
            you must stop using the Services immediately.
          </p>
          <p>
            We may notify you of changes via email. Continued use means you
            accept the modified terms.
          </p>
          <p className="fw-bold">Age Notice:</p>
          <p>
            The Services are intended for users aged 13 and above. If you're
            under 18, you must have parent/guardian permission to use the
            Services.
          </p>
          <p>
            We recommend printing a copy of these Legal Terms for your records.
          </p>
        </section>

        <section className="mb-4">
          <h4 className="h4">TABLE OF CONTENTS</h4>
          <ul className="list-unstyled">
            <li>
              <a
                href="#our-services"
                className="text-decoration-none text-primary"
              >
                1. OUR SERVICES
              </a>
            </li>
            <li>
              <a
                href="#intellectual-property-rights"
                className="text-decoration-none text-primary"
              >
                2. INTELLECTUAL PROPERTY RIGHTS
              </a>
            </li>
            <li>
              <a
                href="#user-representations"
                className="text-decoration-none text-primary"
              >
                3. USER REPRESENTATIONS
              </a>
            </li>
            <li>
              <a
                href="#purchases-and-payment"
                className="text-decoration-none text-primary"
              >
                4. PURCHASES AND PAYMENT
              </a>
            </li>
            <li>
              <a href="#policy" className="text-decoration-none text-primary">
                5. POLICY
              </a>
            </li>
            <li>
              <a
                href="#prohibited-activities"
                className="text-decoration-none text-primary"
              >
                6. PROHIBITED ACTIVITIES
              </a>
            </li>
            <li>
              <a
                href="#user-generated-contributions"
                className="text-decoration-none text-primary"
              >
                7. USER GENERATED CONTRIBUTIONS
              </a>
            </li>
            <li>
              <a
                href="#contribution-license"
                className="text-decoration-none text-primary"
              >
                8. CONTRIBUTION LICENSE
              </a>
            </li>
            <li>
              <a
                href="#guidelines-for-reviews"
                className="text-decoration-none text-primary"
              >
                9. GUIDELINES FOR REVIEWS
              </a>
            </li>
            <li>
              <a
                href="#third-party-websites-and-content"
                className="text-decoration-none text-primary"
              >
                10. THIRD-PARTY WEBSITES AND CONTENT
              </a>
            </li>
            <li>
              <a
                href="#services-management"
                className="text-decoration-none text-primary"
              >
                11. SERVICES MANAGEMENT
              </a>
            </li>
            <li>
              <a
                href="#privacy-policy"
                className="text-decoration-none text-primary"
              >
                12. PRIVACY POLICY
              </a>
            </li>
            <li>
              <a
                href="#term-and-termination"
                className="text-decoration-none text-primary"
              >
                13. TERM AND TERMINATION
              </a>
            </li>
            <li>
              <a
                href="#modifications-and-interruptions"
                className="text-decoration-none text-primary"
              >
                14. MODIFICATIONS AND INTERRUPTIONS
              </a>
            </li>
            <li>
              <a
                href="#governing-law"
                className="text-decoration-none text-primary"
              >
                15. GOVERNING LAW
              </a>
            </li>
            <li>
              <a
                href="#dispute-resolution"
                className="text-decoration-none text-primary"
              >
                16. DISPUTE RESOLUTION
              </a>
            </li>
            <li>
              <a
                href="#corrections"
                className="text-decoration-none text-primary"
              >
                17. CORRECTIONS
              </a>
            </li>
            <li>
              <a
                href="#disclaimer"
                className="text-decoration-none text-primary"
              >
                18. DISCLAIMER
              </a>
            </li>
            <li>
              <a
                href="#limitations-of-liability"
                className="text-decoration-none text-primary"
              >
                19. LIMITATIONS OF LIABILITY
              </a>
            </li>
            <li>
              <a
                href="#indemnification"
                className="text-decoration-none text-primary"
              >
                20. INDEMNIFICATION
              </a>
            </li>
            <li>
              <a
                href="#user-data"
                className="text-decoration-none text-primary"
              >
                21. USER DATA
              </a>
            </li>
            <li>
              <a
                href="#electronic-communications-transactions-and-signatures"
                className="text-decoration-none text-primary"
              >
                22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </a>
            </li>
            <li>
              <a
                href="#california-users-and-residents"
                className="text-decoration-none text-primary"
              >
                23. CALIFORNIA USERS AND RESIDENTS
              </a>
            </li>
            <li>
              <a
                href="#miscellaneous"
                className="text-decoration-none text-primary"
              >
                24. MISCELLANEOUS
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="text-decoration-none text-primary"
              >
                25. CONTACT US
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-4" id="our-services">
          <h4 className="h4">1. OUR SERVICES</h4>
          <p>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>
          <p>
            The Services are not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use the Services. You may not use the Services in a way that would
            violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </section>
        <section className="mb-4" id="intellectual-property-rights">
          <h4 className="h4">2. INTELLECTUAL PROPERTY RIGHTS</h4>
          <p>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </p>
          <p>
            The Services are not tailored to comply with industry-specific
            regulations (Health Insurance Portability and Accountability Act
            (HIPAA), Federal Information Security Management Act (FISMA), etc.),
            so if your interactions would be subjected to such laws, you may not
            use the Services. You may not use the Services in a way that would
            violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
          <h5 className="h5">Your use of our Services</h5>
          <p>
            Subject to your compliance with these Legal Terms, including the
            <strong> "PROHIBITED ACTIVITIES"</strong> section below, we grant
            you a non-exclusive, non-transferable, revocable license to:
          </p>
          <ul>
            <li>access the Services; and</li>
            <li>
              download or print a copy of any portion of the Content to which
              you have properly gained access,
            </li>
          </ul>
          <p>
            solely for your personal, non-commercial use or internal business
            purpose.
          </p>
          <p>
            Except as set out in this section or elsewhere in our Legal Terms,
            no part of the Services and no Content or Marks may be copied,
            reproduced, aggregated, republished, uploaded, posted, publicly
            displayed, encoded, translated, transmitted, distributed, sold,
            licensed, or otherwise exploited for any commercial purpose
            whatsoever, without our express prior written permission.
          </p>
          <p>
            If you wish to make any use of the Services, Content, or Marks other
            than as set out in this section or elsewhere in our Legal Terms,
            please address your request to:{" "}
            <a
              href="mailto:hidayatsalim004@outlook.com"
              className="text-primary text-decoration-none"
            >
              hidayatsalim004@outlook.com
            </a>
            . If we ever grant you the permission to post, reproduce, or
            publicly display any part of our Services or Content, you must
            identify us as the owners or licensors of the Services, Content, or
            Marks and ensure that any copyright or proprietary notice appears or
            is visible on posting, reproducing, or displaying our Content.
          </p>
          <p>
            We reserve all rights not expressly granted to you in and to the
            Services, Content, and Marks.
          </p>
          <p>
            Any breach of these Intellectual Property Rights will constitute a
            material breach of our Legal Terms and your right to use our
            Services will terminate immediately.
          </p>
          <h5 className="h5">Your submissions</h5>
          <p>
            Please review this section and the "PROHIBITED ACTIVITIES" section
            carefully prior to using our Services to understand the (a) rights
            you give us and (b) obligations you have when you post or upload any
            content through the Services.
          </p>
          <p>
            Submissions: By directly sending us any question, comment,
            suggestion, idea, feedback, or other information about the Services
            ("Submissions"), you agree to assign to us all intellectual property
            rights in such Submission. You agree that we shall own this
            Submission and be entitled to its unrestricted use and dissemination
            for any lawful purpose, commercial or otherwise, without
            acknowledgment or compensation to you.
          </p>
          <p>
            You are responsible for what you post or upload: By sending us
            Submissions through any part of the Services you:
          </p>
          <ul>
            <li>
              confirm that you have read and agree with our{" "}
              <strong>"PROHIBITED ACTIVITIES"</strong> and will not post, send,
              publish, upload, or transmit through the Services any Submission
              that is illegal, harassing, hateful, harmful, defamatory, obscene,
              bullying, abusive, discriminatory, threatening to any person or
              group, sexually explicit, false, inaccurate, deceitful, or
              misleading; to the extent permissible by applicable law, waive any
              and all moral rights to any such Submission;
            </li>
            <li>
              warrant that any such Submission are original to you or that you
              have the necessary rights and licenses to submit such Submissions
              and that you have full authority to grant us the abovementioned
              rights in relation to your Submissions; and warrant and represent
              that your Submissions do not constitute confidential information.
            </li>
          </ul>
          <p>
            You are solely responsible for your Submissions and you expressly
            agree to reimburse us for any and all losses that we may suffer
            because of your breach of (a) this section, (b) any third party’s
            intellectual property rights, or (c) applicable law.
          </p>
        </section>
        <section className="mb-4" id="user-representations">
          <h4 className="h4">3. USER REPRESENTATIONS</h4>
          <p>By using the Services, you represent and warrant that:</p>
          <ul>
            <li>
              (1) you have the legal capacity and you agree to comply with these
              Legal Terms;
            </li>
            <li>(2) you are not under the age of 13;</li>
            <li>
              (3) you are not a minor in the jurisdiction in which you reside,
              or if a minor, you have received parental permission to use the
              Services;
            </li>
            <li>
              (4) you will not access the Services through automated or
              non-human means, whether through a bot, script or otherwise;
            </li>
            <li>
              (5) you will not use the Services for any illegal or unauthorized
              purpose; and
            </li>
            <li>
              (6) your use of the Services will not violate any applicable law
              or regulation.
            </li>
          </ul>
          <p>
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Services (or any portion thereof).
          </p>
        </section>
        <section className="mb-4" id="purchase-and-payment">
          <h4 className="h4">4. PURCHASES AND PAYMENT</h4>
          <p>We accept the following forms of payment:</p>
          {/* Tambahkan list metode pembayaran kalau ada */}

          <p>
            You agree to provide current, complete, and accurate purchase and
            account information for all purchases made via the Services. You
            further agree to promptly update account and payment information,
            including email address, payment method, and payment card expiration
            date, so that we can complete your transactions and contact you as
            needed.
          </p>
          <p>
            Sales tax will be added to the price of purchases as deemed required
            by us. We may change prices at any time. All payments shall be in US
            dollars.
          </p>
          <p>
            You agree to pay all charges at the prices then in effect for your
            purchases and any applicable shipping fees, and you authorize us to
            charge your chosen payment provider for any such amounts upon
            placing your order. We reserve the right to correct any errors or
            mistakes in pricing, even if we have already requested or received
            payment.
          </p>
          <p>
            We reserve the right to refuse any order placed through the
            Services. We may, in our sole discretion, limit or cancel quantities
            purchased per person, per household, or per order. These
            restrictions may include orders placed by or under the same customer
            account, the same payment method, and/or orders that use the same
            billing or shipping address. We reserve the right to limit or
            prohibit orders that, in our sole judgment, appear to be placed by
            dealers, resellers, or distributors.
          </p>
        </section>

        <section className="mb-4" id="policy">
          <h4 className="h4">5. POLICY</h4>
          <p>
            Please review our Return Policy prior to making any purchases:{" "}
            <a
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              Policy
            </a>
          </p>
        </section>

        <section className="mb-4" id="prohibited-activities">
          <h4 className="h4">6. PROHIBITED ACTIVITIES</h4>
          <p>
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
          </p>
          <p>As a user of the Services, you agree not to:</p>
          <ul>
            <li>
              Systematically retrieve data or other content from the Services to
              create or compile, directly or indirectly, a collection,
              compilation, database, or directory without written permission
              from us.
            </li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any
              attempt to learn sensitive account information such as user
              passwords.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related
              features of the Services, including features that prevent or
              restrict the use or copying of any Content or enforce limitations
              on the use of the Services and/or the Content contained therein.
            </li>
            <li>
              Disparage, tarnish, or otherwise harm, in our opinion, us and/or
              the Services.
            </li>
            <li>
              Use any information obtained from the Services in order to harass,
              abuse, or harm another person.
            </li>
            <li>
              Make improper use of our support services or submit false reports
              of abuse or misconduct.
            </li>
            <li>
              Use the Services in a manner inconsistent with any applicable laws
              or regulations.
            </li>
            <li>
              Engage in unauthorized framing of or linking to the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses,
              Trojan horses, or other material, including excessive use of
              capital letters and spamming (continuous posting of repetitive
              text), that interferes with any party’s uninterrupted use and
              enjoyment of the Services or modifies, impairs, disrupts, alters,
              or interferes with the use, features, functions, operation, or
              maintenance of the Services.
            </li>
            <li>
              Engage in any automated use of the system, such as using scripts
              to send comments or messages, or using any data mining, robots, or
              similar data gathering and extraction tools.
            </li>
            <li>
              Delete the copyright or other proprietary rights notice from any
              Content.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username
              of another user.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any
              material that acts as a passive or active information collection
              or transmission mechanism, including without limitation, clear
              graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as
              "spyware" or "passive collection mechanisms" or "pcms").
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services
              or the networks or services connected to the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or
              agents engaged in providing any portion of the Services to you.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent
              or restrict access to the Services, or any portion of the
              Services.
            </li>
            <li>
              Copy or adapt the Services' software, including but not limited to
              Flash, PHP, HTML, JavaScript, or other code.
            </li>
            <li>
              Except as permitted by applicable law, decipher, decompile,
              disassemble, or reverse engineer any of the software comprising or
              in any way making up a part of the Services.
            </li>
            <li>
              Except as may be the result of standard search engine or Internet
              browser usage, use, launch, develop, or distribute any automated
              system, including without limitation, any spider, robot, cheat
              utility, scraper, or offline reader that accesses the Services, or
              use or launch any unauthorized script or other software.
            </li>
            <li>
              Use a buying agent or purchasing agent to make purchases on the
              Services.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting
              usernames and/or email addresses of users by electronic or other
              means for the purpose of sending unsolicited email, or creating
              user accounts by automated means or under false pretenses.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or
              otherwise use the Services and/or the Content for any
              revenue-generating endeavor or commercial enterprise.
            </li>
            <li>
              Use the Services to advertise or offer to sell goods and services.
            </li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
        </section>
        <section className="mb-4" id="user-generated-contributions">
          <h4 className="h4">7. USER GENERATED CONTRIBUTIONS</h4>
          <p>
            The Services does not offer users to submit or post content. We may
            provide you with the opportunity to create, submit, post, display,
            transmit, perform, publish, distribute, or broadcast content and
            materials to us or on the Services, including but not limited to
            text, writings, video, audio, photographs, graphics, comments,
            suggestions, or personal information or other material
            (collectively, "Contributions").
          </p>
          <p>
            Contributions may be viewable by other users of the Services and
            through third-party websites. As such, any Contributions you
            transmit may be treated in accordance with the Services' Privacy
            Policy. When you create or make available any Contributions, you
            thereby represent and warrant that:
          </p>
          <ul>
            <li>
              The creation, distribution, transmission, public display, or
              performance, and the accessing, downloading, or copying of your
              Contributions do not and will not infringe the proprietary rights,
              including but not limited to the copyright, patent, trademark,
              trade secret, or moral rights of any third party.
            </li>
            <li>
              You are the creator and owner of or have the necessary licenses,
              rights, consents, releases, and permissions to use and to
              authorize us, the Services, and other users of the Services to use
              your Contributions in any manner contemplated by the Services and
              these Legal Terms.
            </li>
            <li>
              You have the written consent, release, and/or permission of each
              and every identifiable individual person in your Contributions to
              use the name or likeness of each and every such identifiable
              individual person to enable inclusion and use of your
              Contributions in any manner contemplated by the Services and these
              Legal Terms.
            </li>
            <li>
              Your Contributions are not false, inaccurate, or misleading.
            </li>
            <li>
              Your Contributions are not unsolicited or unauthorized
              advertising, promotional materials, pyramid schemes, chain
              letters, spam, mass mailings, or other forms of solicitation.
            </li>
            <li>
              Your Contributions are not obscene, lewd, lascivious, filthy,
              violent, harassing, libelous, slanderous, or otherwise
              objectionable (as determined by us).
            </li>
            <li>
              Your Contributions do not ridicule, mock, disparage, intimidate,
              or abuse anyone.
            </li>
            <li>
              Your Contributions are not used to harass or threaten (in the
              legal sense of those terms) any other person and to promote
              violence against a specific person or class of people.
            </li>
            <li>
              Your Contributions do not violate any applicable law, regulation,
              or rule.
            </li>
            <li>
              Your Contributions do not violate the privacy or publicity rights
              of any third party.
            </li>
            <li>
              Your Contributions do not violate any applicable law concerning
              child pornography, or otherwise intended to protect the health or
              well-being of minors.
            </li>
            <li>
              Your Contributions do not include any offensive comments that are
              connected to race, national origin, gender, sexual preference, or
              physical handicap.
            </li>
            <li>
              Your Contributions do not otherwise violate, or link to material
              that violates, any provision of these Legal Terms, or any
              applicable law or regulation.
            </li>
          </ul>
          <p>
            Any use of the Services in violation of the foregoing violates these
            Legal Terms and may result in, among other things, termination or
            suspension of your rights to use the Services.
          </p>
        </section>
        <section className="mb-4" id="contribution-license">
          <h4 className="h4">8. CONTRIBUTION LICENSE</h4>
          <p>
            You and Services agree that we may access, store, process, and use
            any information and personal data that you provide following the
            terms of the Privacy Policy and your choices (including settings).
          </p>
          <p>
            By submitting suggestions or other feedback regarding the Services,
            you agree that we can use and share such feedback for any purpose
            without compensation to you.
          </p>
          <p>
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Services. You are solely responsible for your Contributions to
            the Services and you expressly agree to exonerate us from any and
            all responsibility and to refrain from any legal action against us
            regarding your Contributions.
          </p>
        </section>
        <section className="mb-4" id="guidelines-for-reviews">
          <h4 className="h4">9. GUIDELINES FOR REVIEWS</h4>
          <p>
            We may provide you areas on the Services to leave reviews or
            ratings. When posting a review, you must comply with the following
            criteria:
          </p>
          <ul>
            <li>
              You should have firsthand experience with the person/entity being
              reviewed.
            </li>
            <li>
              Your reviews should not contain offensive profanity, or abusive,
              racist, offensive, or hateful language.
            </li>
            <li>
              Your reviews should not contain discriminatory references based on
              religion, race, gender, national origin, age, marital status,
              sexual orientation, or disability.
            </li>
            <li>
              Your reviews should not contain references to illegal activity.
            </li>
            <li>
              You should not be affiliated with competitors if posting negative
              reviews.
            </li>
            <li>
              You should not make any conclusions as to the legality of conduct.
            </li>
            <li>You may not post any false or misleading statements.</li>
            <li>
              You may not organize a campaign encouraging others to post
              reviews, whether positive or negative.
            </li>
          </ul>
          <p>
            We may accept, reject, or remove reviews in our sole discretion. We
            have absolutely no obligation to screen reviews or to delete
            reviews, even if anyone considers reviews objectionable or
            inaccurate. Reviews are not endorsed by us, and do not necessarily
            represent our opinions or the views of any of our affiliates or
            partners.
          </p>
          <p>
            We do not assume liability for any review or for any claims,
            liabilities, or losses resulting from any review. By posting a
            review, you hereby grant to us a perpetual, nonexclusive, worldwide,
            royalty-free, fully paid, assignable, and sublicensable right and
            license to reproduce, modify, translate, transmit by any means,
            display, perform, and/or distribute all content relating to review.
          </p>
        </section>
        <section className="mb-4" id="third-party-websites-and-content">
          <h4 className="h4">10. THIRD-PARTY WEBSITES AND CONTENT</h4>
          <p>
            The Services may contain (or you may be sent via the Site) links to
            other websites ("Third-Party Websites") as well as articles,
            photographs, text, graphics, pictures, designs, music, sound, video,
            information, applications, software, and other content or items
            belonging to or originating from third parties ("Third-Party
            Content").
          </p>
          <p>
            Such Third-Party Websites and Third-Party Content are not
            investigated, monitored, or checked for accuracy, appropriateness,
            or completeness by us, and we are not responsible for any
            Third-Party Websites accessed through the Services or any
            Third-Party Content posted on, available through, or installed from
            the Services, including the content, accuracy, offensiveness,
            opinions, reliability, privacy practices, or other policies of or
            contained in the Third-Party Websites or the Third-Party Content.
          </p>
          <p>
            Inclusion of, linking to, or permitting the use or installation of
            any Third-Party Websites or any Third-Party Content does not imply
            approval or endorsement thereof by us. If you decide to leave the
            Services and access the Third-Party Websites or to use or install
            any Third-Party Content, you do so at your own risk, and you should
            be aware these Legal Terms no longer govern.
          </p>
          <p>
            You should review the applicable terms and policies, including
            privacy and data gathering practices, of any website to which you
            navigate from the Services or relating to any applications you use
            or install from the Services. Any purchases you make through
            Third-Party Websites will be through other websites and from other
            companies, and we take no responsibility whatsoever in relation to
            such purchases which are exclusively between you and the applicable
            third party.
          </p>
          <p>
            You agree and acknowledge that we do not endorse the products or
            services offered on Third-Party Websites and you shall hold us
            blameless from any harm caused by your purchase of such products or
            services.
          </p>
          <p>
            Additionally, you shall hold us blameless from any losses sustained
            by you or harm caused to you relating to or resulting in any way
            from any Third-Party Content or any contact with Third-Party
            Websites.
          </p>
        </section>
        <section className="mb-4" id="services-management">
          <h4 className="h4">11. SERVICES MANAGEMENT</h4>
          <p>We reserve the right, but not the obligation, to:</p>
          <ul>
            <li>Monitor the Services for violations of these Legal Terms;</li>
            <li>
              Take appropriate legal action against anyone who, in our sole
              discretion, violates the law or these Legal Terms, including
              without limitation, reporting such user to law enforcement
              authorities;
            </li>
            <li>
              In our sole discretion and without limitation, refuse, restrict
              access to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof;
            </li>
            <li>
              In our sole discretion and without limitation, notice, or
              liability, to remove from the Services or otherwise disable all
              files and content that are excessive in size or are in any way
              burdensome to our systems; and
            </li>
            <li>
              Otherwise manage the Services in a manner designed to protect our
              rights and property and to facilitate the proper functioning of
              the Services.
            </li>
          </ul>
        </section>
        <section className="mb-4" id="privacy-policy">
          <h4 className="h4">12. PRIVACY POLICY</h4>
          <p>
            We care about data privacy and security. Please review our
            <a
              href="https://galaxybuilder.vercel.app/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-none"
            >
              {" "}
              Privacy Policy
            </a>
            . By using the Services, you agree to be bound by our Privacy
            Policy, which is incorporated into these Legal Terms.
          </p>
          <p>
            Please be advised the Services are hosted in the United States. If
            you access the Services from any other region of the world with laws
            or other requirements governing personal data collection, use, or
            disclosure that differ from applicable laws in the United States,
            then through your continued use of the Services, you are
            transferring your data to the United States, and you expressly
            consent to have your data transferred to and processed in the United
            States.
          </p>
          <p>
            Further, we do not knowingly accept, request, or solicit information
            from children or knowingly market to children. Therefore, in
            accordance with the U.S. Children’s Online Privacy Protection Act,
            if we receive actual knowledge that anyone under the age of 13 has
            provided personal information to us without the requisite and
            verifiable parental consent, we will delete that information from
            the Services as quickly as is reasonably practical.
          </p>
        </section>
        <section className="mb-4" id="term-and-termination">
          <h4 className="h4">13. TERM AND TERMINATION</h4>
          <p>
            These Legal Terms shall remain in full force and effect while you
            use the Services.{" "}
            <strong>
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
              RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
              LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
              BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
              FOR NO REASON
            </strong>
            , including without limitation for breach of any representation,
            warranty, or covenant contained in these Legal Terms or of any
            applicable law or regulation.
          </p>
          <p>
            WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE
            ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
            WARNING, IN OUR SOLE DISCRETION.
          </p>
          <p>
            If we terminate or suspend your account for any reason, you are
            prohibited from registering and creating a new account under your
            name, a fake or borrowed name, or the name of any third party, even
            if you may be acting on behalf of the third party.
          </p>
          <p>
            In addition to terminating or suspending your account, we reserve
            the right to take appropriate legal action, including without
            limitation pursuing civil, criminal, and injunctive redress.
          </p>
        </section>
        <section className="mb-4" id="modifications-and-interruptions">
          <h4 className="h4">14. MODIFICATIONS AND INTERRUPTIONS</h4>
          <p>
            We reserve the right to change, modify, or remove the contents of
            the Services at any time or for any reason at our sole discretion
            without notice. However, we have no obligation to update any
            information on our Services. We will not be liable to you or any
            third party for any modification, price change, suspension, or
            discontinuance of the Services.
          </p>
          <p>
            We cannot guarantee the Services will be available at all times. We
            may experience hardware, software, or other problems or need to
            perform maintenance related to the Services, resulting in
            interruptions, delays, or errors. We reserve the right to change,
            revise, update, suspend, discontinue, or otherwise modify the
            Services at any time or for any reason without notice to you.
          </p>
          <p>
            You agree that we have no liability whatsoever for any loss, damage,
            or inconvenience caused by your inability to access or use the
            Services during any downtime or discontinuance of the Services.
            Nothing in these Legal Terms will be construed to obligate us to
            maintain and support the Services or to supply any corrections,
            updates, or releases in connection therewith.
          </p>
        </section>
        <section className="mb-4" id="governing-law">
          <h4 className="h4">15. GOVERNING LAW</h4>
          <p>
            These Legal Terms shall be governed by and defined following the
            laws of Indonesia. GalaxyBuilder-oss and yourself irrevocably
            consent that the courts of Indonesia shall have exclusive
            jurisdiction to resolve any dispute which may arise in connection
            with these Legal Terms.
          </p>
        </section>
        <section className="mb-4" id="dispute-resolution">
          <h4 className="h4">16. DISPUTE RESOLUTION</h4>
          <p>
            You agree to irrevocably submit all disputes related to these Legal
            Terms or the legal relationship established by these Legal Terms to
            the jurisdiction of the __________ courts. GalaxyBuilder-oss shall
            also maintain the right to bring proceedings as to the substance of
            the matter in the courts of the country where you reside or, if
            these Legal Terms are entered into in the course of your trade or
            profession, the state of your principal place of business.
          </p>
        </section>

        <section className="mb-4" id="corrections">
          <h4 className="h4">17. CORRECTIONS</h4>
          <p>
            There may be information on the Services that contains typographical
            errors, inaccuracies, or omissions, including descriptions, pricing,
            availability, and various other information. We reserve the right to
            correct any errors, inaccuracies, or omissions and to change or
            update the information on the Services at any time, without prior
            notice.
          </p>
        </section>
        <section className="mb-4" id="disclaimer">
          <h4 className="h4">18. DISCLAIMER</h4>
          <p>
            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
            AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
            THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
            THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
            COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES
            OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO
            LIABILITY OR RESPONSIBILITY FOR ANY: (1) ERRORS, MISTAKES, OR
            INACCURACIES OF CONTENT AND MATERIALS; (2) PERSONAL INJURY OR
            PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
            ACCESS TO AND USE OF THE SERVICES; (3) ANY UNAUTHORIZED ACCESS TO OR
            USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
            AND/OR FINANCIAL INFORMATION STORED THEREIN; (4) ANY INTERRUPTION OR
            CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (5) ANY BUGS,
            VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
            THROUGH THE SERVICES BY ANY THIRD PARTY; (6) ANY ERRORS OR OMISSIONS
            IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
            INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED,
            OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
          </p>
          <p>
            WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
            ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY
            THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR
            MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
            WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
            MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS
            OF PRODUCTS OR SERVICES.
          </p>
          <p>
            AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
            IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
            CAUTION WHERE APPROPRIATE.
          </p>
        </section>
        <section className="mb-4" id="limitations-of-liability">
          <h4 className="h4">19. LIMITATIONS OF LIABILITY</h4>
          <p>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
            EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
            PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
            YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        <section className="mb-4" id="indemnification">
          <h4 className="h4">20. INDEMNIFICATION</h4>
          <p>
            You agree to defend, indemnify, and hold us harmless, including our
            subsidiaries, affiliates, and all of our respective officers,
            agents, partners, and employees, from and against any loss, damage,
            liability, claim, or demand, including reasonable attorneys’ fees
            and expenses, made by any third party due to or arising out of:
          </p>
          <ul>
            <li>use of the Services;</li>
            <li>breach of these Legal Terms;</li>
            <li>
              any breach of your representations and warranties set forth in
              these Legal Terms;
            </li>
            <li>
              your violation of the rights of a third party, including but not
              limited to intellectual property rights;
            </li>
            <li>
              any overt harmful act toward any other user of the Services with
              whom you connected via the Services.
            </li>
          </ul>
          <p>
            Notwithstanding the foregoing, we reserve the right, at your
            expense, to assume the exclusive defense and control of any matter
            for which you are required to indemnify us, and you agree to
            cooperate, at your expense, with our defense of such claims. We will
            use reasonable efforts to notify you of any such claim, action, or
            proceeding which is subject to this indemnification upon becoming
            aware of it.
          </p>
        </section>

        <section className="mb-4" id="user-data">
          <h4 className="h4">21. USER DATA</h4>
          <p>
            We will maintain certain data that you transmit to the Services for
            the purpose of managing the performance of the Services, as well as
            data relating to your use of the Services. Although we perform
            regular routine backups of data, you are solely responsible for all
            data that you transmit or that relates to any activity you have
            undertaken using the Services.
          </p>
          <p>
            You agree that we shall have no liability to you for any loss or
            corruption of any such data, and you hereby waive any right of
            action against us arising from any such loss or corruption of such
            data.
          </p>
        </section>
        <section
          className="mb-4"
          id="electronic-communications-transactions-and-signatures"
        >
          <h4 className="h4">
            22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </h4>
          <p>
            Visiting the Services, sending us emails, and completing online
            forms constitute electronic communications. You consent to receive
            electronic communications, and you agree that all agreements,
            notices, disclosures, and other communications we provide to you
            electronically, via email and on the Services, satisfy any legal
            requirement that such communication be in writing.
          </p>
          <p>
            YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
            ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
            POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US
            OR VIA THE SERVICES. You hereby waive any rights or requirements
            under any statutes, regulations, rules, ordinances, or other laws in
            any jurisdiction which require an original signature or delivery or
            retention of non-electronic records, or to payments or the granting
            of credits by any means other than electronic means.
          </p>
        </section>

        <section className="mb-4" id="california-users-and-residents">
          <h4 className="h4">23. CALIFORNIA USERS AND RESIDENTS</h4>
          <p>
            If any complaint with us is not satisfactorily resolved, you can
            contact the Complaint Assistance Unit of the Division of Consumer
            Services of the California Department of Consumer Affairs in writing
            at 1625 North Market Blvd., Suite N 112, Sacramento, California
            95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </section>
        <section className="mb-4" id="miscellaneous">
          <h4 className="h4">24. MISCELLANEOUS</h4>
          <p>
            These Legal Terms and any policies or operating rules posted by us
            on the Services or in respect to the Services constitute the entire
            agreement and understanding between you and us. Our failure to
            exercise or enforce any right or provision of these Legal Terms
            shall not operate as a waiver of such right or provision.
          </p>
          <p>
            These Legal Terms operate to the fullest extent permissible by law.
            We may assign any or all of our rights and obligations to others at
            any time. We shall not be responsible or liable for any loss,
            damage, delay, or failure to act caused by any cause beyond our
            reasonable control.
          </p>
          <p>
            If any provision or part of a provision of these Legal Terms is
            determined to be unlawful, void, or unenforceable, that provision or
            part of the provision is deemed severable from these Legal Terms and
            does not affect the validity and enforceability of any remaining
            provisions.
          </p>
          <p>
            There is no joint venture, partnership, employment or agency
            relationship created between you and us as a result of these Legal
            Terms or use of the Services. You agree that these Legal Terms will
            not be construed against us by virtue of having drafted them.
          </p>
          <p>
            You hereby waive any and all defenses you may have based on the
            electronic form of these Legal Terms and the lack of signing by the
            parties hereto to execute these Legal Terms.
          </p>
        </section>

        <section className="mb-4" id="contact-us">
          <h4 className="h4">25. CONTACT US</h4>
          <p>
            In order to resolve a complaint regarding the Services or to receive
            further information regarding use of the Services, please contact us
            at:
          </p>
          <p>
            <strong>GalaxyBuilder-oss</strong>
            <br />
            <strong>Jalan Dakota no 8a</strong>
            <br />
            <strong>Bandung, Jawa Barat 40195</strong>
            <br />
            <strong>Indonesia</strong>
            <br />
            <strong><a href="mailto:hidayatsalim004@outlook.com">
              hidayatsalim004@outlook.com
            </a></strong>
          </p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
