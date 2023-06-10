import React from "react"
import styles from "../style/MainPage.module.scss";


const AppFooter = (): JSX.Element => <footer className={styles.footer}>
    <div className="container-fluid text-center text-md-left">
        <div className={styles.socialMedia}>
            <div className="social github">
                <a href="#" target="_blank"><i className="fa fa-github fa-2x"></i></a>
            </div>
            <div className="social youtube">
                <a href="#" target="_blank"><i className="fa fa-youtube fa-2x"></i></a>
            </div>
            <div className="social instagram">
                <a href="#" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
            <div className="social facebook">
                <a href="#" target="_blank"><i className="fa fa-facebook fa-2x"></i></a>
            </div>
            <div className="social pinterest">
                <a href="#" target="_blank"><i className="fa fa-pinterest fa-2x"></i></a>
            </div>
            <div className="social linkedin">
                <a href="#" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
            </div>
            <div className="social telegram">
                <a href="#" target="_blank"><i className="fa fa-paper-plane fa-2x"></i></a>
            </div>
        </div>




        <div className="row">
            <div className="col-md-6 mt-md-0">
                <h5 className="text-uppercase">Інформація</h5>
                <p>Найголовніше для ваших ніг- це якісне взуття,тому хутчіше обирай собі пару</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Мережі</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Контактні мережі</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>

    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> Розробка by Denis Sidorenko</a>
    </div>

</footer>

export default AppFooter