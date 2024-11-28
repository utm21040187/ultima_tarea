import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

interface IEvent {
    name: string;
    max_round: number;
    metrics: Array<{ description: string; max_points: number }>;
}

export const CreateEvent = () => {
    const [data, setData] = useState<IEvent>({
        name: "",
        max_round: 0,
        metrics: []
    });
    const [inpMetrics, setInpMetrics] = useState([1]);

    const onChange = (e: React.ChangeEvent<any>, index: number) => {
        const { name, value } = e.target;
        const updatedMetrics = [...data.metrics];
        updatedMetrics[index] = { ...updatedMetrics[index], [name]: value };
        setData({ ...data, metrics: updatedMetrics });
        console.log(data)
    };

    const onSubmit = async () => {
        try {
            Swal.fire("Enviando datos");
            Swal.showLoading();
            await axios.post("http://localhost:4000/event/create", data);
            Swal.fire("Datos guardados con exito", "", "success");
        } catch (error: any) {
            Swal.fire("Hay un error al guardar", error.response.data.msg, "error");
        }
    };

    const add = () => {
        const newMetric = { description: "", max_points: 0 };
        setData({ ...data, metrics: [...data.metrics, newMetric] });
        setInpMetrics([...inpMetrics, inpMetrics.length + 1]);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">Crear un Evento</Card.Title>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre del evento</Form.Label>
                                    <Form.Control
                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                        name="name"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Rondas</Form.Label>
                                    <Form.Control
                                        onChange={(e) => setData({ ...data, max_round: Number(e.target.value) })}
                                        name="max_round"
                                        type="number"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <h5 className="mt-2 mb-3">Metricas</h5>
                        <Row name="metrics">
                            {inpMetrics.map((value, index) => (
                                <Row className="mb-3" key={index}>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Descripcion</Form.Label>
                                            <Form.Control

                                                onChange={(e) => onChange(e, index)}
                                                name="description"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Puntos</Form.Label>
                                            <Form.Control

                                                onChange={(e) => onChange(e, index)}
                                                name="max_points"
                                                type="number"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            ))}
                        </Row>
                        <Button onClick={add}>+</Button>
                        <Row className="mb-3 mt-3 text-center">
                            <Col className="d-grid">
                                <Button className="btn btn-success" onClick={onSubmit}>
                                    Ingresar
                                </Button>
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
    );
};