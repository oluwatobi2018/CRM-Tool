import React from "react";
import "../../../assets/css/App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";

const EditProfile = () => (
  <div className="container">
    <Alert color="primary">
      Please be patient as Grant Watson adds more components
    </Alert>
    <h1>Edit User Profile</h1>
    <div class="user three" />
    <h3>Grant Watson</h3>
    <h4>There is no place like home!</h4>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="aboutYouText">About You!</Label>
        <Input type="textarea" name="text" id="aboutYouText" />
      </FormGroup>
      <FormGroup>
        <Label for="education">Education</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <Button color="warning">Submit Update</Button>
    </Form>
  </div>
);

export default EditProfile;