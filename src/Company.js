import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Company.css';

import Card from './Card';

// 라이프 사이클

class Company extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            count : 0,
            company : []
        }
    }
    
    componentDidMount() { // react lifecycle
/*        const self = this; // 테스트
        setTimeout(function() {
            this.setState ({count : 5});
        },5000); */
        
        // 통신을 해서 카운트가 13이 되게 해줘야 한다.
        axios.get('http://localhost:4000/company')
            .then(response=>{
                this.setState({
                    count : response.data.count,
                    company : response.data.company
                });
        }).catch(error=>{
        
        });
    }
    
    
    companyDetails(id) {
//        this.props.history.push('/company/' + id); // ' 이용
        this.props.history.push(`/company/${id}`); // es6문법 ` 이용
    }
    
	render() {
        
        const {company} = this.state;
        
		return(
            <div className="container">
                    {company.map((value)=>{
//                        console.log(value.name)
                        return( 
                        <div key={value.id}
                            onClick={this.companyDetails.bind(this,value.id)}>
                                <Card info={value} />
                        </div>
                        )    
                    })}
                
                {/*{this.state.count} */}
             {/* Company 전체 리스트
                <Link to="/company/1">1번 상세내역 보기</Link>
                <div onClick={this.companyDetails.bind(this,2)}>2번 상세내역 보기</div>
                <div onClick={this.companyDetails.bind(this,3)}>3번 상세내역 보기</div> */}
            </div>
		)
	}
}

export default Company;