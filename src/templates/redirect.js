import React from "react";
import { Helmet } from "react-helmet";

export default function Redirect({ pageContext }) {
  return (
    <div>
      <Helmet>
        <meta http-equiv="refresh" content={`0; URL='${pageContext.url}'`} />
      </Helmet>
      Redirecting to <a href={pageContext.url}>{pageContext.url}</a>...
    </div>
  );
}
