import React, { Component } from 'react';

function OrderItem(props) {
    return (
        <div>
            <div className="row order-row">
                <div className="col-5 order-col order-left-col text-center">
                    <button className="btn stat-button stat-in-way text-center disabled">پیک در مسیر</button>
                </div>
                <div className="col-5 order-col text-center">رستوران خامس</div>
                <div className="col-2 order-col text-center order-right-col">۱</div>
            </div>
            
            <div className="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row justify-content-center modal-title-row">
                                    <div className="col-md-6 justify-content-center modal-title-col">رستوران خامس</div>
                                </div>
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr className="modal-table-header">
                                            <th scope="col">قیمت</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">نام غذا</th>
                                            <th scope="col">ردیف</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td>برگر گوشت</td>
                                            <td>۱</td>
                                        </tr>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td>برگر مرغ</td>
                                            <td>۲</td>
                                        </tr>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td>پیتزا مخصوص</td>
                                            <td>۳</td>
                                        </tr>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td>پیتزا گوشت</td>
                                            <td>۴</td>
                                        </tr>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td> پیتزا مرغ</td>
                                            <td>۵</td>
                                        </tr>
                                        <tr>
                                            <td>۳۰۰۰۰</td>
                                            <td>۱</td>
                                            <td> پیتزا پپرونی</td>
                                            <td>۶</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-auto total-cost-row">
                                جمع کل: ۱۸۰۰۰ تومان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// class OrderItem extends Component {
    
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <div className="row order-row">
//                     <div className="col-5 order-col order-left-col text-center">
//                         <button className="btn stat-button stat-in-way text-center disabled">پیک در مسیر</button>
//                     </div>
//                     <div className="col-5 order-col text-center">رستوران خامس</div>
//                     <div className="col-2 order-col text-center order-right-col">۱</div>
//                 </div>
                
//                 <div className="modal fade" id="mymodal" tabindex="-1" role="dialog" aria-labelledby="mymodalLabel" aria-hidden="true">
//                     <div className="modal-dialog modal-xl" role="document">
//                         <div className="modal-content">
//                             <div className="modal-body">
//                                 <div className="container-fluid">
//                                     <div className="row justify-content-center modal-title-row">
//                                         <div className="col-md-6 justify-content-center modal-title-col">رستوران خامس</div>
//                                     </div>
//                                     <table className="table table-bordered text-center">
//                                         <thead>
//                                             <tr className="modal-table-header">
//                                                 <th scope="col">قیمت</th>
//                                                 <th scope="col">تعداد</th>
//                                                 <th scope="col">نام غذا</th>
//                                                 <th scope="col">ردیف</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td>برگر گوشت</td>
//                                                 <td>۱</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td>برگر مرغ</td>
//                                                 <td>۲</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td>پیتزا مخصوص</td>
//                                                 <td>۳</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td>پیتزا گوشت</td>
//                                                 <td>۴</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td> پیتزا مرغ</td>
//                                                 <td>۵</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>۳۰۰۰۰</td>
//                                                 <td>۱</td>
//                                                 <td> پیتزا پپرونی</td>
//                                                 <td>۶</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className="col-auto total-cost-row">
//                                     جمع کل: ۱۸۰۰۰ تومان
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }       
// }

export default OrderItem;