import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import { UnauthorisedPath,AuthorisedPath } from '../utils/Path';
import styles from "../style/NavBar.module.scss"
import userStore from '../store/userStore';
import { observer } from 'mobx-react-lite';
import {useContext, useState} from "react";
import {Context} from "../index"
import cartContext, {useCart} from "../Context/cartContext";

const NavBar = (props) => {

    const {user} = useContext(Context)
    const history = useHistory();
    const {gender, setGender} = useCart()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

    const updateGenderMan = () => {
        console.log(gender)
        setGender('Male')

    }

    const updateGenderKids = () => {
        console.log(gender)
        setGender('Kids')

    }

    const updateGenderWoman = () => {
        console.log(gender)
        setGender('Female')
    }

    return (
     <Navbar style = {{maxHeight: 120}} bg="dark" variant="dark">
       <Container>
           <img src="https://freepngimg.com/thumb/categories/627.png" alt="react logo" style={{ width: '80px',height:'80px' }}/>
        <NavLink className = {styles.navLink} to = {UnauthorisedPath.MAINPAGE_ROUTE} >ShoesStyler</NavLink>
           <div className={styles.divBlock}>
               <NavLink onClick={updateGenderMan}
                        className = {styles.navLink}
                        to = {UnauthorisedPath.MANPAGE_ROUTE}>Чоловіче взуття
               </NavLink>
               <NavLink
                   onClick={updateGenderWoman}
                   className = {styles.navLink}
                   to = {UnauthorisedPath.WOMANPAGE_ROUTE}>Жіноче взуття
               </NavLink>
               <NavLink onClick={updateGenderKids}
                        className = {styles.navLink}
                        to = {UnauthorisedPath.KIDSPAGE_ROUTE}>Дитяче взуття
               </NavLink>
           </div>

        {userStore.isAuth
        ?<Nav className="ms-auto">
          <Button onClick={() => history.push(AuthorisedPath.ADMIN_ROUTE)} variant={'dark'}>Керування</Button>
          <Button onClick={() => logOut()} variant={'dark'} className='ms-3'>Вихід</Button>

                <NavLink className = {styles.navLink} to = {UnauthorisedPath.FAVORITEPAGE_ROUTE}>
                    <img className={styles.CartItem} src='https://freesvg.org/img/heart_jon_phillips_01.png' width='75' height='70'></img>
                </NavLink>

                <img onClick={props.onClickCart}   className={styles.CartItem} src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG15.png' width='75' height='70'></img>



         </Nav>
        :<Nav className="ms-auto">
          <Button onClick={() => history.push(UnauthorisedPath.LOGIN_ROUTE)} variant = {'outline-light'}>Аuthorization</Button>

         </Nav>}
        </Container>
     </Navbar>
    )
}

export default NavBar
