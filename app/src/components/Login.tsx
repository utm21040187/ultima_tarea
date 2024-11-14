import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

export const Login =()=>{
    return(
       <Container>
       <Card>
        <Card.Body>
            <Card.Title>¡Bienvenido! Inicia sesión</Card.Title>
            <Row>
                <Col>
            <Form.Control/>
            <Form.Control/>
             </Col>
             </Row>
             <Row>
                <Col>
                <Button>Ingresa</Button>
                </Col>
            </Row>
            <Row>
            <Col>
                ¿Olvidaste tu contraseña? Recuperala <a>Aquí</a>
                </Col>
                <Col> ¿Todavia no tienes cuenta? Registrate <a>Aquí</a> </Col>
            </Row>
        </Card.Body>
       </Card>
       </Container>
    )
}