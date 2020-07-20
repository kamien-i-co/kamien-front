import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';

const ProjectCard = ({ project }) => (
  <Card style={{ cursor: 'pointer' }}>
    <CardImg top width="100%" src={project.mainImg} alt="Card image cap" />
    <CardBody className="pt-1">
      <CardTitle>
        <h3>{project.name}</h3>
        {' '}
      </CardTitle>
      <br />
      <CardText>{project.description}</CardText>
    </CardBody>
  </Card>
);

export default ProjectCard;
