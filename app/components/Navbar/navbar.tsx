"use client";

import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "./navbar.css"
import { LayoutSlice, showSidebar, useDispatch, useSelector } from "@/lib/redux";
import { FaBars, FaBell, FaSearch, FaTimes } from "react-icons/fa";
const profile = "https://www.w3schools.com/howto/img_avatar.png"

export const NavBar = () => {
    const dispatch = useDispatch();
    const layoutSlice = LayoutSlice.actions
    const showValue = useSelector(showSidebar);

    const setSideBar = () => {
        const setsidebar = Boolean(!showValue)
        dispatch(layoutSlice.setShowSidebar(setsidebar));
    }

    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar ${showValue ? 'full' : ''}`}>
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ marginLeft: '12px' }}>
                        {showValue ? <FaBars size={20} className="icon" onClick={() => setSideBar()} /> :
                            <FaTimes size={25} className="icon" onClick={() => setSideBar()} />
                        }

                    </Nav>
                    <Nav style={{alignItems:"center"}}>
                        <Form.Control placeholder="Search" style={{ marginRight: "10px" }} />
                        <div>
                            <FaSearch size={24} style={{ marginRight: "30px" }} className="icon" />
                        </div>
                        <div>
                            <FaBell size={24} style={{ marginRight: "30px" }} className="icon" />
                        </div>
            
                        
                        <div style={{cursor:"pointer"}}>
                            <img src={profile} className="circle" />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};