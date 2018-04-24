import React from "react";

const isValidUrl = urlToCheck =>
  /https?:\/\/www\.apartments\.com\/[\w-]+\/\w{7}\/?$/.test(urlToCheck);

const UrlSubmissionForm = props => {
  return (
    <form className="urlSubmit" onSubmit={props.handleSubmit}>
      <input
        className={`${
          isValidUrl(props.urlToAdd) ? "valid" : "notValid"
        } shadow`}
        onChange={props.handleChange}
        value={props.urlToAdd}
        type="text"
        name="urlToAdd"
        placeholder="Enter an apartment URL"
      />
      <button className="submitBtn shadow">Enter</button>
    </form>
  );
};

export default UrlSubmissionForm;
