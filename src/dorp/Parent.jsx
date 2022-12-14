import React, { Component } from 'react'
import Child from "./Child"
class Parent extends Component {
    state = {
        products: [{ id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
        { id: "CLO876", name: "CloseUp", category: "Toothpaste", stock: "no" },{ id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },{ id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },{ id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },{ id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },{ id: "LI130", name: "Liril", category: "Soap", stock: "yes" },{ id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },{ id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },{ id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },{ id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },{ id: "DOV044", name: "Dove", category: "Soap", stock: "yes" }
    ]
        , optionsArray: {
            stock: ['yes','no','arriving'],
            category: ['Food', 'Toothpaste', 'Soap','Shampoo']

        }
        , optionsSel: {
            stock: '',
            category: [],
        }
    }
    showLaptops = () => {
        const { products, optionsSel } = this.state
        const { category,stock } = optionsSel
        console.log(category)
        let laptop1 = category.length > 0 ?
            products.filter((lt) =>  category.findIndex((br)=>br==lt.category)>=0)
            : [];
        // let laptop2 = hardDisk.length > 0 ?
        //     laptop1.filter((lt) => hardDisk.findIndex((br) => br == lt.hardDisk) >= 0)
        //     : laptop1;

        // let laptop3 = rating.length > 0 ?
        //     laptop2.filter((lt) => rating.findIndex((br) => br == lt.rating) >= 0)
        //     : laptop2;

        let laptop2 = stock.length > 0 ?
        laptop1.filter((lt) => lt.stock === stock)
            : laptop1;

        // let laptop5 = ram.length > 0 ?
        //     laptop4.filter((lt) => lt.ram === ram)
        //     : laptop4;

        return (
            <div className='container'>
                <p>Categeory:    {category.map((lt) => (lt+","))}</p>
                <p>Stock Status: {stock.length == 0 ?"All":stock}</p>
                {laptop2.map((lt) => (
                    <>
                        <div className='row bg-light'>
                            <div className='col-3 border'>{lt.name}</div>
                            <div className='col-3 border'>{lt.category}</div>
                            <div className='col-3 border'>{lt.id}</div>
                            <div className='col-3 border'>{lt.stock}</div>
                        </div>
                    </>
                ))}
            </div>
        )
    }
    handleChangeOption = (optionsSel) => {
        let s1 = { ...this.state };
        s1.optionsSel = optionsSel;
        this.setState(s1);
    }
    handleClear = () => {
        let s1 = { ...this.state };
        s1.optionsSel = {
            brand: '',
            ram: '',
            processor: [],
            rating: [],
            hardDisk: []

        }
        this.setState(s1);
    }
    render() {
        let { products, optionsArray, optionsSel } = this.state;
        return (
            <>

                <div className='container mt-4'>

                    <div className='row'>
                        <div className='col-3 border bg-light'>
                            <Child
                                optionsSel={optionsSel}
                                optionsArray={optionsArray}
                                onChangeOption={this.handleChangeOption}
                                onClear={this.handleClear}
                            />
                        </div>
                        <div className='col-9 border'>{this.showLaptops()}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Parent