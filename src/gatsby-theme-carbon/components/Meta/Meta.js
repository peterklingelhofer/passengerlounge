import React from "react";
import { Helmet } from "react-helmet";
// import Meta from "gatsby-theme-carbon/src/components/Meta";

import { useMetadata } from "gatsby-theme-carbon/src/util/hooks";

const Meta = ({ pageTitle, pageDescription, pageKeywords, titleType }) => {
  const { title, description, keywords, lang } = useMetadata();

  const getPageTitle = () => {
    switch (titleType) {
      case "page":
        // use site title for fallback
        return pageTitle || title;
      case "site":
        return title;
      case "append":
        return `${title}${pageTitle ? ` – ${pageTitle}` : ""}`;
      case "prepend":
        return `${pageTitle ? `${pageTitle} – ` : ""}${title}`;
      default:
        return null;
    }
  };

  return (
    <Helmet
      title={getPageTitle()}
      meta={[
        {
          name: "description",
          content: pageDescription || description,
        },
        {
          name: "keywords",
          content: pageKeywords || keywords,
        },
      ]}
    >
      <html lang={lang} />
      <meta
        name="facebook-domain-verification"
        content="e39zoadym49rqcj2sb65ij1yw6l94k"
      />
    </Helmet>
  );
};

export default Meta;
