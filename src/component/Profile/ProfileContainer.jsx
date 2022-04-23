import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, setStatus, updateStatus } from "../../Redux/profilePageReducer";
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 20691;
    }
    this.props.getUserProfile(userId);
    this.props.setStatus(this.props.status);
    this.props.updateStatus(this.props.status);
  };
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status
});

export default compose(connect(mapStateToProps, { getUserProfile, setStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer);
