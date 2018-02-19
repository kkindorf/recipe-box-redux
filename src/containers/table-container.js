import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import {fetchAllTimeLeaders} from '../actions/index';
import {fetchThirtyDayLeaders} from '../actions/index';
import Header from '../components/header';
import Table from '../components/table';
import TableRow from '../components/table-row';

class TableContainer extends Component {
    constructor(props){
        super(props);
        this.state = {thirtyDayLeadersClicked: false};
        this.getThirtyDayLeaders = this.getThirtyDayLeaders.bind(this);
        this.getAllTimeLeaders = this.getAllTimeLeaders.bind(this);
      }
    componentDidMount() {
        this.props.fetchAllTimeLeaders();
    }
    getAllTimeLeaders() {
        this.props.fetchAllTimeLeaders();
        this.setState({thirtyDayLeadersClicked: false})
    }
    getThirtyDayLeaders() {
        this.props.fetchThirtyDayLeaders();
        this.setState({thirtyDayLeadersClicked: true})
    }
    render() {
        if(this.state.thirtyDayLeadersClicked) {
            let rows = this.props.thirtyDayLeaders.map(function(obj, index) {
                return(
                  <TableRow key={index}
                            row= {index+1}
                            src={obj.img}
                            url = {'https://freecodecamp.com/'+obj.username}
                            name= {obj.username}
                            points = {obj.recent}
                            allPoints= {obj.alltime}
                            />
                )
            })
            return (
                <div>
                    <Header/>
                    <Table
                    onClickThirty={this.getThirtyDayLeaders}
                    onClickAll={this.getAllTimeLeaders}
                    rows = {rows}/>
                </div>
    
            )
        }
        else {
            let rows = this.props.allTimeLeaders.map(function(obj, index) {
                return(
                  <TableRow key={index}
                            row= {index+1}
                            src={obj.img}
                            url = {'https://freecodecamp.com/'+obj.username}
                            name= {obj.username}
                            points = {obj.recent}
                            allPoints= {obj.alltime}
                            />
                )
            })
            return (
                <div>
                    <Header/>
                    <Table
                    onClickThirty={this.getThirtyDayLeaders}
                    onClickAll={this.getAllTimeLeaders}
                    rows = {rows}/>
                </div>
    
            )
        }
    }
}

function mapStateToProps(state) {
    //use allTimeLeaders here as this.props.allTimeLeaders to return data array from request in action
    return {
        allTimeLeaders: state.allTimeLeaders,
        thirtyDayLeaders: state.thirtyDayLeaders
    }
    
}

function mapDispatchToProps(dispatch) {
    //whenever fetchAllTimeLeaders is called, the result should be passed to all of our reducers
    return bindActionCreators({fetchAllTimeLeaders: fetchAllTimeLeaders, fetchThirtyDayLeaders: fetchThirtyDayLeaders}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);