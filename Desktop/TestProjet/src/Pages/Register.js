import React from 'react'
import { Button, Form } from "react-bootstrap";



import { useState } from 'react';

import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <h3 style={{ color :"blue"}}> Enregistrer un utilisateur </h3><br />

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustomEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a correct email.
            </Form.Control.Feedback>
          </InputGroup>

        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please enter a city or a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>Street</Form.Label>
          <Form.Control type="text" placeholder="Street" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Street.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" placeholder="Zipcode" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zipcode.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} md="2" controlId="validationCustom06">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" placeholder="Province" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Province.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom07">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="Telephone" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Telephone.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom08">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Role" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Role.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md="2" controlId="validationCustom09">
            <Form.Label>PersonalId</Form.Label>
            <Form.Control type="text" placeholder="PersonalId" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid PersonalId.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom10">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Image" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Image.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2" controlId="validationCustom11">
            <Form.Label>Inactive</Form.Label>
            <Form.Control type="boolean" placeholder="Inactive" defaultValue={'True'} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Inactive.
            </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br/>
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
    
  );
}

export default Register;

// const Register = () => {
//   return (
//     <div>
//           welcome to register
//      <Button className='bouton' variant="success" 
                  
//                   type="submit">
                    
//        </Button>

//     </div>
//   )
// }

// export default Register