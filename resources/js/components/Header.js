import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className="bg-near-white pv4">
				<div className="wrap">
					<nav className="nav flex justify-end">
						<NavLink className="fw5 nav__item near-black link underline-hover mh4 ph2 pv1" activeClassName="is-active dark-green underline" exact to={`/`}>Home</NavLink>
						<NavLink className="fw5 nav__item near-black link underline-hover mh4 ph2 pv1" activeClassName="is-active dark-green underline" to={`/create`}>Create New Note</NavLink>
					</nav>
				</div>
			</div>
		)
	}
}

export default Header