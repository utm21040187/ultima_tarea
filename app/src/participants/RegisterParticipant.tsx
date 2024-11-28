import { Container, Form, Card, Button, Row, Col } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface IUser {
    name: string,
    email: string,
    curp: string,
    password: string
}

export const RegisterParticipant = () => {
    const [data, setData] = useState<IUser>({
        name: "",
        email: "",
        curp: "",
        password: ""
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const tempData: any = data;
        tempData[e.target.name] = e.target.value;
        setData(tempData);
    };

    const onSubmit = async () => {
        try {
            Swal.fire("Enviando datos");
            Swal.showLoading();
            await axios.post("http://localhost:4000/user/register", data);
            Swal.fire("Datos guardados con exito", "", "success");
        } catch (error: any) {
            Swal.fire("Hay un error al guardar", error.response.data.msg, "error")
        }
    }
    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center vh-100"
            >
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Registrate mi rey</Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={onChange} name="name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <Form.Control onChange={onChange} name="email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CURP:</Form.Label>
                                <Form.Control onChange={onChange} name="curp" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control type="password" onChange={onChange} name="password" />
                            </Form.Group>
                            <Row className="mb-3 mt-3 text-center">
                                <Col className="d-grid">
                                    <Button className="btn btn-success" onClick={() => onSubmit()}>Ingresar</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
                <ul>
                    <li><a href="/">login</a></li>
                    <li><a href="/register">registerParticipant</a></li>
                    <li><a href="/createEvent">createEvent</a></li>
                </ul>
            </Container>
        </>
    )
}