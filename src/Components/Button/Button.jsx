import React, { forwardRef } from 'react'
import { Fragment } from 'react'
import './Button.css'

export default forwardRef (function Button(props, ref) {
  return (
    <Fragment>
        <button ref={ref} onClick={props.onClick} type="button" className="btn btn-light fw-bold m-2">{props.country}</button>
    </Fragment>
  )
});
