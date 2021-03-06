import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './ProfileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.storageRef = storage.ref('/images').child(props.uid);
    this.userRef = database.ref('/users').child(props.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const file = event.target.files[0];
    const uploadTask = this.storageRef.child(file.name).put(file, { contentType : file.type});

    uploadTask.then((snapshot) => {
      this.userRef.child('photoURL').set(snapshot.downloadURL);
    });

  }
  render() {
    const {photoURL,displayName} = this.props.user;
    return (
      
      <article className="ProfileCard">
        <img className="ProfileCard--photo"
        src={photoURL}  
        alt={displayName}   
        /> 
        <h3>{displayName}</h3>
        <FileInput
          accept=".png, .gif, .jpg"
          placeholder="Select an image"
          onChange={this.handleSubmit}
        /> 
        </article>
    );
  }
}

ProfileCard.propTypes = {
  displayName: PropTypes.string,
  email: PropTypes.string,
  imageName: PropTypes.string,
  imageURL: PropTypes.string,
  photoURL: PropTypes.string,
  uid: PropTypes.string
};

export default ProfileCard;
