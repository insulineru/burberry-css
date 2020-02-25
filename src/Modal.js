import React, { useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Modal = ({ onCloseRequest }) => {
  const modal = useRef(null);

  const handleOutsideClick = useCallback(
    e => {
      if (modal) {
        if (!modal.current.contains(e.target)) {
          onCloseRequest();
          document.removeEventListener("click", handleOutsideClick, false);
        }
      }
    },
    [onCloseRequest]
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, [handleOutsideClick]);

  return (
    <ModalOverlay>
      <ModalBody ref={modal}>
        <ModalCloseButton type="button" onClick={onCloseRequest} />
        <p>Test test test</p>
      </ModalBody>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
  opacity: 1;
  animation: ${show} 0.5s ease;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalBody = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0, 0, 0.625rem, rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 1rem;

  @media (min-width: 576px) {
    width: 32rem;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: 0;
  box-shadow: 0, 0, 0.625rem, rgba(0, 0, 0, 0.1);

  &:hover {
    &:before,
    &:after {
      height: 0.15rem;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 1.2rem;
    left: 0.25rem;
    width: 2rem;
    height: 0.1rem;
    background-color: #34363a;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export default Modal;
