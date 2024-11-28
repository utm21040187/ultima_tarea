import { Container, Card, Row, Col, Form, Button } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios, { AxiosError } from "axios";

export const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({});

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
            const response = await axios.post("http://localhost:4000/user/login", data);
            Swal.fire("Inicio de sesion exitoso", response.data, "success");
            navigate('/home')
        } catch (error: any) {
            Swal.fire("Hay un error al enviar", error.response.data.msg, "error")
        }
    }
    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center vh-100"
            >
                <Card style={{ width: "30rem" }} className="m-3">
                    <Card.Body>
                        <Card.Title className="mb-3 text-center">¡Bienvenido! Inicia Sesión</Card.Title>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Correo:</Form.Label>
                                    <Form.Control name="email" onChange={onChange} className="mb-3" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control name="password" onChange={onChange} type="password" className="mb-3" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3 text-center">
                            <Col className="d-grid">
                                <Button className="btn btn-success" onClick={() => onSubmit()}>Ingresar</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>¿Olvidaste tu contraseña? Recupérala <a href="#">aquí</a></Col>
                            <Col>¿No tienes cuenta? Regístrate <a href="/register">aquí</a></Col>
                        </Row>
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