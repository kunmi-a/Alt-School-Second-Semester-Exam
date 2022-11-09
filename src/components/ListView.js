import React, { useContext } from "react";
import { APIContext } from "../context/context";

export const ListView = () => {
  const { data } = useContext(APIContext);

  return (
    <>
      {data.map((each) => (
        <a key={each.id} href={each.html_url}>
          {each.name}
        </a>
      ))}
    </>
  );
};
