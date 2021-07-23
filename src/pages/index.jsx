import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Temporary from "./Temporary";

export default function Index() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      image: file(base: { eq: "monogram_dark.png" }) {
        publicURL
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;
  return (
    <div>
      <h1>{title}</h1> <p>{description}</p>
      <img alt="Monogram logo saying iPe" src={data.image.publicURL}></img>
      <Temporary />
    </div>
  );
}
