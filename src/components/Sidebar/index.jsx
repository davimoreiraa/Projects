/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ COMPONENTS -------------------*/
import ThemeToggle from '../ThemeToggle'

/* ------------------ IMGS -------------------*/
import assBck from '../../assets/images/assignature_bck.png'
import assWht from '../../assets/images/assignature_wht.png'

/* ------------------ ICONS -------------------*/
import { IoMdClose } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { AiFillTool } from "react-icons/ai";

export default function Sidebar(props) {

    return (
        <div className={`${styles.sidebar} ${props.isUp ? styles.up : ''} p-3 position-fixed top-0`}>
            <div className={`d-flex justify-content-end mb-5`}>
                <ThemeToggle />
                <div onClick={props.closeSideBar}><IoMdClose className={`fs-1 ${props.dark ? '' : 'text-black'}`}/></div>
            </div>
            <nav>
                <ul className={`list-unstyled`}>
                    <li className={`fs-3 mb-4 col-12`}><button className={`bg-transparent border-0 text-light`}><IoMdPerson /> Sobre mim</button></li>
                    <li className={`fs-3 mb-4 col-12`}><button className={`bg-transparent border-0 text-light`}><RiPagesLine /> Principais projetos</button></li>
                    <li className={`fs-3 mb-4 col-12`}><button className={`bg-transparent border-0 text-light`}><AiFillTool /> Principais ferramentas</button></li>
                </ul>
            </nav>
        </div>
    )
}