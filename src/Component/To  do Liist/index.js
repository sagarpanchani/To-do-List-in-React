import React from "react";
import "./Todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, ListGroup, Badge } from "react-bootstrap";
class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todoAryy: [],
    };
  }
  addItem = () => {
    let { todoAryy } = this.state;
    let { userInput } = this.state;
    if(userInput ==  ""){
      alert("Enter Something")
    }
    else{
  
    todoAryy.unshift(this.state.userInput);
    this.setState({ todoAryy: todoAryy });

    this.setState({
      userInput: "",
    });}
  };

  // updateInput() {
  //   this.setState({ userInput: this.state.userInput });
  //   console.log(this.state.userInput)
  // }

  deltFunc(i) {
    let { todoAryy } = this.state;
    let { userInput } = this.state;
    todoAryy.splice(i, 1);
    console.log(i)
    this.setState({ todoAryy: todoAryy });
  }
  editFunc(i) {
    let  updateval  = prompt("update value");
    let { todoAryy } = this.state;
    todoAryy.splice(i, 1, updateval);
    alert(i)
    this.setState({ todoAryy: todoAryy });

  }

  render() {
    return (
      <Container className="_Container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={this.state.userInput}
              onChange={(b) => this.setState({ userInput: b.target.value })}
              placeholder="Add your Task"
            />
          </Form.Group>
          <Button variant="primary" onClick={() => this.addItem()}>
            Add Item
          </Button>
        </Form>
        {/* <br  /> */}
        {this.state.todoAryy.map((val, i) => {
          return (
            <ListGroup as="ol" numbered>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <span className="_span">{i + 1}</span> {val}
                  </div>
                </div>

                <Button variant="warning" onClick={() => this.editFunc(i)}>
                  Eidt
                </Button>
                <Button variant="danger" onClick={() => this.deltFunc(i)}>
                  Delete
                </Button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </Container>
    );
  }
}

export default Todolist;
