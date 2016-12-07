import React, { Component } from 'react'

export default class Footer extends Component {
	render() { 
		return (
			<footer class="bg-black">
				<div class= "container">
					<br/>
					<div class="row">
						<div class="col-sm-offset-3 col-sm-3">
							<div class= "logo text-center">
								<p class="text-muted">+56 (22) 3223 8676</p>
								<i class="material-icons">phone</i>
							</div>
						</div>
						<div class="col-sm-3">
							<div class= "logo text-center">
								<p class="text-muted">contacto@meetgreet.cl</p>
								<i class="material-icons">email</i>
							</div>
						</div>
					</div>
				</div>
			</footer>
    	) 
    }
}