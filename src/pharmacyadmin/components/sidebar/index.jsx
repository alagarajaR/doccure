import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class SidebarNav extends Component {
    constructor(props){
      super(props);
      this.state={
        show: null
      }
    }
  
    componentDidMount() {
      let $slimScrolls = $('.slimscroll');

      if($slimScrolls.length > 0) {
        $slimScrolls.slimScroll({
          height: 'auto',
          width: '100%',
          position: 'right',
          size: '7px',
          color: '#ccc',
          allowPageScroll: false,
          wheelStep: 10,
          touchScrollStep: 100
        });
        let wHeight = $(window).height() - 60;
        $slimScrolls.height(wHeight);
        $('.sidebar .slimScrollDiv').height(wHeight);
        $(window).resize(function() {
          let rHeight = $(window).height() - 60;
          $slimScrolls.height(rHeight);
          $('.sidebar .slimScrollDiv').height(rHeight);
        });

      $('#sidebar-menu a').on('click', function(e) {
        if($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
    }
  }
  handleShow(id){
    this.setState({
        show: id
    })
  }
  
  render() {
   
    const {  location } = this.props
    let pathname = location.pathname

   return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title"> 
            <span>Main</span>
          </li>
          <li className={pathname === '/pharmacyadmin' ?"active" :""}> 
            <Link to="/pharmacyadmin"><i className="fe fe-home" /> <span>Dashboard</span></Link>
          </li>
          <li className="submenu">
            <a href="#"><i className="fe fe-document" /> <span> Products</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={pathname.includes('products') ?"active" :""} to="/pharmacyadmin/products">Products</Link></li>
              <li><Link className={pathname.includes('add-product') ?"active" :""} to="/pharmacyadmin/add-product">Add Product</Link></li>
              <li><Link className={pathname.includes('outstock') ?"active" :""} to="/pharmacyadmin/outstock">Out-Stock</Link></li>
              <li><Link className={pathname.includes('expired') ?"active" :""} to="/pharmacyadmin/expired">Expired</Link></li>
            </ul>
          </li>
          <li className={pathname.includes('categories') ?"active" :""}> 
            <Link to="/pharmacyadmin/categories"><i className="fe fe-layout" /> <span>Categories</span></Link>
          </li>
          <li className="submenu">
            <a href="#"><i className="fe fe-star-o" /> <span> Purchase</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={pathname.includes('purchase') ?"active" :""} to="/pharmacyadmin/purchase">Purchase</Link></li>
              <li><Link className={pathname.includes('add-purchase') ?"active" :""} to="/pharmacyadmin/add-purchase">Add Purchase</Link></li>
              <li><Link className={pathname.includes('order') ?"active" :""} to="/pharmacyadmin/order">Order</Link></li>
            </ul>
          </li>
          <li className={pathname.includes('sales') ?"active" :""}><Link to="/pharmacyadmin/sales"><i className="fe fe-activity" /> <span>Sales</span></Link></li>
          <li className="submenu">
            <a href="#"><i className="fe fe-user" /> <span> Supplier</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={pathname.includes('supplier') ?"active" :""} to="/pharmacyadmin/supplier">Supplier</Link></li>
              <li><Link className={pathname.includes('add-supplier') ?"active" :""} to="/pharmacyadmin/add-supplier">Add Supplier</Link></li>
            </ul>
          </li>
          <li className={pathname.includes('transactions-list') ?"active" :""}><Link to="/pharmacyadmin/transactions-list"><i className="fe fe-table" /> <span>Transaction</span></Link></li>
          <li className="submenu">
            <a href="#"><i className="fe fe-document" /> <span> Reports</span> <span className="menu-arrow" /></a>
            <ul style={{display: 'none'}}>
              <li><Link className={pathname.includes('invoice-report') ?"active" :""} to="/pharmacyadmin/invoice-report">Invoice Reports</Link></li>
            </ul>
          </li>
          <li className="menu-title"> 
            <span>Pages</span>
          </li>
          <li className={pathname.includes('profile') ?"active" :""}> 
            <Link to="/pharmacyadmin/profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
          </li>
          <li className={pathname.includes('settings') ?"active" :""}> 
            <Link to="/pharmacyadmin/settings"><i className="fe fe-vector" /> <span>Settings</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
}

export default withRouter(SidebarNav);
