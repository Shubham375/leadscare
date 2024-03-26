"use client";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [proOpen, setProOpen] = useState(false);
    const [anchorEl,setAnchorEl]=useState();
    const [proanchorEl,setProanchorEl]=useState();

    return (<>
        <nav className="w-screen h-[4.5rem] flex flex-row justify-evenly max-md:h-[4rem] shadow">
            <div className="h-full w-[15rem] max-md:w-[10rem]">

            </div>
            <ul className="flex flex-row w-[8rem] h-full items-center justify-between font-bold max-md:w-[6rem] md:w-1/5">
                <Link className="max-md:hidden" href={'/'}>Home</Link>
                <Link className="max-md:hidden" href={'/about'}>About</Link>
                <Link className="max-md:hidden" href={'/contact'}>Contact</Link>

                <div className="w-fit h-fit md:hidden" onClick={(e) =>{setOpen(!open);setAnchorEl(e.currentTarget)}}>
                    {open ? <CloseIcon /> : <MenuIcon />}
                    <Menu  open={open} onClose={() => setOpen(false)}
                    anchorEl={anchorEl}
                    anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                    transformOrigin={{vertical:'top',horizontal:'left'}}
                    >
                    
                        <MenuItem component={Link} href="/">Home</MenuItem>
                        <MenuItem component={Link} href="/about">About</MenuItem>
                        <MenuItem component={Link} href="/contact">Contact</MenuItem>
                    
                    </Menu>
                </div>
                <div onClick={(e) =>{setProOpen(!proOpen);setProanchorEl(e.currentTarget)}}>
                    <PersonOutlineIcon/>
                    <Menu  open={proOpen} onClose={() => setProOpen(false)}
                    anchorEl={proanchorEl}
                    anchorOrigin={{vertical:'bottom',horizontal:'left'}}
                    transformOrigin={{vertical:'top',horizontal:'left'}}
                    >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My Course</MenuItem>
                        <MenuItem >Upgarde</MenuItem>
                        <MenuItem >Affiliate Panel</MenuItem>
                    </Menu>
                </div>
                
            </ul>
        </nav>
    </>)
}

/* const bottomNav = () => {
    return(
        <nav>
            <ul>
                <Link>Home</Link>
                <Link>Courses</Link>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </ul>
        </nav>
    )
}; */

export default Navbar;