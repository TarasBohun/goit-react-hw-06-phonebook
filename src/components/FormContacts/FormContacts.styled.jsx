import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  width: 300px;
  background-color: #f9f5f5;
  padding: 10px;

  margin-bottom: 20px;
`;

export const FormField = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 10px;

  color: red;
  /* font-size: ; */
`;
