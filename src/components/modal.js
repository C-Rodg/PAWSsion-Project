// Libraries
import { Component } from 'react'
import { createPortal } from 'react-dom'

let modalRoot = null
if (typeof document !== 'undefined') {
  modalRoot = document.body
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.el.id = 'modal-root'
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

export default Modal
