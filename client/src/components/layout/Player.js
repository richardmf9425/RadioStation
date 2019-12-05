import React from 'react';
import { connect } from 'react-redux';

const Player = () => {
    return(
        <div className="player-section"
        style={{
            position: "relative",
            paddingBottom: "56.25%",
            paddingTop: 25,
            height: 0
        }}>
            <iframe
                style={{
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    width: "90%",
                    height: "90%"
                }}
                src={`https://www.youtube.com/embed/YcAaJ8vC_54`}
                frameBorder="0"/>
        </div>
    );
};

export default Player;