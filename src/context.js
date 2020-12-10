import React, { Component } from 'react';
import axios from 'axios'

const Context = React.createContext()

const reducer = (state, action)=>{
    switch(action.type){
        case 'SEARCH_TRACK':
            return {
                ...state,
                track_list : action.payload,
                heading: 'Search results'
            }
        default :
            return state
    }
}

export default class Provider extends Component {

    state = {
        track_list : [],
        heading : 'Top 10 tracks!',
        dispatch : action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=77387d33aea2a46bf49772e5609bd9a7`)
        .then(res => {
            this.setState({track_list: res.data.message.body.track_list})
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
               
            </Context.Provider>
        );
    }
}


export const Consumer = Context.Consumer;