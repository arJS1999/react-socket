import React from 'react';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import {Button} from "@material-ui/core";

class View extends React.Component
{
    constructor(){
        super();
        
    }
    render(){
        return(

           <><Container>

                <div className='row'>
                <h3>Bat</h3>

                    {this.props.getdata.length > 0 ? (
                        this.props.getdata.map(e => {
                            return (
                                <div className='col-md-3'>

                                    <Card>
                                        <div key={e.id}>
                                            <p className='product'>{e.product_name}</p>
                                            <img src={e.product_image} alt="icons" />

                                            <div className="text-center">
                                                <Button color='primary'>Add Cart</Button>
                                            </div>
                                        </div>

                                    </Card>
                                </div>
                            );
                        })
                    ) : (
                        <p>no data</p>
                    )}
                </div>
            </Container>
            <br></br>
            <Container>

                    <div className='row'>
                        <h3>Ball</h3>
                        {this.props.getdata1.length > 0 ? (
                            this.props.getdata1.map(e => {
                                return (
                                    <div className='col-md-3'>

                                        <Card>
                                            <div key={e.id}>
                                                <p className='product'>{e.product_name}</p>
                                                <div className="text-center">
                                                    <Button color='primary'>Add Cart</Button>
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                );
                            })
                        ) : (
                            <p>no data</p>
                        )}
                    </div>
                </Container></>
            
        )
            
    }
}
export default View;