import React from "react";
import { Link } from "react-router-dom";

export default function Track({ track }) {
  return (
    <div className="col-md-6">
      <div className="card mb-4 bg-dark shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="bi bi-play-fill"></i> Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="bi bi-disc-fill"></i> Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-info w-100"
          >
            <i className="bi bi-chevron-compact-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
