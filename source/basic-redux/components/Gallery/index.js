// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import cx from "classnames";
// Instruments
import Styles from "./styles.m.css";

//Store
import { store } from "../../init/store";

//Actions
import {
  showNextPhoto,
  showPrevPhoto,
  showSelectedPhoto,
} from "../../bus/gallery/actions";
@hot(module)
export default class Gallery extends Component {
  _showNextPhoto = () => {
    store.dispatch(showNextPhoto);
    this.forceUpdate();
  };

  _showPrevPhoto = (e) => {
    store.dispatch(showPrevPhoto);
    this.forceUpdate();
  };

  _showSelectedPhoto = (e) => {
    store.dispatch(showSelectedPhoto(e.target.value));
    this.forceUpdate();
  };
  render() {
    const {
      gallery: { photos, selectedPhotoIndex },
    } = store.getState();
    const photo = photos.find((_, index) => index === selectedPhotoIndex);

    const buttonActiveStyle1 = cx({
      [Styles.buttonActive]: selectedPhotoIndex === 0,
    });

    const buttonActiveStyle2 = cx({
      [Styles.buttonActive]: selectedPhotoIndex === 1,
    });
    const buttonActiveStyle3 = cx({
      [Styles.buttonActive]: selectedPhotoIndex === 2,
    });
    const buttonActiveStyle4 = cx({
      [Styles.buttonActive]: selectedPhotoIndex === 3,
    });
    return (
      <section className={Styles.gallery}>
        <img src={photo.url} alt="photo.id" />
        <div>
          <button onClick={this._showPrevPhoto}>←</button>
          <button
            onClick={this._showSelectedPhoto}
            className={buttonActiveStyle1}
            value="0"
          >
            1
          </button>
          <button
            className={buttonActiveStyle2}
            value="1"
            onClick={this._showSelectedPhoto}
          >
            2
          </button>
          <button
            onClick={this._showSelectedPhoto}
            className={buttonActiveStyle3}
            value="2"
          >
            3
          </button>
          <button
            onClick={this._showSelectedPhoto}
            className={buttonActiveStyle4}
            value="3"
          >
            4
          </button>
          <button onClick={this._showNextPhoto}>→</button>
        </div>
      </section>
    );
  }
}
