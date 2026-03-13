import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Modal({ children, headerLabel, isOpen, onCloseRequested }) {
  const modalRef = useRef(null);
  function handleClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onCloseRequested();
    }
  }
  if (isOpen) {
    return (
      <div
        onClick={handleClick}
        className="fixed inset-0 min-w-screen min-h-screen z-50 bg-black/50"
      >
        <div
          ref={modalRef}
          className="absolute p-2 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
        >
          <div className="flex justify-between p-2">
            <h1 className="text-left text-xl mb-1">{headerLabel}</h1>
            <button onClick={onCloseRequested} aria-label="Close">
              <FontAwesomeIcon icon={faX} title="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default Modal;
