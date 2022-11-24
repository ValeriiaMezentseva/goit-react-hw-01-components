import PropTypes from 'prop-types';
import { TransactionsTable, TransactionsTableHead, TableRow, TableItem, TableBody, TableBodyItem  } from './TransactionsHistory.styled.jsx';

export const TransactionsHistory = ({ items }) => {
    return <TransactionsTable>
        <TransactionsTableHead>
            <TableRow>
      <TableItem>Type</TableItem>
      <TableItem>Amount</TableItem>
      <TableItem>Currency</TableItem>
            </TableRow>
        </TransactionsTableHead>
        <TableBody>
            {items.map(item => {
    return <TableRow key = { item.id }>
      <TableBodyItem>{item.type}</TableBodyItem>
      <TableBodyItem>{item.amount}</TableBodyItem>
      <TableBodyItem>{item.currency}</TableBodyItem>
                </TableRow>
            })}
 </TableBody>
</TransactionsTable>
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
}