import React from "react";
import Redirect from 'umi/redirect'


export default class extends React.Component{

    toLoadPage (){
        let homePage = process.env.homePage;
        if(typeof homePage === 'undefined' || homePage === '')
            homePage = '/homePage';
        return <Redirect to={`${homePage}`} />
    }

    render(){
        return this.toLoadPage();
    }
}