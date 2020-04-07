import React from 'react'
import styles from './jombotron.module.css'

function Jombotron(props) {
    return(
        <div className={"jombotron jumbotron-fluid p-4 " + styles.main}>
            <div className="container-fluid">
                <div className="row ml-5">
                    <div className={"col-auto mr-auto " + styles.jomboLeft}>
                        <div className="row justify-content-end align-items-center no-gutters">
                            <div className="col-auto">
    <p className={[styles.infoText, styles.smallText].join(' ')}>{props.userInfo.phone}</p>
                            </div>
                            <div className="col-auto">
                                <a href="# ">
                                    <i className={"flaticon-phone " + styles.smallIcon}></i>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-end align-items-center no-gutters">
                            <div className="col-auto">
    <p className={[styles.infoText, styles.smallText].join(' ')}>{props.userInfo.email}</p>
                            </div>
                            <div className="col-auto">
                                <a href="# ">
                                    <i className={"flaticon-mail " + styles.smallIcon}></i>
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-end align-items-center no-gutters">
                            <div className="col-auto">
                                <p className={[styles.infoText, styles.smallText, styles.moneyCurrency].join(' ')}> تومان </p>
                            </div>
                            <div className="col-auto">
                                <p className={[styles.infoText, styles.smallText].join(' ')}>{props.userInfo.credit} </p>
                            </div>
                            <div className="col-auto">
                                <a href="# ">
                                    <i className={"flaticon-card "+styles.smallIcon}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-auto d-flex mr-5 " + styles.jomboRight}>
                        <div className="row justify-content-end align-items-center no-gutters">
                            <div className="col-auto">
                                <p className={[styles.infoText, styles.userName].join(' ')}>{props.userInfo.firstName + " " + props.userInfo.lastName}</p>
                            </div>
                            <div className="col-auto">
                                <a href="# ">
                                    <i className={"flaticon-account "+styles.bigIcon}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jombotron