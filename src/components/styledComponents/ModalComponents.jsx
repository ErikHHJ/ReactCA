import styled from "styled-components";

export const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  max-height: 80vh;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
  z-index: 1;
  overflow-y: auto;
`;

//The rest of elements content inside the Modal
const Icon = styled.img`
  // Icon styles
`;

const Title = styled.div`
  //Title styles
`;

const Text = styled.div`
  // Text styles
`;

const Wrapper = styled.div`
  // Wrapper styles
`;

const CancelButton = styled.button`
  // Cancel button styles
`;
