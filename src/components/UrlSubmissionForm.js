import React from "react";
import styled from "styled-components";

const shadow = "box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1)";

const UrlForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0.5em;
`;

const UrlInput = styled.input`
  ${shadow};
  font-size: 1.2em;
  padding: 0.2em;
  border: 2px solid #888;
  border-radius: 0.25em;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  &:focus {
    outline: none;
  }
`;

const Submit = styled.button`
  ${shadow};
  outline: none;
  width: auto;
  font-weight: bold;
  padding: 0.2em 0.6em;
  border: 2px solid #888;
  border-left: 0;
  border-radius: 0.25em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: gray;
  font-size: 1em;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const Message = styled.div`
  text-align: center;
  height: 10px;
`

const isValidUrl = urlToCheck =>
  /^https?:\/\/www\.apartments\.com\/[\w-]+\/\w{7}\/?$/.test(urlToCheck);

const UrlSubmissionForm = props => {
  const urlInState = props.currentApts
    .map(apt => apt.url)
    .includes(props.urlToAdd);
  return (
    <div>
      <Message>{urlInState ? "You've already entered that URL" : ""}</Message>
      <UrlForm onSubmit={props.handleSubmit}>
        <UrlInput
          className={
            !urlInState && isValidUrl(props.urlToAdd) ? "valid" : "notValid"
          }
          onChange={props.handleChange}
          value={props.urlToAdd}
          type="text"
          name="urlToAdd"
          placeholder="Enter an apartment URL"
        />
        <Submit>Enter</Submit>
      </UrlForm>
    </div>
  );
};

export default UrlSubmissionForm;
