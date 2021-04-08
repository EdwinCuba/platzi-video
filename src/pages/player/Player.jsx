import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setVideoSource } from '../../actions';
import './styles/Player.css';

const Player = props => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.setVideoSource(id);
  }, [])

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>

      <button
        className="Player-back"
        onClick={() => props.history.goBack()}
      >Back</button>
    </div>
  ) :
    (<h1>No hay Video</h1>)
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = {
  setVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);