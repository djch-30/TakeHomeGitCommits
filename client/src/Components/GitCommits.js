import React, { Component } from 'react';
import 'datatables.net-dt/js/dataTables.dataTables.min.js';
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from 'axios';

const $ = require('jquery');
$.DataTable = require('datatables.net');

export default class GitCommits extends Component {

    constructor(props){
        super(props);
        this.state={
            Commits:[]
        }
    }
    callApi(){
        var commitsT=[];
        axios.get('http://localhost:9000/gitCommitApi')
            .then((res) => {
                var jsonT = res.data;
                commitsT=[];
                if(jsonT.length >0){
                    for (var i = 0; i < jsonT.length; i++) {
                        var commitDate = new Date(jsonT[i].commit.committer.date);
                        commitDate.setHours(commitDate.getHours() -5);
                        var str = commitDate.toISOString().replace(/T|Z/g,' ');
                        commitsT.push({
                            "Commit Id":jsonT[i].sha,
                            "Author name":jsonT[i].commit.committer.name,
                            "Author email":jsonT[i].commit.committer.email,
                            "Date":str,
                            "Message Commit":jsonT[i].commit.message,
                            "URL":jsonT[i].commit.url
                        });
                    }
                    this.setState({
                        Commits:commitsT
                    });
                    var tableCommits = $('#tblCommits').DataTable();
                    if (tableCommits !== 'undefined') {
                        tableCommits.destroy();
                    }
                    tableCommits = $('#tblCommits').DataTable({
                        "aaData": this.state.Commits,
                        "bInfo": false,
                        "bLengthChange": false,
                        "aoColumns": [{
                            "mData": "Commit Id",
                        }, {
                            "mData": "Author name"
                        }, {
                            "mData": "Author email"
                        }, {
                            "mData": "Date"
                        }, {
                            "mData": "Message Commit"
                        }, {
                            "mData": "URL",
                            fnCreatedCell: function (nTd, sData, oData, iRow, iCol) {
                                if(oData.URL) {
                                    $(nTd).html("<a target='_blank' href='"+oData.URL+"'>Link</a>");
                                }
                            }
                        }
        
                        ]
                    });  

                    $("#divTable").css("display", "");
                }else{
                    alert("There are no commits in the repository.");
                }
                
            })
            .catch((error) => {
            
                console.log('Error. '+ error);
              })
    }
    componentDidMount(){
        this.callApi();

     }
    render(){
       return(
        <div>
            <div className="container" id="containerGits">
                <h3 className="h3-titleM"><b>Github commit monitoring</b></h3>
                
                <div className="panel panel-default">
                    
                    <div className="panel-body" id="divTable" style={{display:'none'}}>
                        
                        <table id="tblCommits" className="display" style={{width:"100%"}}>
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
