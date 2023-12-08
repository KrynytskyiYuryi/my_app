import React from "react";
import MyDiv from "../../MyDiv";
import { getPagesArray } from "../../../Utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <MyDiv>
        {pagesArray.map((p) => (
          <span
            key={p}
            onClick={() => changePage(p)}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        ))}
      </MyDiv>
    )
}

export default Pagination