import React from 'react';
import axios from 'axios'; /* 통신모듈 axios연결 */

import './Company.css';

import Card from './Card';

class Application extends React.Component {
    
    // 데이터 가져오기
    constructor(){
        super();
        
        this.state = {
            count : 0,
            company : []
        }
        
        this.getList = this.getList.bind(this);
    }
    
    getList(){
        axios.get('http://localhost:4000/company') // 요청하면 response를 넘겨받음
            .then(response=>{ //성공하면 then
                console.log(response.data); // 콘솔로 response 잘 넘어오는지 확인
                this.setState({
                    count : response.data.count,
                    company : response.data.company
                });
            }).catch(error=>{ // 실패하면 catch
            
            });
    }
	
    render(){
        
        const { count , company } = this.state;
        
		return (
			<div>
                <button onClick={this.getList}>데이터 가져오기</button>
                <div>{count}</div> {/* 13으로 바뀔것 */}
                <hr style={{ margin : '10px 0' }} />
                <div className="container">
                    {company.map((value)=>{
                        console.log(value.name)
                        return <Card info={value} />
                    })}
                </div>
            </div>
		)
	}
}

export default Application;