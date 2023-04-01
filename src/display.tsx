import React from 'react'
import axios from 'axios';
import {FileI} from './FileI'
import { Link } from "react-router-dom";

import './Style.css'
interface FileStaate{
    files:FileI[]
}

export class Display extends React.Component<{},FileStaate>{
   
   constructor(props:any){
    super(props)
    this.state = {
      
        files:[]
    }
   }
     dta:any = [];
    remove(id):any{
        console.log(id);
          try {
           axios.delete(`http://localhost:3001/remove/${id}`).then(response=>{
               
            //  console.log(response.data);
            })
          } catch (error) {
           console.log(error);
          }
      this.componentDidMount();
       } 

    componentDidMount(): void {
        const url = "http://localhost:3001/getFiles";
        axios.get(url).then(
            res=>{
                
               this.dta = (res.data) ;
           
               console.log(this.dta);
             this.setState({
               files:this.dta
             })
                //console.log(JSON.parse(this.dta))
                
            }
            
        )
        
    }


   

    render() {
        return (
          <div>
            <h3 className="title">Available files</h3>
            <Link to="FileUpload">
              {" "}
              <button className="btnAdd">add</button>{" "}
            </Link>
            <table className="table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Size</th>
                  <th>Uploaded Date</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                {this.state.files.map((file) => (
                  <tr>
                    <td>{file.filename}</td>
                    <td>{file.size}</td>
                    <td>{file.uploaddate}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => this.remove(file.filename)}
                        className="btnDelete"
                      >
                        delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}