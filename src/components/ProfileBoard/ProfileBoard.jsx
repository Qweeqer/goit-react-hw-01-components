// import PropTypes from 'prop-types';
import css from './ProfileBoard.module.css';
import { UserCard } from 'components/Profile/Profile';

// import User from '../../db/user.json'


export const ProfileBoard = ({ profile }) => {
    // console.log(profile)
    return (
        <div className={css.ProfileBoard}>
            <UserCard profile = {profile} />     
        </div>
   
    )
  
}
