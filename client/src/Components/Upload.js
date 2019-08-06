import React, { useState, useEffect } from "react";

const Upload = () => {
  return (
    <form
      action="http://localhost:5000/api/upload"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="file" name="myImage" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;
