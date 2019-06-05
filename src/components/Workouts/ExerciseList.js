import React, { Component } from 'react';
// import JWPlayer from 'react-jwplayer';
import ReactJWPlayer from 'react-jw-player';

class ExerciseList extends Component {
    state = {
        video: '',
        players: {
            '16': {
              id: '8EjS1km7',
              padding: '56.25%'
            },
            '4': {
              id: '7J2hxr9K',
              padding: '75%'
            },
            '16loop': {
              id: 'Zq6jSGRj',
              padding: '56.25%'
            },
            '4loop': {
              id: 'R4xwKxIJ',
              padding: '75%'
            },
          },
          player: '16',
      wrapper: {
        position: 'relative',
        overflow: 'hidden'
      },
      iframe: {
        width: '100%',
        height: '100%',
        frameBorder: '0',
        scrolling: 'auto',
        style: {
          position: 'absolute',
        },
        allowFullScreen: true,
      },
    }

    loadVideo(video) {
        this.setState({
            video
        });
    }

    render() {
        const {exercises, completedDay, markCompleted} = this.props;
        const exe = exercises[0];
        return (
            <div className="list-group workout-group">
                {
                    exe && exe.exercise && exe.exercise.length > 0 ? 
                    (
                        exe.exercise.map((e, i) => {
                            console.log(e)
                            const imageA = `./imagesa/${e.images[0]}`;
                            const imageB = `./imagesa/${e.images[1]}`;
                            return (
                                <div
                                    onClick={() => this.loadVideo(e.videos[0])}
                                    data-toggle="modal" 
                                    data-target="#exercise-modal" 
                                    className="list-group-item workout-group-item list-group-action" 
                                    key={i}>
                                    <div className="d-flex w-100 align-items-center workout-item-content">
                                        <div className="image-content workout-item-images">
                                            <figure className="figure workout-image">
                                                <img src={imageA} className="figure-img img-fluid rounded" alt="image0" />
                                            </figure>
                                            <figure className="figure workout-image d-none">
                                                <img src={imageB} className="figure-img img-fluid rounded" alt="image1" />
                                            </figure>
                                        </div>
                                        <div className="workout-description flex-grow-1 align-self-stretch d-flex flex-column justify-content-center">
                                            <p className="workout-title">{e.title}</p>
                                            <ul className="workout-sets list-unstyled">
                                                {
                                                    e.sets ? (
                                                        e.sets.map((set, i) => {
                                                            return (
                                                                <li key={i}><small>{set}</small></li>
                                                            )
                                                        })
                                                    ) : ''
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : ('No gym today')
                }
                
                {
                    (exe.dayOrderId > completedDay) ?
                    (
                        <button
                            type="button" 
                            className="btn btn-primary rounded-pill fixed-bottom btn-mark-completed d-flex px-3 py-2"
                            onClick={() => markCompleted(exe.dayOrderId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                            <span className="ml-2">Mark completed</span>
                        </button>
                    ) :
                    (
                        <span className="fixed-bottom btn-mark-completed d-flex px-3 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#80868b" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
                            <span className="ml-2 text-secondary">Day completed</span>
                        </span>
                    )
                }
    
               
                <div className="modal fade" id="exercise-modal" tabIndex="-1" role="dialog" aria-labelledby="exercise-modalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-body p-0 rounded">
                        <ReactJWPlayer
                            playerId='exercise-video-player'
                            playerScript="https://cdn.jwplayer.com/libraries/AsiyNgca.js"
                            file={`${this.state.video}`}
                            isAutoPlay="true"
                            isMuted="true"
                            customProps={{ 
                                skin: { name: 'six' }, 
                                controls: false,
                            }}
                        />


                            {/* <div className="modal-body" style={{
                                paddingBottom: this.state.players[this.state.player]['padding'],
                                ...this.state.wrapper,
                                }}> */}
                            {/* <iframe title="a"
                                { ...this.state.iframe }
                                src={ `${this.state.video}-${this.state.players[this.state.player]['id']}.html` }
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
                      
            </div>
        );
    }    
};

export default ExerciseList;

/*
<a href="/s" className="list-group-item workout-group-item list-group-action">
    <div className="d-flex w-100 align-items-center workout-item-content">
        <div className="image-content workout-item-images">
            <figure className="figure workout-image">
                <img src={"/images/30-day-abs-xdb-hanging-exercise-ball-leg-raise-a-130x130.jpg"} className="figure-img img-fluid rounded" alt="kl" />
            </figure>
            <figure className="figure workout-image d-none">
                <img src={"/images/30-day-abs-xdb-hanging-exercise-ball-leg-raise-b-130x130.jpg"} className="figure-img img-fluid rounded" alt="kl" />
            </figure>
        </div>
        <div className="workout-description flex-grow-1 align-self-stretch d-flex flex-column justify-content-center">
            <p className="workout-title">Ab Rollout</p>
            <ul className="workout-sets list-unstyled">
                <li><small>4 sets, 10 reps</small></li>
                <li><small>4 sets, 10 reps</small></li>
            </ul>
        </div>
    </div>
</a>
*/