import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const StudentList = ({ studentData }) => {
    return (
        <Container className="mb-5">
            <Card className="shadow border-0">
                <Card.Body>
                    <h3 className="text-center mb-4 fw-bold text-primary">
                        Student List
                    </h3>

                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        className="text-center align-middle"
                    >
                        <thead className="table-dark">
                            <tr>
                                <th>GR-ID</th>
                                <th>Full Name</th>
                                <th>Course</th>
                                <th>Number</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {studentData.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-muted py-4">
                                        No Student Data Available
                                    </td>
                                </tr>
                            ) : (
                                studentData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.grid}</td>
                                        <td>{item.name}</td>
                                        <td>{item.course}</td>
                                        <td>{item.number}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StudentList;
