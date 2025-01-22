// src/components/EmailSubscriptionForm/EmailSubscriptionForm.js
import React, { useRef, useState, useEffect } from "react";

// const SENDGRID_IFRAME = (
//   <iframe
//     src="https://cdn.forms-content-1.sg-form.com/d58ad9f4-b028-11ef-b98b-32170b0fc806"
//     loading="lazy"
//     title="Newsletter subscription form"
//     style={{
//       marginLeft: "auto",
//       marginRight: "auto",
//       minHeight: 442,
//       width: "100%",
//     }}
//   />
// );

const SUBSTACK_IFRAME = (
  <iframe
    src="https://passengerlounge.substack.com/embed"
    title="Newsletter subscription form"
    loading="lazy"
    style={{ width: "98%" }}
  />
);

export const EmailSubscriptionForm = ({ isLeftSideBar = false }) => {
  const placeholderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = placeholderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "400px",
        threshold: 0.01,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div style={isLeftSideBar ? { marginTop: "50%" } : {}} ref={placeholderRef}>
      {isVisible ? (
        SUBSTACK_IFRAME
      ) : (
        <div
          style={{
            width: "98%",
            height: "100px",
            background: "transparent",
            textAlign: "center",
            lineHeight: "100px",
            color: "#fff",
          }}
        >
          Loading…
        </div>
      )}
    </div>
  );
};
