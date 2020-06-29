import React from 'react'
import './menu-aside.styles.scss';
import { BsX } from 'react-icons/bs'
import { toggleDirectoryHidden } from '../../redux/directory/directory.actions';
import { connect } from 'react-redux';

const MenuAside = ({ hidden, rightAsideHidden, toggleDirectoryHidden }) => {
    const classes = !hidden ? "show--menu-aside "
        : !rightAsideHidden ? "show--right-aside "
            : ""
    if (!hidden || !rightAsideHidden) {
        document.querySelector('body').style.overflow = "hidden"
    } else {
        document.querySelector('body').style.overflow = "auto"
    }
    return (
        <aside className={`${classes}menu-aside`}>
            <nav className="menu__nav">
                <div className="close-box">
                    <div className="close-btn" onClick={toggleDirectoryHidden}>
                        <BsX className="close-icon" />
                        <span>CLOSE</span>
                    </div>
                </div>

                <div className="menu__group">
                    <h6 className="menu__group-header">Sale</h6>
                    <ul>
                        <li>
                            sale men
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleDirectoryHidden: () => dispatch(toggleDirectoryHidden())
})

export default connect(null, mapDispatchToProps)(MenuAside)
