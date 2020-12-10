import React from 'react'
import {Link} from 'react-router-dom'
export default function TrackComponent(props) {
    
    const {item} = props;
    
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{item.artist_name}</h5>
                    <p className="card-text">
                        <strong>
                            <i className="fas fa-play"> Track:</i>{item.track_name}
                        </strong>
                        <br/>
                        <strong>
                            <i className="fas fa-compact-disc"> Album:</i>{item.album_name}
                        </strong>
                    </p>
                    <Link to={`lyrics/track/${item.track_id}`} className='btn btn-dark btn-block'>
                        <i className="fas fa-chevron-right"> View Lyrics</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
