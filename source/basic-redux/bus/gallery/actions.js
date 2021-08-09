import { SHOW_NEXT_PHOTO } from "./types";
import { SHOW_PREV_PHOTO } from "./types";
import { SHOW_SELECTED_PHOTO } from "./types";

export const showSelectedPhoto = (photoIndex) => {
  return {
    type: SHOW_SELECTED_PHOTO,
    payload: photoIndex,
  };
};

export const showNextPhoto = () => {
  return { type: SHOW_NEXT_PHOTO };
};

export const showPrevPhoto = {
  type: SHOW_PREV_PHOTO,
};
