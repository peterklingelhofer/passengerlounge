// src/components/EmailSubscriptionForm/EmailSubscriptionForm.js
import React from "react";

export const EmailSubscriptionForm = ({ isLeftSideBar = false }) => {
  return (
    // <iframe
    //   src="https://cdn.forms-content-1.sg-form.com/d58ad9f4-b028-11ef-b98b-32170b0fc806"
    //   loading="lazy"
    //   title="Newsletter subscription form"
    //   style={{
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     minHeight: 442,
    //     width: "100%",
    //   }}
    // />
    <div style={isLeftSideBar ? { marginTop: "50%" } : {}}>
      <iframe
        src="https://passengerlounge.substack.com/embed"
        title="Newsletter subscription form"
        loading="lazy"
        style={{ width: "98%" }}
      />
    </div>
  );
};
