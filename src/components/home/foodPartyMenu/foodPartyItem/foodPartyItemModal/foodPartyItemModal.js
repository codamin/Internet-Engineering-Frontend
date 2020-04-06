import React from 'react'

import styles from './foodPartyItemModal.module.css'
import star from 'Assets/Icons/star.png'

const digitMap = {0:'۰', 1:'۱', 2:'۲', 3:'۳', 4:'۴', 5:'۵', 6:'۶', 7:'۷', 8:'۸', 9:'۹'}
const eng2fa = (engNum) => {return((''+engNum).split('').map(digit=>digitMap[digit]).join(''))} 

function FoodPartyItemModal(props) {
    return(
        <div className="modal fade" id="foodPartyModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className={['modal-content',styles.modalBox].join(' ')}>
                    <div className={["modal-body","container","px-0"].join(' ')}>
                        <div className={["row justify-content-center", styles.restaurantName].join(' ')}>
                            {props.foodData.restaurantName}
                        </div>
                        <div className="row px-4">
                            <div className="col container pr-0">
                                <div className="row justify-content-end mt-2 no-gutters d-flex align-items-center">
                                    <div className="col-auto">{props.foodData.popularity}</div>
                                    <img className={styles.star} src={star}></img>
                                    <div className={["col-auto ml-2 pr-0 text-right",styles.foodName].join(' ')}>{props.foodData.name}</div>
                                </div>
                                <div className={["row mt-3 mr-0 justify-content-end", styles.foodDescription].join(' ')}>{props.foodData.description}</div>
                                <div className={["row mt-3 justify-content-end", styles.priceRow].join(' ')}>
                                    <div className="col-auto">{eng2fa(props.foodData.price)}</div>
                                    <div className={["col-auto", styles.oldPrice].join(' ')}>{eng2fa(props.foodData.oldPrice)}</div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <img className={["rounded shadow",styles.foodImg].join(' ')} src={props.foodData.image}/>
                            </div>
                        </div>
                        <div className={['row',styles.lastRow,'mt-3','pt-3','px-3','d-flex','align-items-center','no-gutters'].join(' ')}>
                            <div className="col-5">
                                <button type="button" className={"btn " + styles.btn}>افزودن به سبد خرید</button>
                            </div>
                            <div className="col-auto mr-2">
                                <span className={[styles.clickable, styles.right].join(' ')}><i className={["flaticon-minus", styles.minus].join(' ')}></i></span>
                            </div>
                            <div className="col-auto">
                                {props.foodData.count}
                            </div>
                            <div className="col-auto ml-2">
                                <span className={styles.clickable}><i className={["flaticon-plus", styles.plus].join(' ')}></i></span>
                            </div>
                            <div className="col-auto ml-auto">
                               {["3",":موجودی"].join(' ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodPartyItemModal;