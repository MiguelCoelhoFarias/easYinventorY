import styled from 'styled-components';

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const TitleBar = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  color: #e5e4e2;
  margin-left: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: #e5e4e2;
  margin-left: 1rem;
  color: black;
`;

export const PageContainer = styled.div`
  background-color: #e5e4e2;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const RegisterContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  margin-right: 5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.1rem;
  background-color: #f0f0f0;
  color: black;
`;

export const Button = styled.button`
  width: 70%;
  padding: 0.75rem;
  margin-right: 6.8rem;
  margin-top: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;