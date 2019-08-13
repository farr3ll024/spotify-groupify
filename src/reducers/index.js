import {combineReducers} from 'redux';

const songsReducer = () => {
    return [{title: 'Drip Drop', duration: '4:05'}, {title: 'swag flu', duration: '2:30'}, {
        title: 'C.R.E.A.M',
        duration: '4:20'
    }];
};

const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});