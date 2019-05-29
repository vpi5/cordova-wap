import React from 'react';
import router from 'umi/router';

export default class HomePage extends React.Component{

    render (){
        return (
            <div onClick={()=>{router.push('details')}}>
                Lorem ipsum dolor.
            </div>
        )
    }
}