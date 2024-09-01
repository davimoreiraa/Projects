/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ IMGS -------------------*/
import assBck from '../../assets/images/assignature_bck.png'
import assWht from '../../assets/images/assignature_wht.png'

/* ------------------ ICONS -------------------*/
import { IoMdClose } from "react-icons/io";

export default function Sidebar(props) {

    return (
        <div className={`${styles.sidebar} p-2 position-absolute top-0 start-0 border-end`}>
            <div className={`d-flex justify-content-between mb-5`}>
                <div className={`col-3 `}>
                        <img src={props.dark ? assWht : assBck} alt='logo' className={`${styles.wd}`}/>
                    </div>
                <div onClick={props.closeSideBar}><IoMdClose className={`fs-1 ${props.dark ? '' : 'text-black'}`}/></div>
            </div>
            <nav>
                <ul className={`list-unstyled`}>
                    <li className={`col-12`}>Sobre mim</li>
                    <li className={`col-12`}>Principais projetos</li>
                    <li className={`col-12`}>Principais ferramentas</li>
                </ul>
            </nav>
        </div>
    )
}