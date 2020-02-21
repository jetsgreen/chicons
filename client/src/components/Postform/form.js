import React from "react";
import "./form.css";

const Post = props => {
    
    return (
        <form>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm">
                        <label className="ApartmentPostLabel"><h3>Post your apartment for rent</h3></label>
                        <br></br>
                        <input className="form-control"
                            value={props.address}
                            type="text"
                            name="address"
                            placeholder="Address"
                            onChange={props.handleInputChange}
                        />
                    </div>
                </div>
                <br></br>
                <input className="form-control"
                    value={props.bedrooms}
                    type="text"
                    name="bedrooms"
                    placeholder="Bedrooms"
                    onChange={props.handleInputChange}
                />
                <br></br>
                <label className="label" for="exampleFormControlTextarea1">Apartment Description</label>
                <textarea className="form-control" rows="5"
                
                    value={props.description}
                    type="text"
                    name="description"
                    onChange={props.handleInputChange}
                />
                <br></br>
                <input className="form-control"
                    value={props.number}
                    type="number"
                    name="phonenumber"
                    placeholder="phone number"
                    onChange={props.handleInputChange}

                />

                <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                    Submit
            </button>
            </div>

        </form>
    )
}



export default Post