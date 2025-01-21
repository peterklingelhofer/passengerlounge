import React from "react";

export const EmailSubscriptionForm = ({ isLeftSideBar = false }) => {
  return (
    // <iframe
    //   src="https://cdn.forms-content-1.sg-form.com/d58ad9f4-b028-11ef-b98b-32170b0fc806"
    //   style={{
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     minHeight: 442,
    //     width: "100%",
    //   }}
    //   title="Newsletter subscription form"
    // />
    <div style={isLeftSideBar ? { marginTop: "50%" } : {}}>
      <iframe
        src="https://passengerlounge.substack.com/embed"
        title="newsletter-subscribe"
        style={{ width: "98%" }}
      />
    </div>
  );
};
