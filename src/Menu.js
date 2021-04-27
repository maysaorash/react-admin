import React, { Component } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { RiPriceTagLine } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscStarHalf } from "react-icons/vsc";
import { VscCommentDiscussion } from "react-icons/vsc";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { FaElementor } from "react-icons/fa";
import { GrCirclePlay } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
import { GrFormSchedule } from "react-icons/gr";
import { RiTableLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ImFileText2 } from "react-icons/im";
import { RiPagesLine } from "react-icons/ri";
import { IoDocumentsSharp } from "react-icons/io";



export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
   <div>
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} /> 
       {/* <img src="../assets/images/logo.png" class="img-fluid rounded-normal" alt=""></img> */}
      <span className="brand-text font-weight-light" style={{ color: 'red' }}>STREAMIT </span> 
     
     {/* <ul className="navbar-nav"> */}
      <div className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" style={{ color: 'red' }}><i className="fas fa-bars" /></a>
      </div>
      </a>
      </div>
     
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">STREAMIT</a>
        </div>
      </div> */}
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active" style={{ color: 'red' }}>
              {/* <i className="nav-icon fas fa-tachometer-alt" /> */}
              {/* <i className="ri-arrow-right-line"></i> */}
               < BsArrowRight/>          
              <p>
                Visit Site
                {/* <i className="right fas fa-angle-left" /> */}
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link active" style={{ color: 'red' }}>
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <AiFillHome/>
                  <p>Dashboard </p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              {/* <i className="nav-icon fas fa-th" /> */}
              <VscStarHalf/>
              <p>
                Rating
                {/* <span className="right badge badge-danger">New</span> */}
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-copy" /> */}
              <VscCommentDiscussion/>
              <p>
                Comment
                {/* <i className="fas fa-angle-left right" /> */}
                {/* <span className="badge badge-info right">6</span> */}
              </p>
            </a>
         
         
          
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-chart-pie" /> */}
              <FiUsers/>
              <p>
              User
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-tree" /> */}
              <AiOutlineBars/>
              <p>
                Category
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/UI/general.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <AiOutlineUserAdd/>
                  <p>Add Category</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/icons.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <BsEyeFill/>
                  <p>Category List</p>
                </a>
              </li>
          
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-edit" /> */}
              <MdLocalMovies/>
              <p>
                Movie
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <AiOutlineUserAdd/>
                  <p>Add Movie</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <BsEyeFill/>
                  <p>Movie List</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-table" /> */}
              <MdLocalMovies/>
              <p>
                Show
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/tables/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <AiOutlineUserAdd/>
                  <p>Add Show</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/data.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <BsEyeFill/>
                  <p>Movie List</p>
                </a>
              </li>
            </ul>
          </li>
         
        
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon far fa-envelope" /> */}
              <RiPriceTagLine />
              <p>
                Pricing
              
              </p>
            </a>
          </li>
          
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon fas fa-book" /> */}
              <FaElementor/>
              <p>
                UI Elements
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/invoice.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <GrCirclePlay/>
                  <p>UI Kit</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/profile.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <FaWpforms/>
                  <p>Forms</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/e_commerce.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <GrFormSchedule/>
                  <p>Forms Wizard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/projects.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <RiTableLine/>
                  <p>Table</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project_add.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <AiOutlineUnorderedList/>
                  <p>Icons</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              {/* <i className="nav-icon far fa-plus-square" /> */}
              <ImFileText2/>
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/login.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <RiPagesLine/>
                  <p>Authentication</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/register.html" className="nav-link">
                  {/* <i className="far fa-circle nav-icon" /> */}
                  <IoDocumentsSharp/>
                  <p>Extra Pages</p>
                </a>
              </li>
            </ul>
          </li>
         
        </ul> 
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}