import React from 'react'
import { useSelector } from 'react-redux'
import Dishes from './Dishes'

const AllDishes = () => {

    const auth = useSelector(state => state.auth)

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {auth.isAuthenticated}
            <Dishes/>
          </div>
        </div>
      </div>
    )
}

export default AllDishes

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);

