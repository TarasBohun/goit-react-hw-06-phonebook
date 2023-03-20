import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 300px;
  padding: 10px;

  background-color: #f9f5f5;
`;

export const Item = styled.li`
  /* margin-right: 15px; */
  color: #3e3c3c;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
