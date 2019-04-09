import React from 'react';
import styles from './Layout.module.css';
import Navbar from './../ui/Navbar/Navbar';
import Footer from './../ui/Footer/Footer';

const Layout = props => {
	return (
		<div className = {styles.Container}>
			<Navbar newHandler = {props.newHandler} showNew = {!props.selectedItems.length}/>
			
			<div className = {styles.CourseListContainer}>
				{props.children}
			</div>
			
			{props.selectedItems.length!==0?<Footer 
									selectedItems = {props.selectedItems}
									deleteHandler = {props.deleteHandler}
									editHandler = {props.editHandler}
									showConfirmDialog = {props.showConfirmDialog}
									confirmedHandler = {props.confirmedHandler}
									cancelHandler = {props.cancelHandler}
										/>:null}
		</div>
	);
}

export default Layout
