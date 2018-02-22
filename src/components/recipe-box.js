import React from 'react';

 export default  (props) => {
        return (
            <div>
                <div className="card card-outline-primary mb-3 text-center">
                    <div className="card-block">
                        <form>
                            <div className="form-group">
                                <label>{props.name}</label>
                                <input type="text" className="form-control" id="nameInput" defaultValue={props.name}  onChange={props.onNameChange}/>
                                <label>Ingredients</label>
                                <input type="text" className="form-control" id="ingredientsInput" defaultValue={props.ingredients} placeholder="use commas to seperate ingredients" onChange={props.onIngredientsChange}/>
                            </div>
                            <button onClick={props.updateRecipe}type="submit" className="btn btn-success">Update</button>
                            <button onClick={props.deleteRecipe} type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


