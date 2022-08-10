import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const UserCard = ({profile: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {

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
                    <span className={css.Quantity}>{followers}</span>
                </li>
                <li className={css.CardFooterElement}>
                    <span className={css.UserViews}>views:</span>
                    <span className={css.Quantity}>{views}</span>
                </li>
                <li className={css.CardFooterElement}>
                    <span className={css.UserLikes}>likes:</span>
                    <span className={css.Quantity}>{likes}</span>
                </li>
            </ul>
        
    </div>  
);
} 

UserCard.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};