import PropTypes from 'prop-types';
import css from './Profile.module.css';

export function Profile ({username, tag, location, avatar, stats}){
console.log(stats)
    return (
    <div className={css.ProfileCard}>
        <div className={css.Description}>
            <img className={css.UserAvatar} src={avatar} alt="User avatar"/>
            <p className={css.UserName}>{username}</p>
            <p className={css.UserTag}>{tag}</p>
            <p className={css.UserLocation}>{location}</p>
        </div>
               
            <ul className={css.Stats}>
                <li className={css.CardFooterElement}>
                    <span className={css.UserFollowers}>followers: </span>
                    <span className={css.Quantity}>{stats.followers}</span>
                </li>
                <li className={css.CardFooterElement}>
                    <span className={css.UserViews}>views:</span>
                    <span className={css.Quantity}>{stats.views}</span>
                </li>
                <li className={css.CardFooterElement}>
                    <span className={css.UserLikes}>likes:</span>
                    <span className={css.Quantity}>{stats.likes}</span>
                </li>
            </ul>
        
    </div>  
);
} 

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.any,
};