import React from 'react'
import logo from './logo.png'
import styles from './mainLogo.module.css'


function MainLogo() {
    return(
        <div>
            <div className={"jumbotron jumbotron-fluid " + styles.pannel}>
                <div className={styles.mainLogo}>
                    <div className="row">
                        <div className="col">
                            <img className={styles.logo} src={logo} alt="Loghme"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            اولین و بزرگترین وب سایت سفارش آنلاین غذا در دانشگاه تهران
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <form className={"form-inline mx-auto py-2 " + styles.searchBar}>
            <div className="form-group mx-1 mb-1">
                <button type="submit" className={"btn btn-primary " + styles.searchBtn}>جست و جو</button>
            </div>
            <div className="form-group mx-1 mb-1">
                <input type="text" className={["form-control",styles.searchInput, styles.inputPlaceholder].join(' ')} placeholder="نام رستوران"/>
            </div>
            <div className="form-group mx-1 mb-1">
                <input type="text" className={["form-control",styles.searchInput, styles.inputPlaceholder].join(' ')} placeholder="نام غذا"/>
            </div>
            </form>
            </div>
        </div>
    );
}

export default MainLogo