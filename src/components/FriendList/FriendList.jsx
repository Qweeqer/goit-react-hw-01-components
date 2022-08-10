import PropTypes from 'prop-types';
import css from './FriendList.module.css' 
export const FriendList = ({friends}) => {
      
    return (
        <div className={css.wrapper}>
        {friends.map(({ id, isOnline, name, avatar }) =>
      (
     <div className={css.FriendList} key={id}>
        <li className={css.item}>
                <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" height="48" />
                <p className={css.name}>{name}</p>
            </li>
        
    </div>))}
        </div>       
    )        
}
FriendList.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.any 
}