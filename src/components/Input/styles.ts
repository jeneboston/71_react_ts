import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 100%;
`;

export const Label = styled.label`
font-size: 16px;
color: #6f6f6f;
`;

export const Field = styled.input`
width: 100%;
padding: 12px;
border: 1px solid #3f3f3f;
border-radius: 4px;
font-size: 16px;
outline: none;
&::placeholder { color: #a5a5a5; }
&:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,.15); }
`;
