import React from 'react'
import API from 'apis/api'
import styles from './foodPartyItemModal.module.css'
import star from 'Assets/Icons/star.png'

const digitMap = {0:'۰', 1:'۱', 2:'۲', 3:'۳', 4:'۴', 5:'۵', 6:'۶', 7:'۷', 8:'۸', 9:'۹'};
const eng2fa = (engNum) => {return((''+engNum).split('').map(digit=>digitMap[digit]).join(''))}; 

class FoodPartyItemModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            foodData: props.foodData,
            ordered: 1
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    handlePlus(event) {
        // console.log(this.state);
        this.setState({
            ordered: this.state.ordered + 1
          });
    }
    
    handleMinus(event) {
        // console.log(this.state);
        if(this.state.ordered > 0) {
            this.setState(state =>({ordered:state.ordered - 1}))
        }
    }
    
    handleAddToCart(envent) {
        for (let step = 0; step < 5; step++) {
            // Runs 5 times, with values of step 0 through 4.
            console.log(this.state.ordered);
        }

        for(let i = 0; i < this.state.ordered; i++) {
            console.log('sent')
            console.log(`${this.state.foodData.restaurantId}`)
            console.log(`${this.state.foodData.name}`)
            API.post('cart', {
                restaurantId: `${this.state.foodData.restaurantId}`,
                foodName: `${this.state.foodData.name}`           
            }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
            this.props.updateFunction()
        }
    }

    render() {
        return(<div className="modal fade" id={"foodModal_" + this.props.id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className={['modal-content',styles.modalBox].join(' ')}>
                    <div className={["modal-body","container","px-0"].join(' ')}>
                        <div className={["row justify-content-center", styles.restaurantName].join(' ')}>
                            {this.state.foodData.restaurantName}
                        </div>
                        <div className="row px-4">
                            <div className="col container pr-0">
                                <div className="row justify-content-end mt-2 no-gutters d-flex align-items-center">
                                    <div className="col-auto pt-1 mr-1">{eng2fa(this.state.foodData.popularity)}</div>
                                    <img className={styles.star} src={star}></img>
                                    <div className={["col-auto ml-2 pr-0 text-right",styles.foodName].join(' ')}>{this.state.foodData.name}</div>
                                </div>
                                <div className={["row mt-3 mr-0 justify-content-end", styles.foodDescription].join(' ')}>{this.state.foodData.description}</div>
                                <div className={["row mt-3 justify-content-end", styles.priceRow].join(' ')}>
                                    <div className="col-auto">{"تومان"}</div>
                                    <div className="col-auto pl-0">{eng2fa(this.state.foodData.price)}</div>
                                    <div className={["col-auto", styles.oldPrice].join(' ')}>{eng2fa(this.state.foodData.oldPrice)}</div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <img className={["rounded shadow",styles.foodImg].join(' ')} src={this.state.foodData.image}/>
                            </div>
                        </div>
                        <div className={['row',styles.lastRow,'mt-3','pt-3','px-3','d-flex','align-items-center','no-gutters'].join(' ')}>
                            <div className="col-5">
                                <button type="button" className={"btn " + styles.btn} onClick={this.handleAddToCart}>افزودن به سبد خرید</button>
                            </div>
                            <div className="col-auto mr-2">
                                <span className={[styles.clickable, styles.right].join(' ')} onClick={this.handleMinus}><i className={["flaticon-minus", styles.minus].join(' ')}></i></span>
                            </div>
                            <div className={"col-auto text-center"}>
                                {eng2fa(this.state.ordered)}
                            </div>
                            <div className="col-auto ml-2">
                                <span className={styles.clickable} onClick={this.handlePlus}><i className={["flaticon-plus", styles.plus].join(' ')}></i></span>
                            </div>
                            {this.state.foodData.count != undefined &&
                                <div className={"col-3 ml-auto text-center rounded " + styles.count}>
                                    {this.state.foodData.count ?
                                    [eng2fa(this.state.foodData.count)," :موجودی"].join(' '):
                                    "ناموجود"}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}   

export default FoodPartyItemModal;