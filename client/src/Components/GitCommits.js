import React, { Component } from 'react';
import 'datatables.net-dt/js/dataTables.dataTables.min.js';
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from 'axios';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class GitCommits extends Component {

    constructor(props){
        super(props);
    }

    render(){
       return(
        <div>
            <div className="container" id="containerGits">
                <h3 className="h3-titleM"><b>Github commit monitoring</b></h3>
                
                <div className="panel panel-default">
                    
                    <div className="panel-body" id="divTable" style={{display:'none'}}>
                        
                        <table id="usersPC" className="display" style={{width:"100%"}}>
                            <thead>
                                <tr>
                                    <th>Commmit Id</th>
                                    <th>Author Name</th>
                                    <th>Author email</th>
                                    <th>Date</th>
                                    <th>Message Commit</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            
                        </table>
                    </div>
                    
                </div>
            </div>
            <br />
        </div>
       );
    }
}