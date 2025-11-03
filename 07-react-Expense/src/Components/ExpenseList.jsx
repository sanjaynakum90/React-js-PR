import React from "react";
import { Table, Button } from "react-bootstrap";

const ExpenseList = ({ expenses, handleDelete }) => {
    return (
        <div className="mt-4">
            {expenses.length === 0 ? (
                <p className="text-center text-muted">No expenses added yet.</p>
            ) : (
                <Table bordered hover responsive>
                    <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Amount (₹)</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((exp, index) => (
                            <tr key={exp.id}>
                                <td>{index + 1}</td>
                                <td>{exp.title}</td>
                                <td>{exp.amount}</td>
                                <td>{exp.category}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(exp.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default ExpenseList;
