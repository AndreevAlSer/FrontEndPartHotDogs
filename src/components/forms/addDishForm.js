import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { addNewDish } from "../../actions/add_dishes";
import { useDispatch } from "react-redux";
import { fetchDishes } from "../../actions/fetch_dishes";
import history from "../helpers/history";

export default function AddDish() {
  const [dishData, SetDishData] = useState({
    pictureName: "",
    dishesName: "",
    price: "",
    description: "",
  });

  const changeHandler = (event) => {
    SetDishData({ ...dishData, [event.target.name]: event.target.value });
  };

  // позволяет диспатчить акшны в стор
  const dispatch = useDispatch();

  // -----------------------относится к модальной форме-------------------------------------------------
  const [show, setShow] = useState(false);
  const [isFormCloseAfterOpening, setIsFormCloseAfterOpening] = useState(false);

  const handleClose = () => {
    setShow(false);
    setIsFormCloseAfterOpening(true);
  };
  const handleShow = () => setShow(true);

  const onAddDishSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewDish(dishData));
    handleClose();
    dispatch(fetchDishes());
  };

  useEffect(() => {
    if (isFormCloseAfterOpening === true) {
      history.push("/");
      dispatch(fetchDishes());
    }
  }, [isFormCloseAfterOpening]);

  // -----------------------относится к модальной форме-------------------------------------------------

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add new Dish
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new dish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onAddDishSubmit}>
            <Form.Group controlId="formBasicPicture">
              <Form.Label>Picture name</Form.Label>
              <Form.Control
                type="text"
                placeholder="picture"
                name="pictureName"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDish">
              <Form.Label>Dish name</Form.Label>
              <Form.Control
                type="text"
                placeholder="dish name"
                name="dishesName"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                name="price"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeHandler}
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Add new dish
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
