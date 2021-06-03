import React, {Fragment} from "react";
import Header from "../../Layout/AppHeader";
import AppFooter from "../../Layout/AppFooter";
import IsiPanduan from "./panduan";
import {Row,Col} from "reactstrap";

const Panduan = () => (
    <Fragment>
        <Header/>
        <Row>
            <IsiPanduan/>
            <IsiPanduan/>
        </Row>
        <AppFooter/>
    </Fragment>
);
export default Panduan;