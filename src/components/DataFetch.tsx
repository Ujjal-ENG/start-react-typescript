import React from "react";

type DataFetchPropos = {
  status: "loading" | "error" | "success";
};

const DataFetch = ({ status }: DataFetchPropos) => {
  return (
    <div>
      {status === "loading" && <h3>Data is Loading...</h3>}
      {status === "error" && <h3>Error. Data could not fetched</h3>}
      {status === "success" && <h3>Success. Data is fetch Successfully</h3>}
    </div>
  );
};

export default DataFetch;
