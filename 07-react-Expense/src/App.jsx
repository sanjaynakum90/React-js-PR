import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import ExpenseList from "./Components/ExpenseList";

const App = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const [expenses, setExpenses] = useState([]);

  const handleChange = (field, e) => {
    setExpense({ ...expense, [field]: e.target.value });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!expense.title || !expense.amount || !expense.category) {
      alert("Please fill all fields");
      return;
    }

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        title: expense.title,
        amount: parseFloat(expense.amount),
        category: expense.category,
      },
    ]);

    setExpense({ title: "", amount: "", category: "" });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h2 className="text-center text-primary mb-4">💰 Expense Tracker</h2>

        <Form onSubmit={handleAddExpense}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Expense Title"
                value={expense.title}
                onChange={(e) => handleChange("title", e)}
              />
            </Col>

            <Col md={3}>
              <Form.Control
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => handleChange("amount", e)}
              />
            </Col>

            <Col md={3}>
              <Form.Select
                value={expense.category}
                onChange={(e) => handleChange("category", e)}
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Button variant="success" type="submit" className="w-100">
                Add
              </Button>
            </Col>
          </Row>
        </Form>

        <ExpenseList expenses={expenses} handleDelete={handleDelete} />

        <div className="text-center mt-4">
          <h4>
            Total Expense:{" "}
            <span className="text-danger fw-bold">₹{total.toFixed(2)}</span>
          </h4>
        </div>
      </Card>
    </Container>
  );
};

export default App;
