import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //BrowserRouter as Router에 as를 붙이면 줄여쓸수있음 // Router, Route 두개의 기능을 빼옴

import Company from './Company';
import Details from './Details';

class Web extends React.Component {
    
	render() {
        
		return(
            <Router>
                <div>
                    <Route exact path="/company" component={Company}/> {/* 유저가 사용할 경로설정 */}
                    <Route path="/company/:id" component={Details} />
                </div>
            </Router>    
		)
	}
}

export default Web;