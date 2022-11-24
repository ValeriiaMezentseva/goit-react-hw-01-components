import styled from "@emotion/styled";

export const TransactionsTable = styled.table`
    font-size: 20px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const TransactionsTableHead = styled.thead`
    background-color: #beeaeb;
    color: #7474ff;
`

export const TableRow = styled.tr``

export const TableItem = styled.th`
    font-size: 28px;
    padding: 10px;
    border: solid 1px black;
`
export const TableBody = styled.tbody``

export const TableBodyItem = styled.td`
    font-size: 24px;
    border: solid 1px black;
    padding: 10px;
    &:hover,
    &:focus {
    background-color: #f1a6b9
  }
`