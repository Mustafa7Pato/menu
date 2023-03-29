import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";

function Catagory({ handleFilter, allCategory }) {
  //to filter category
  const onFilter = (filter) => {
    handleFilter(filter);
  };
  return (
    <Row className="mt-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCategory.length >= 1
          ? allCategory.map((category) => {
              return (
                <Roll>
                  {" "}
                  <div className="btns-catagory" key={Math.random()}>
                    <button
                      className="btn-search mx-2"
                      onClick={() => onFilter(category)}
                    >
                      {category}
                    </button>
                  </div>
                </Roll>
              );
            })
          : "ﻻ يوجد تصنيفات فى الوقت الحالى"}
      </Col>
    </Row>
  );
}

export default Catagory;
