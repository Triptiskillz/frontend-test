import { Component } from "react";
class ProductTable extends Component {
    render() {
        let { email, index,onDetail } = this.props;
        let { id, sent, from, to, subject, text, folder, read  } = email;
        return (
            <>
                <div className='row mb-1 border p-1 bg-light' onClick={() => onDetail(index)} >
                    {sent == true ?
                        <>
                            <div className='col-2 p-2'><i class='fas fa-envelope'></i></div>
                            <div className='col-3 p-2 fw-bold'>To: {to}</div>
                            <div className='col-7 p-2 fw-bold'>{subject}</div>
                        </>
                        :
                        <>

                            <div className='col-2 p-2 '><i class="fas fa-envelope-open"></i></div>
                            <div className='col-3 p-2 ' >{from}</div>
                            <div className='col-7 p-2'>{subject}</div>


                        </>
                    }

                </div>
            </>
        )
    }

}
export default ProductTable