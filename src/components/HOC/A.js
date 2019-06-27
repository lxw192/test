import React, { Component } from 'react'
import './A.css'
const A = (WrappendComponent)=>class A extends Component {
    render() {
        return (
            <div className='box_border'>
                <div className="head">
                    <span>表头</span>
                    <span>X</span>
                </div>
                <WrappendComponent></WrappendComponent>
            </div>
        )
    }
}
export default A