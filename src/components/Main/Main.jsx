import React from 'react'
import Categories from './Categories'
import DataBase from './DataBase'
import Metrica from './Metrica'
import Navbar from './Navbar'

function Main() {

    const data = [
        {
            color : 'primary',
            title : 'Products in Data Base',
            value : 135,
            icon : 'fa-clipboard-list'
        },
        {
            color : 'success',
            title : 'Amount in products',
            value : 546.456,
            icon : 'fa-dollar-sign'
        },
        {
            color : 'warning',
            value : 38,
            icon : 'fa-user-check'
        }
    ]

    return (
        <div id="content">

        <Navbar/>
            <div className="container-fluid">

    
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

    
                <div className="row">

                {
                   data.map((item,index) => 
                    <Metrica
                        key = {index}
                        color = {item.color}
                        title = {item.title}
                        value = {item.value}
                        icon = {item.icon}
                    />
                    ) 
                }

                </div>

                <div className="row">
        
                <DataBase/>
        
                <Categories/>

                </div>
            </div>

        </div>
    )
}

export default Main
