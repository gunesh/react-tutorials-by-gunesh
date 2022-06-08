import React, {Component} from 'react';

export default function Hoc(HocComponent, data){
    return class extends Component{
        render(){
            return (
                <HocComponent data={data} />
            );
        }
    } 
}