/* Create a new component that is responsible for displaying expenses

Add multiple ExpenseItem components in that component

Keep the expenses data in the App component and pass that data into the newly created component */
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
    return (
      <div>
          {
            props.data.map(x=>(
            <ExpenseItem
                title={x.title}
                amount={x.amount}
                date={x.date} />
              ))
          }
    </div>
    );
    
}
export default Expenses;