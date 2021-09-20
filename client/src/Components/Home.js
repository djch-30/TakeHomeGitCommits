import React, { Component } from 'react';

export default class GitCommits extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
         <div>
             
             <div className="container" id="containerGits">
                 <h2 className="h3-titleM"><b>API Methods Github</b></h2>
                 <br />
                 <div className="panel panel-default">
                        <div className="panel-body" style={{backgroundColor:'lightblue'}} >
                            <span style={{fontSize:'18px'}}><b>GET</b></span>
                            <span style={{fontSize:'14px',marginLeft:'50px'}}><b>/repos/'owner'/'repo'/commits</b></span>
                        </div>
                    </div>
                    <div className="container">
                        
                        <table className="table table-bordered table-striped ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>API</th>
                                    <th >Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>https://api.github.com/repos/'owner'/'repo'/commits</b></td>
                                    <td style={{fontSize:'12px'}}>The Repo Commits API supports listing, viewing, and comparing commits in a repository.</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <br/>
                        <h3 className="h3-titleM"><b>Request information</b></h3>
                        <br/>
                        <h4 className="h3-titleM"><b>URI Parameters</b></h4>
                        <br/>
                        <table className="table table-bordered table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Aditional information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>owner</b></td>
                                    <td style={{fontSize:'12px'}}>This value corresponds to the owner of the Github</td>
                                    <td style={{fontSize:'12px'}}>String</td>
                                    <td style={{fontSize:'12px'}}>Required</td>
                                </tr>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>repo</b></td>
                                    <td style={{fontSize:'12px'}}>his value corresponds to the repository to consult on the Github</td>
                                    <td style={{fontSize:'12px'}}>String</td>
                                    <td style={{fontSize:'12px'}}>Required</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <br/>
                        <h4 className="h3-titleM"><b>Header</b></h4>
                        <br/>
                        <table className="table table-bordered table-striped ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Key</th>
                                    <th >Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>Content-Type</b></td>
                                    <td style={{fontSize:'12px'}}>application/json</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
             </div>
             <br />
             <div className="container" id="containerGits">
                 <h2 className="h3-titleM"><b>API Methods NodeJS</b></h2>
                 <br />
                 <div className="panel panel-default">
                        <div className="panel-body" style={{backgroundColor:'lightblue'}} >
                            <span style={{fontSize:'18px'}}><b>GET</b></span>
                            <span style={{fontSize:'14px',marginLeft:'50px'}}><b>/gitCommitApi</b></span>
                        </div>
                    </div>
                    <div className="container">
                        
                        <table className="table table-bordered table-striped ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>API</th>
                                    <th >Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>http://localhost:9000/gitCommitApi</b></td>
                                    <td style={{fontSize:'12px'}}>This API is used in the backend to obtain the values ​​or commits from the repository</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        <br/>
                        <h3 className="h3-titleM"><b>Request information</b></h3>
                        <br/>
                        <h4 className="h3-titleM"><b>Header</b></h4>
                        <br/>
                        <table className="table table-bordered table-striped ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Key</th>
                                    <th >Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{fontSize:'12px'}}><b>Content-Type</b></td>
                                    <td style={{fontSize:'12px'}}>application/json</td>
                                </tr>
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
             </div>
             <br />
         </div>
        );
     }
}
