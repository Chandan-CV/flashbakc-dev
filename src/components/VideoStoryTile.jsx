
import PropTypes from 'prop-types';

function VideoStoryTile({ name, location }) {
    return (
        <div className="m-5">
            <img src="https://via.placeholder.com/480X300" alt="placeholder" />
            <div className="font-bold  text-[#D8CAB1] uppercase Boldy text-lg">
                {name}
                <span className="ml-2 text-sm Courier text-[#D8CAB1] ">
                    {location}
                </span>
            </div>
        </div>
    );
}

VideoStoryTile.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default VideoStoryTile;
