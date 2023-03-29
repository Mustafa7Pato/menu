import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";

function ItemList({ items }) {
  return (
    <Row>
      <Zoom>
        {items.length >= 1 ? (
          items.map((data) => {
            return (
              <Col sm="12" className="mb-3" key={data.id}>
                <Card className="d-flex flex-row bg-dark">
                  <Card.Img
                    variant="top"
                    src={data.img}
                    className="img-item "
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{data.title}</div>
                      <div className="item-price">{data.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{data.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">ﻻ يوجد اصناف في الوقت الحالى</h3>
        )}
      </Zoom>
    </Row>
  );
}

export default ItemList;
