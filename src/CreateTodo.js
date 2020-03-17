import React, {Component} from "react"

class CreateTodo extends Component{
    constructor(props){
        super(props);

        this.onChangeTodoDesc = this.onChangeTodoDesc.bind(this);
        this.onChangeTodoResp = this.onChangeTodoResp.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,

        }

    }

    onChangeTodoDesc(e){

        this.setState({
            todo_description: e.target.value
        });

    }

    onChangeTodoResp(e){

        this.setState({
            todo_responsible: e.target.value
        });

    }

    onChangeTodoDesc(e){

        this.setState({
            todo_description: e.target.value
        });

    }

    onChangeTodoPriority(e){

        this.setState({
            todo_priority: e.target.value
        });

    }

    onSubmit(e){
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Todo description: ${this.state.todo_description}`);
        console.log(`Todo responsible: ${this.state.todo_responsible}`);
        console.log(`Todo priority: ${this.state.todo_priority}`);
        console.log(`Todo completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false,

        })

    }
    render(){
        return(
            <div style ={{marginTop: 20}}>
                <h3>Create new Todo</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className= "form-group">
                        <label>description: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_description}
                               onChange= {this.onChangeTodoDesc}
                               />
                               
                    </div>
                    <div className= "form-group">
                        <label>responsible: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.todo_responsible}
                               onChange= {this.onChangeTodoResp}
                               />
                               
                    </div>
                   
                    <div className="form-group">
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.todo_priority==='Low'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Low</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.todo_priority==='Medium'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">Medium</label>

                        </div>
                        <div className="form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.todo_priority==='High'}
                                   onChange={this.onChangeTodoPriority}
                                   />
                            <label className="form-check-label">High</label>

                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create Todo" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
               
            </div>
        )
    }
}

export default CreateTodo