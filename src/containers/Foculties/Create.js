import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector, connect } from "react-redux";
import { MODAL_OPEN } from "../../redux/events/types";
import { createFoculty } from "../../redux/foculties/actions";
import "react-responsive-modal/styles.css";
import "./foculty.style.css";
const CreateFoculty = ({ createFoculty }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const open = useSelector((state) => state.events.open);
  const _handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const _handleSubmit = async (e) => {
    e.preventDefault();
    await createFoculty(data);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={(e) => dispatch({ type: MODAL_OPEN })}
        aria-labelledby="my-modal-title"
        aria-describedby="my-modal-description"
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        center
      >
        <div className="modal_size">
          <h2 id="my-modal-title">Create New Foculty</h2>
          <hr />
          <form
            className="needs-validation"
            noValidate
            onSubmit={_handleSubmit}
          >
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Foculty Title"
                  value={data.title || ""}
                  onChange={_handleChange}
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default connect(null, { createFoculty })(CreateFoculty);
