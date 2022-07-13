import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 100px auto 0;
  display: flex;
  gap: 50px;

  @media (max-width: 680px) {
    flex-direction: column;
    max-width: 580px;
    margin: 50px auto;
  }
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 1rem;

  @media (max-width: 680px) {
    width: 200px;
    height: 300px;
    margin: 0 auto;
  }
`;

export const InfoArea = styled.div`
  width: 50%;

  @media (max-width: 680px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Info = styled.div`
  margin-bottom: 20px;

  @media (max-width: 680px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const InfoMovie = styled.span`
  font-style: italic;
  text-align: justify;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: lightpink;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;
