import React from "react";
import ReactMarkdown from "react-markdown";
const RecipeCode = (props) => {
 return (
    <section className="api" aria-live="polite">
      <h2>Chef Snop Recommends :</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default RecipeCode;
