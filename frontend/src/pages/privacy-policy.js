import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="px-20 py-10">
        <div className="space-y-2 my-5">
          <h1 className="text-5xl text-purple">Privacy Policy</h1>
          <p>Effective Date: Sep 30,2023</p>
        </div>
        <div className="space-y-10">
          <p>
            Your privacy is important to us. This Privacy Policy explains how
            Tildd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
            uses, and protects your personal information when you use our
            services. By accessing or using our services, you consent to the
            practices described in this Privacy Policy.
          </p>
          <div>
            <h2 className="text-3xl">1. Information We Collect</h2>
            <p>
              We may collect the following types of information when you use our
              services:
            </p>
            <ul className="pl-10 list-disc">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and other contact information that you provide
                when registering or contacting us.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you
                use our website and services, including log data, device
                information, and location information if permitted by your
                device settings.
              </li>
              <li>
                <strong>Payment Information:</strong> If you make payments
                through our website, we may collect payment card information or
                other financial information to process your transactions
                securely.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">2. How We Use Your Information</h2>
            <p>We may use your information for the following purposes:</p>

            <ul className="pl-10 list-disc">
              <li>Provide and improve our services</li>
              <li>
                Communicate with you, respond to your inquiries, and send
                important notices
              </li>
              <li>Process payments and provide support</li>
              <li>Ensure the security of our services and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl">3. Information Sharing</h2>
            <p>We may share your information with:</p>

            <ul className="pl-10 list-disc">
              <li>
                Service providers who assist us in providing and improving our
                services
              </li>
              <li>
                Law enforcement or government agencies as required by applicable
                laws
              </li>
              <li>
                With your consent or as otherwise disclosed at the time of data
                collection
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">4. Your Choices</h2>
            <p>You can control your personal information by:</p>

            <ul className="pl-10 list-disc">
              <li>Updating your account settings</li>
              <li>Unsubscribing from marketing communications</li>
              <li>
                Requesting access to or deletion of your data, subject to
                applicable legal requirements
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">5. Security</h2>
            <p>
              We take reasonable measures to protect your personal information.
              However, no data transmission over the internet is completely
              secure, and we cannot guarantee the security of your data.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any significant changes by posting the revised
              Privacy Policy on our website.
            </p>
          </div>
          <div>
            {" "}
            <h2 className="text-3xl">7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at <strong>tilddforme@gmail.com</strong>
            </p>
            <p>Last updated: Sep 30,2023</p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
