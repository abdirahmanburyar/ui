import React from "react";

function ModalIdaleTimer() {
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
        <h2 id="my-modal-title">Create New Foculty</h2>
        <div className="modal_size">
          <form className="">
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ModalIdaleTimer;
