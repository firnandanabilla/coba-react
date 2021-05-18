import React, {Component, Fragment} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import{
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Container, CustomInput,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
} from "reactstrap";
import PageTitle from "../Layout/AppMain/PageTitle";
import Tabs, {TabPane} from "rc-tabs";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import FormsDefault from "./Forms/Elements/Controls/Examples/FormBasic";
import InputGroups from "./Forms/Elements/Controls/Examples/InputGroup/InputGroups";

class BiodataBella extends Component{
    render() {
        return(
            <Fragment>
                <CSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Container fluid>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <CardBody>
                                        <CardTitle>Biodata</CardTitle>
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleName">Name :</Label>
                                                <Input type="name" name="name" id="exampleName"
                                                       placeholder="Name placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleContactNumber">Contact Number :</Label>
                                                <Input type="contactNumber" name="contact" id="contact"
                                                       placeholder="Contact Number placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email :</Label>
                                                <Input type="email" name="email" id="email"
                                                       placeholder="Email placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Gender :</Label>
                                                <div>
                                                    <CustomInput type="radio" id="male" name="male"
                                                                 label="Male"/>
                                                    <CustomInput type="radio" id="female" name="female"
                                                                 label="Female"/>
                                                </div>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleTTL">Date of Birth :</Label>
                                                <Input type="date" name="ttl" id="ttl"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleAddress">Address :</Label>
                                                <Input type="textarea" name="address" id="exampleAddress"
                                                       placeholder="Address placeholder"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="exampleSelect">Religion</Label>
                                                <CustomInput type="select" name="select" id="exampleSelect">
                                                    <option value="">Select</option>
                                                    <option>Islam</option>
                                                    <option>Kristen</option>
                                                    <option>Hindu</option>
                                                    <option>Buddha</option>
                                                    <option>Konghucu</option>
                                                </CustomInput>
                                            </FormGroup>
                                        </Form>
                                        <Button className="mb-2 mr-2 btn-icon btn-shadow btn-dashed" outline
                                                color="success">
                                            <i className="pe-7s-umbrella btn-icon-wrapper"> </i>
                                            Success
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </CSSTransitionGroup>
            </Fragment>
        )
    }
}

export default BiodataBella;