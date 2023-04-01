import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export class FileUpload extends React.Component{
    state = {
        selectedFile:'',
        fileName:'',
        size:'',
    }
    
    constructor(_props:any){
        super(_props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event: any ) {
        this.setState({
            selectedFile: event.target.files[0],
            fileName: event.target.files[0].name,
            size: event.target.files[0].size,
          })
    }
 
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        data.append('name', this.state.fileName)
        data.append('size', this.state.size)
        let url = "http://localhost:3001/add";
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
 
    }
 
    render(){
        return(
            <div className='addTempl'>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />
 
                            <h3 className="text-white">Upload files </h3>
                            <br />
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>
 
                            <div className="form-row">
                                <div className="col-md-6">
                                <Link to ='/'> <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button> </Link>
                                 </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;