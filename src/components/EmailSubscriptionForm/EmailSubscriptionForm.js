import "../../styles/sib-styles.css";
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";

// Edit this form at https://app.brevo.com/contact/forms/subscription
export const SUBSCRIBE_FORM_ACTION =
  "https://ba1b46a4.sibforms.com/serve/MUIFALENzkTs43Bz2oK2mqanYts9FqB2q9xXeiUdrBGtyBzlvyxpyPdxJOAjqLNBdf9efEszcAdZ-HkPix_g9S7htenfvuq7SSlBV2fHdpU_8CVZI40Hwf3kN7SIMBxNgAnCyO8vPgKGOzHYp1Nwe7-dk8b0a1zC4Gz4_QBZTgk9zMRgsT5hG964DPEoBm7A5sipONQs-kJTsTFg";

export const EmailSubscriptionForm = ({ isWide = true }) => {
  const inputRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <Helmet>
        <style>
          {`
            /* Apply border-box to all elements for consistent sizing */
            *, *::before, *::after {
              box-sizing: border-box;
            }

            /* General Font and Color Styling */
            #sib-container, 
            .sib-form, 
            .sib-container--large,
            .sib-form-block, 
            .sib-input, 
            .form__entry, 
            .entry__label, 
            .entry__field,
            .sib-form-message-panel__inner-text,
            .sib-form-block__button {
              font-family: "IBM Plex Sans VF", "Helvetica Neue", Arial, sans-serif !important;
              color: #ffffff !important;
            }

            /* Placeholder styling */
            #sib-container input:-ms-input-placeholder,
            #sib-container input::placeholder,
            #sib-container textarea::placeholder {
              text-align: left;
              font-family: "IBM Plex Sans VF", "Helvetica Neue", Arial, sans-serif;
              color: #c0ccda;
            }

            /* Link styling */
            #sib-container a {
              text-decoration: underline;
              color: #2BB2FC;
              font-family: "IBM Plex Sans VF", "Helvetica Neue", Arial, sans-serif;
            }

            /* Form container styling */
            .sib-form {
              text-align: center;
              background-color: transparent;
              padding: 10px;
              border-radius: 8px;
              transition: padding 0.3s ease;
              width: 100%; /* Ensure full width */
            }

            .sib-container--large {
              background-color: transparent !important;
              color: #ffffff !important;
              padding: 10px; /* Adjusted padding for better spacing */
              border-radius: 8px;
              border: none;
              max-width: 100%; /* Remove max-width to allow full width */
              width: 100%; /* Ensure full width */
            }

            /* Input field styling */
            #sib-container input.input,
            #sib-container textarea.input {
              background-color: rgb(22, 22, 22);
              color: #ffffff;
              border: 1px solid #C0CCD9;
              width: 100%; /* Ensure full width */
              padding: 10px;
              border-radius: 4px;
            }

            /* Button styling */
            .sib-form-block__button {
              font-size: 16px;
              font-weight: 700;
              color: #FFFFFF;
              background-color: rgb(63, 153, 88);
              border-radius: 3px;
              border: none;
              padding: 10px;
              cursor: pointer;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.3s ease;
            }

            /* Hover effect for the button */
            .sib-form-block__button:hover {
              background-color: rgb(53, 143, 78);
            }

            /* Error Message Styling */
            .sib-form-message-panel__inner-text {
              color: #661d1d;
            }

            /* Success Message Styling */
            #success-message .sib-form-message-panel__inner-text {
              color: #085229;
            }

            /* Responsive Styles */
            @media (max-width: 600px) {
              .sib-container--large {
                max-width: 100% !important;
              }

              .sib-form {
                padding-bottom: 50px;
              }

              .sib-form-block__button {
                width: 100% !important;
              }
            }

            /* Hide reCAPTCHA badge */
            .grecaptcha-badge {
              filter: invert(1);
              visibility: hidden;
            }

            /* Custom Title and Description Styling */
            .form-title {
              font-size: 32px;
              text-align: left;
              font-weight: 700;
              color: #FFFFFF;
              background-color: transparent;
              width: 100%;
            }

            .form-description {
              font-size: 16px;
              text-align: left;
              color: #FFFFFF;
              background-color: transparent;
              width: 100%;
            }

            /* Add extra padding at the bottom for mobile to prevent keyboard overlap */
            @media (max-width: 600px) {
              body {
                padding-bottom: 2em;
              }
            }

            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
        {/* Link to Brevo Stylesheet */}
        {/* <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        /> */}
        {/* Ensure viewport is set correctly */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Brevo Form HTML */}
      <iframe
        src="https://ba1b46a4.sibforms.com/serve/MUIFAMfNliVtM3nAiWPC1PWopJTGeOmsUSeFQ1zLEQkfVYF1ECSa45BS573DiENcXiKbQbwHbUlfoWi0Ex0Vad5Tjl1p76gFaJsSeN4RUx5DLFY6GvTqay2p-wlY2hJzIlHNhCPXhpFe8MzU0chUSz80Fo4uGKTumks9nIT5BP-Syd-OrJ1pTOCawD3OaS8T4PXjYsfBHzWAUVL-"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: 490,
          width: "100%",
        }}
      ></iframe>
    </>
  );
};
