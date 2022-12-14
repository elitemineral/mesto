export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__button-close');

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleMouseDownClose = this._handleMouseDownClose.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleMouseDownClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleMouseDownClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleMouseDownClose);
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', this.close);
  }
}
