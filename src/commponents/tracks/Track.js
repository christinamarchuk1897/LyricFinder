
import React, { Component } from 'react';
import {Consumer} from '../../context'
import Spinner from '../layout/Spinner'
import TrackComponent from '../tracks/TrackComponent'
class Track extends Component {
    render() {
        return (
            <Consumer>
                {value=>{
                    const {track_list, heading} = value
                    if(track_list === undefined || track_list.length === 0){
                       return <Spinner/>
                    }else{
                        return (
                            <React.Fragment>
                                <h3 className='text-center mb-4'>{heading}</h3>
                                 <div className="row">
                                    {track_list.map(el=>{
                                        return (
                                            <React.Fragment>
                                                <TrackComponent key={el.track.track_id} item={el.track}/>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                            );
                    }
                }}
            </Consumer>
        );
    }
}

export default Track;
