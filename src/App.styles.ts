import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  max-width: 1280px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieImage = styled.img`
  width: 180px;
  border-radius: 1rem;
`;

export const MovieTitle = styled.span`
  font-weight: bold;
`;
