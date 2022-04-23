import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={style.site_header} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17c29840-1b4b-4343-a461-3590781ad170/detnhhg-12236ee9-6926-4206-8b27-17a3b64b8f82.png/v1/fill/w_1280,h_427,q_80,strp/arcane__jinx___header_by_lavics_detnhhg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvMTdjMjk4NDAtMWI0Yi00MzQzLWE0NjEtMzU5MDc4MWFkMTcwXC9kZXRuaGhnLTEyMjM2ZWU5LTY5MjYtNDIwNi04YjI3LTE3YTNiNjRiOGY4Mi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zaMuzEqss1N-wifEZ5Wsd5G9HV-ErMQehnLyZW6qCGA' />
      <div className={style.discription}>
        <img className={style.ava} src={props.profile.photos.large != null ? props.profile.photos.large : 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/matrix-neo-man-white-512.png'}  ></img>
        <div className={style.personInfo}>
          <div>{props.profile.fullName}</div>
          <br />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          <br></br>
          <div>Contacts:</div>
          <br></br>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.mainLink}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.youtube}</div>
          <br></br>
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
