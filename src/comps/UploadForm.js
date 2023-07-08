import React from "react";
import { useState } from "react";

const UploadForm = () => {
  const [file, setfile] = useState(null);
  const types = [];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setfile(selected);
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default UploadForm;
