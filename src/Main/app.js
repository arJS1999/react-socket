import React from 'react';
import View from './view';
import axios from 'axios';
import './view.css'

class App extends React.Component
{

    constructor()
    {
        super();
        this.state={
            collection:'',
            collection1:''
            
        }
    }

    componentDidMount(){
        this.getdata();
            }
        
            getdata(){
        axios.get('http://localhost:8000/user/relation').then(res=>{
            console.log(res.data.result[1])
            this.setState({
                collection:res.data.result[0].categoryid,
                collection1:res.data.result[1].categoryid
            })
        
        })
    }

            render(){
                return(
                    <><h1>eSports</h1><hr></hr>
                    
                                <View getdata={this.state.collection} getdata1={this.state.collection1} />
                            </>
                )
            }
}
export default App;