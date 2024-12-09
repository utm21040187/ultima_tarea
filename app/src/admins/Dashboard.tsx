import { Container, Row, Card, Col } from "react-bootstrap";
import { Calendar2CheckFill, MicrosoftTeams, PeopleFill } from "react-bootstrap-icons";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card onClick={()=> navigate("/users/list")}>
                            <Card.Body>
                                <Card.Title>Usuarios:</Card.Title>
                                <Card.Text><PeopleFill/>45</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card onClick={()=> navigate("/teams/list")}>
                            <Card.Body>
                                <Card.Title>Equipos:</Card.Title>
                                <Card.Text><MicrosoftTeams/>45</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card onClick={()=> navigate("/events/list")}>
                            <Card.Body>
                                <Card.Title>Eventos:</Card.Title>
                                <Card.Text><Calendar2CheckFill/>45</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}