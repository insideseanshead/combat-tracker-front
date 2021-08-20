import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const AddCharacterForm = (props) => {
  return (
    <div>
      <Container className="mt-1">
        <Form onSubmit={props.handleCharacterFormSubmit}>
          <Row>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.name}
                type="text"
                name="name"
                placeholder="Character Name"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.player}
                type="text"
                name="player"
                placeholder="Player Name"
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.weaponSkill}
                type="number"
                name="weaponSkill"
                placeholder="WS"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.ballisticSkill}
                type="number"
                name="ballisticSkill"
                placeholder="BS"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.strength}
                type="number"
                name="strength"
                placeholder="S"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.toughness}
                type="number"
                name="toughness"
                placeholder="T"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.agility}
                type="number"
                name="agility"
                placeholder="AG"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.intellegence}
                type="number"
                name="intellegence"
                placeholder="INT"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.willPower}
                type="number"
                name="willPower"
                placeholder="WP"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.fellowship}
                type="number"
                name="fellowship"
                placeholder="FEL"
              />
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.attacks}
                type="number"
                name="attacks"
                placeholder="ATK"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.wounds}
                type="number"
                name="wounds"
                placeholder="WND"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.strengthBonus}
                type="number"
                name="strengthBonus"
                placeholder="SB"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.toughnessBonus}
                type="number"
                name="toughnessBonus"
                placeholder="SB"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.movement}
                type="number"
                name="movement"
                placeholder="M"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.magic}
                type="number"
                name="magic"
                placeholder="MAG"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.insanityPoints}
                type="number"
                name="insanityPoints"
                placeholder="IP"
              />
            </Col>
            {/* <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.insanityPoints}
                type="number"
                name="insanityPoints"
                placeholder="IP"
              />
            </Col> */}
            <Col>
              <Form.Control
                onChange={props.handleCharacterInputChange}
                value={props.characterFormState.fatePoints}
                type="number"
                name="fatePoints"
                placeholder="FP"
              />
            </Col>
          </Row>
          <Button className="mt-2" variant="primary" type="submit" value="add character">
            Create Character
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddCharacterForm;