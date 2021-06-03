import React, {Component} from "react";
import {Card, CardBody, CardImg, CardSubtitle, CardTitle} from "reactstrap";
import image from "../img/pandu1.jpg"
const IsiPanduan = () => {
    return(
        <Card>
            <CardImg top width="100%" src={gb} alt="Card image cap"/>
            <CardBody>
                <CardTitle>Judul</CardTitle>
                <CardSubtitle>Isi</CardSubtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab alias atque blanditiis cumque dolor eaque necessitatibus
                pariatur quo similique sint? Asperiores officia pariatur ut.
                Aspernatur dolor eveniet facilis natus rerum.
            </CardBody>
        </Card>
    )
}
export default IsiPanduan;