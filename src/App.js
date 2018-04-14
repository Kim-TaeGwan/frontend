import React from 'react';
import axios from 'axios'; {/* axios연결 */}
class App extends React.Component {
    
    getCompany() {
        //axios
        axios.get('http://localhost:4000/company') // 요청하면 response를 넘겨받음
            .then((response)=>{
                console.log(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        
    }
    
	render() {
		return(
            <div>
                <div>백엔드 통신 해보기</div>
                <button onClick={this.getCompany.bind(this)}>
                    통신시작</button>
            </div>
		)
	}
}

export default App;