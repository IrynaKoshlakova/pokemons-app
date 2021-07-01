import React from 'react';






function Layout(props) {    
    return (              
        <div className = "wrapper">            
             {props.children} 	               
     	</div>               
    );	
};




 export default Layout;