import React from 'react'
import logo from './logo.png'
import styles from './mainLogo.module.css'
import SearchBar from './searchBar/searchBar'


function MainLogo(props) {
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
                <SearchBar updateRestaurants = {props.updateRestaurants}/>
            </div>
        </div>
    );
}

export default MainLogo