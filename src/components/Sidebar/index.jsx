/* ------------------ STYLES -------------------*/
import styles from './styles.module.css'

/* ------------------ RESOURCES -------------------*/
import { useState } from 'react'

/* ------------------ IMGS -------------------*/
import assBck from '../../assets/images/assignature_bck.png'
import assWht from '../../assets/images/assignature_wht.png'

/* ------------------ ICONS -------------------*/
import { IoMdClose } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { AiFillTool } from "react-icons/ai";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

export default function Sidebar(props) {

    return (
        <div className={`${styles.sidebar} ${props.isUp ? styles.up : ''} p-3 position-fixed top-0`}>
            <div className={`d-flex justify-content-end mb-5`}>
                <div className={`d-flex col-2 justify-content-center align-items-center`}>
                    {/* <FaRegSun className={`me-1 ${props.dark ? '' : 'text-black'}`}/> */}
                    <label className={`${styles.switch}`}>
                        <input type="checkbox" checked={props.dark} onChange={e => props.changeTheme(e.target.checked)} />
                        <span className={`${styles.slider} border ${styles.round} ${props.dark ? 'border-light' : 'border-black'} ${props.dark ? styles.dark : styles.light}`}></span>
                    </label>
                    {/* <FaRegMoon className={`ms-1 ${props.dark ? '' : 'text-black'}`} /> */}
                </div>
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