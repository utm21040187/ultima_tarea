import React, { useState } from "react";  // Importa React y useState para gestionar el estado en el componente
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";  // Importa componentes de React Bootstrap para el diseño
import Swal from "sweetalert2";  // Importa SweetAlert para mostrar alertas
import axios from "axios";  // Importa axios para hacer solicitudes HTTP
import { Trash } from "react-bootstrap-icons";  // Importa el icono de basura para eliminar miembros

export const TeamCreation = () => {
    // Establece un miembro inicial vacío con un nombre de miembro vacío
    const initialMember = { memberName: "" };

    // Crea un estado para almacenar los datos del equipo: nombre del equipo, miembros, líder, ronda y evaluaciones
    const [teamData, setTeamData] = useState({
        teamName: "",  // Nombre del equipo
        members: [initialMember],  // Lista de miembros del equipo, inicializada con un miembro vacío
        teamLeader: "",  // Nombre del líder del equipo
        currentRound: 0,  // Número de ronda actual
        evaluations: [],  // Lista de evaluaciones (vacía inicialmente)
    });

    // Función que maneja los cambios en los inputs generales (nombre del equipo, líder, ronda)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;  // Extrae el nombre y valor del input
        // Actualiza el estado con el nuevo valor de la propiedad que cambió
        setTeamData({ ...teamData, [name]: value });
    };

    // Función que maneja los cambios en el nombre de los miembros del equipo
    const handleMemberChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // Crea una nueva lista de miembros actualizada con el nombre del miembro modificado
        const updatedMembers = teamData.members.map((member, i) =>
            i === index ? { memberName: e.target.value } : member  // Modifica el miembro cuyo índice coincide
        );
        // Actualiza el estado con la lista de miembros modificada
        setTeamData({ ...teamData, members: updatedMembers });
    };

    // Función que agrega un nuevo miembro vacío a la lista de miembros
    const addNewMember = () => {
        // Agrega un nuevo miembro vacío al estado de miembros
        setTeamData({ ...teamData, members: [...teamData.members, initialMember] });
    };

    // Función que elimina un miembro de la lista por su índice
    const deleteMember = (index: number) => {
        // Filtra la lista de miembros para eliminar al miembro cuyo índice coincide
        const filteredMembers = teamData.members.filter((_, i) => i !== index);
        // Actualiza el estado con la lista de miembros filtrada
        setTeamData({ ...teamData, members: filteredMembers });
    };

    // Función que maneja el envío de los datos del equipo al servidor
    const submitTeamData = async () => {
        try {
            // Muestra una alerta de "Procesando..." antes de hacer la solicitud
            Swal.fire("Procesando...", "Guardando información del equipo", "info");
            Swal.showLoading();  // Muestra el indicador de carga

            // Hace una solicitud POST al servidor para registrar el equipo
            await axios.post("http://localhost:4000/team/register", teamData);

            // Muestra una alerta de éxito si la solicitud es exitosa
            Swal.fire("¡Éxito!", "El equipo se ha registrado correctamente", "success");
        } catch (error) {
            // Muestra una alerta de error si algo sale mal
            Swal.fire("Error", "No se pudo registrar el equipo. Inténtalo de nuevo", "error");
        }
    };

    return (
        <Container>  {/* Contenedor principal del formulario */}
            <Card className="my-4">  {/* Card para envolver el formulario */}
                <Card.Body>
                    <Card.Title className="text-center">Registrar Equipo</Card.Title>  {/* Título del formulario */}
                    <Form>  {/* Formulario */}
                        {/* Información básica del equipo */}
                        <Row className="mb-3">
                            <Col>  {/* Columna para el nombre del equipo */}
                                <Form.Group>
                                    <Form.Label>Nombre del Equipo</Form.Label>
                                    <Form.Control
                                        type="text"  // Tipo de input: texto
                                        name="teamName"  // Nombre del campo
                                        value={teamData.teamName}  // Valor del input: nombre del equipo
                                        onChange={handleInputChange}  // Llama a la función handleInputChange cuando cambia el valor
                                    />
                                </Form.Group>
                            </Col>
                            <Col>  {/* Columna para el líder del equipo */}
                                <Form.Group>
                                    <Form.Label>Líder del Equipo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="teamLeader"
                                        value={teamData.teamLeader}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>  {/* Columna para el número de ronda */}
                                <Form.Group>
                                    <Form.Label>Número de Ronda</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="currentRound"
                                        value={teamData.currentRound}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Lista de miembros */}
                        <Form.Group>
                            <Form.Label className="d-block text-center">Miembros del Equipo</Form.Label>
                            {teamData.members.map((member, index) => (  // Mapea los miembros del equipo
                                <Row key={index} className="mb-3 align-items-center">
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            placeholder={`Miembro ${index + 1}`}  // Texto del placeholder
                                            value={member.memberName}  // Valor del nombre del miembro
                                            onChange={(e) => handleMemberChange(e, index)}  // Llama a la función handleMemberChange cuando cambia el nombre
                                        />
                                    </Col>
                                    {teamData.members.length > 1 && (  // Solo muestra el botón de eliminar si hay más de un miembro
                                        <Col xs="auto">
                                            <Button
                                                variant="danger"  // Estilo de botón de peligro (rojo)
                                                onClick={() => deleteMember(index)}  // Llama a la función deleteMember para eliminar al miembro
                                            >
                                                <Trash />  {/* Icono de papelera */}
                                            </Button>
                                        </Col>
                                    )}
                                </Row>
                            ))}
                            {/* Botón para agregar un nuevo miembro */}
                            <div className="text-center mt-3">
                                <Button variant="primary" onClick={addNewMember}>
                                    Agregar Miembro
                                </Button>
                            </div>
                        </Form.Group>

                        {/* Botón de envío para guardar el equipo */}
                        <div className="text-center mt-4">
                            <Button onClick={submitTeamData}>Guardar Equipo</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

//Si no comento todo no entiendo que hago, gracias jajaaja