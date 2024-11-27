import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

const BrevoForm = ({ isWide = true }) => {
  // Create refs for the input and button
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Load external scripts
    const script = document.createElement("script");
    script.src = "https://sibforms.com/forms/end-form/build/main.js";
    script.async = true;
    document.body.appendChild(script);

    const recaptchaScript = document.createElement("script");
    recaptchaScript.src =
      "https://www.google.com/recaptcha/api.js?render=6LeZMIoqAAAAAMtwsAV1Y9b-DsmRkJXOr1QbE6AQ&hl=en";
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.body.appendChild(recaptchaScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(recaptchaScript);
    };
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      // Only apply on narrow widths (mobile)
      if (window.innerWidth <= 600) {
        // Use a timeout to ensure the keyboard has appeared
        setTimeout(() => {
          // Scroll the input into view
          if (inputRef.current) {
            inputRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          // Optionally, also scroll the button into view
          if (buttonRef.current) {
            buttonRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300); // Adjust the timeout as needed
      }
    };

    const inputCurrent = inputRef.current;
    if (inputCurrent) {
      inputCurrent.addEventListener("focus", handleFocus);
    }

    // Cleanup event listener on unmount
    return () => {
      if (inputCurrent) {
        inputCurrent.removeEventListener("focus", handleFocus);
      }
    };
  }, []);

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
        <link
          rel="stylesheet"
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
        />
        {/* Ensure viewport is set correctly */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Brevo Form HTML */}
      <div
        className="sib-form"
        style={{
          textAlign: "center",
          borderRadius: "8px",
          width: "100%", // Ensure full width
        }}
      >
        <div
          id="sib-form-container"
          className="sib-form-container"
          style={{ width: "100%" }}
        >
          {/* Error Message */}
          <div
            id="error-message"
            className="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              color: "#661d1d",
              backgroundColor: "#ffeded",
              borderRadius: "3px",
              borderColor: "#ff4949",
              maxWidth: "540px",
              margin: "0 auto",
              display: "none",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              {/* SVG Icon */}
              <svg
                viewBox="0 0 512 512"
                className="sib-icon sib-notification__icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              >
                <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Your subscription could not be saved. Please try again.
              </span>
            </div>
          </div>

          {/* Success Message */}
          <div
            id="success-message"
            className="sib-form-message-panel"
            style={{
              fontSize: "16px",
              textAlign: "left",
              color: "#085229",
              backgroundColor: "#e7faf0",
              borderRadius: "3px",
              borderColor: "#13ce66",
              maxWidth: "540px",
              margin: "0 auto",
              display: "none",
            }}
          >
            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
              {/* SVG Icon */}
              <svg
                viewBox="0 0 512 512"
                className="sib-icon sib-notification__icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              >
                <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
              </svg>
              <span className="sib-form-message-panel__inner-text">
                Your subscription has been successful.
              </span>
            </div>
          </div>

          {/* Form Container */}
          <div
            id="sib-container"
            className="sib-container--large sib-container--vertical"
            style={{
              textAlign: "center",
              borderRadius: "3px",
              border: "none",
              direction: "ltr",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <form
              id="sib-form"
              method="POST"
              action="https://ba1b46a4.sibforms.com/serve/MUIFAEU9npVwRv42Mqf-n4sgtNmbLn6MDH9hT5I5FXm5ZJidV0swp_WIF1iRyl0eVOI4k2xvy1NyNo9F1W889rm0cT1_rgW9GzqG5BKPCqmHz-Lwx2S71e9AEH3einDAvjwvPI6vJn_bOlx2P2YBa9BLOebsU4tQIPDDgtKMu9y2ZhRHHPqfpV-L1d8V-ccArrJVdmHUbo9E4p2V"
              data-type="subscription"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                width: "100%",
              }}
            >
              {/* Conditionally Render Form Title and Description */}
              {isWide ? (
                <>
                  {/* Form Title */}
                  <div style={{ padding: "8px 0", width: "100%" }}>
                    <div className="form-title">Let's stay in touch</div>
                  </div>

                  {/* Form Description */}
                  <div style={{ padding: "8px 0", width: "100%" }}>
                    <div className="form-description">
                      Enter your email to stay up to date with the latest
                      updates from Passenger Lounge.
                    </div>
                  </div>
                </>
              ) : null}

              {/* Email Input */}
              <div style={{ padding: "8px 0", width: "100%" }}>
                <div
                  className="sib-input sib-form-block"
                  style={{ width: "100%", padding: "0" }}
                >
                  <div className="form__entry entry_block">
                    <div className="form__label-row">
                      <div className="entry__field">
                        <input
                          ref={inputRef} // Attach ref here
                          className="input"
                          type="email"
                          id="EMAIL"
                          name="EMAIL"
                          autoComplete="off"
                          placeholder="e.g., fan@example.com"
                          data-required="true"
                          required
                          style={{
                            padding: "10px",
                            width: "100%",
                            borderRadius: "4px",
                            border: "1px solid #C0CCD9",
                            backgroundColor: "rgb(22, 22, 22)",
                            color: "#FFFFFF",
                          }}
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    <label
                      className="entry__error entry__error--primary"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        color: "#661d1d",
                        backgroundColor: "#ffeded",
                        borderRadius: "3px",
                        borderColor: "#ff4949",
                        display: "none",
                      }}
                    ></label>
                    {/* Conditionally Render Specification */}
                    {isWide ? null : (
                      <label
                        className="entry__specification"
                        style={{
                          fontSize: "12px",
                          textAlign: "left",
                          color: "#8390A4",
                        }}
                      >
                        Enter your email to stay up to date with the latest
                        updates from Passenger Lounge.
                      </label>
                    )}
                    {/* Specification */}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ padding: "8px 0", width: "100%" }}>
                <div
                  className="sib-form-block"
                  style={{ textAlign: "left", width: "100%", padding: "0" }}
                >
                  <button
                    ref={buttonRef} // Attach ref here
                    className="sib-form-block__button sib-form-block__button-with-loader"
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      borderRadius: "3px",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    type="submit"
                  >
                    {/* Loader Icon */}
                    <svg
                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                      viewBox="0 0 512 512"
                      style={{ marginRight: "8px", verticalAlign: "middle" }}
                    >
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    Subscribe {isWide ? "to our newsletter" : ""}
                  </button>
                </div>
              </div>

              {/* reCAPTCHA (Hidden) */}
              <div style={{ padding: "8px 0", display: "none" }}>
                <div
                  className="g-recaptcha-v3"
                  data-sitekey="6LeZMIoqAAAAAMtwsAV1Y9b-DsmRkJXOr1QbE6AQ"
                ></div>
              </div>

              {/* Hidden Inputs */}
              <input
                type="text"
                name="email_address_check"
                value=""
                className="input--hidden"
                style={{ display: "none" }}
              />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrevoForm;
