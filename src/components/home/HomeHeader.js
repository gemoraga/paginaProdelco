import React, { Component } from 'react'

export default class Header extends Component {
	constructor(props) {
		super(props)
	}
  	render() {
		return (
		    <div>
				<header>
					<div class="bg-filter">
					   	<div class="container">
					      	<div class="min-md"><br/><br/><br/><br/><br/><br/><br/><br/></div>
							<br/>
							<div class="row text-center">
								<h2>BIENVENIDO A EVENT PLANNER</h2>
								<h4 onClick={this.shortcut}>REUNIMOS A PERSONAS ANTE NUEVAS EXPERIENCIAS</h4>
							</div>
							<br/>
							<div class="row text-center">
								<div class="col-md-offset-4 col-md-4">
									<p>Genera una experiencia única para tus clientes creando plataformas de comunicación únicas para tus eventos.</p>
									<br/>
									<a class="page-scroll btn btn-register" href="#contact" data-scroll="#contact">CONTÁCTANOS</a><br/><br/>
								</div>
							</div>
							<div class="min-md"><br/><br/><br/><br/><br/><br/><br/></div>
							<br/>
							<br/><br/><br/>
						</div>
					</div>
				</header>
			</div>
    	)
    }
}