import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 8px;
`

export const LangButton = styled.button`
  border: 1px solid #db1c48;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  padding: 6px 18px 6px 18px;
  border-radius: 40px;
`
