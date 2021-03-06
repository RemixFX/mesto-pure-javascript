import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupName = this._popup.querySelector(".popup-card__image-name");
    this._imagePopupLink = this._popup.querySelector(".popup-card__image");
  }

  open ({name, link}) {
    super.open();
    this._imagePopupName.textContent = name;
    this._imagePopupLink.src = link;
  }
}
