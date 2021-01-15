import React, { Component } from 'react';
import '../petapp.css';
import { changeAttribute } from '../calculations';

import ButtonOverlay from './button-components/ButtonOverlay';

import { Button, Container, Row, Col, OverlayTrigger, Popover, Image, Tooltip } from 'react-bootstrap';

export default class Buttons extends Component {
	clickChange = (e) => {
		e.preventDefault();
		const itemValue = parseInt(e.target.getAttribute('data-value'));
		const pet = changeAttribute(e.target.getAttribute('value'), itemValue, this.props.pet);
		this.props.updatePet(pet, this.props.pet.id);
	};

	render() {
		return (
			<div>
				<Container style={{ marginTop: '10%' }}>
					<Row>
						<Col>
							<center>
								<ButtonOverlay>
									<Button key="hunger" id="btn-colour-2">
										FEED
									</Button>
								</ButtonOverlay>
							</center>
						</Col>
						<Col>
							<center>
								<OverlayTrigger
									trigger="click"
									placement={'top'}
									rootClose={true}
									overlay={
										<Popover id={`popover-positioned-top`} className="custom-popover">
											<Popover.Content>
												<OverlayTrigger placement={'top'} overlay={<Tooltip id={`tooltip-top`}>+1 ♥️ to Health</Tooltip>}>
													<Button variant="outline-info" style={{ padding: '.15rem .2rem .15rem .2rem' }}>
														<Image
															value="health"
															data-name="pill"
															data-value={20}
															src="/images/shell.png"
															onClick={(e) => this.clickChange(e)}
															style={{
																height: '40px',
																padding: '.005rem .005rem',
															}}
														></Image>{' '}
														<span style={{ color: 'black' }}>1</span>
													</Button>
												</OverlayTrigger>
											</Popover.Content>
										</Popover>
									}
								>
									<Button key="health" id="btn-colour-2">
										HEAL
									</Button>
								</OverlayTrigger>
							</center>
						</Col>
						<Col>
							<center>
								<OverlayTrigger
									trigger="click"
									placement={'top'}
									rootClose={true}
									overlay={
										<Popover id={`popover-positioned-top`} className="custom-popover">
											<Popover.Content>
												<OverlayTrigger placement={'top'} overlay={<Tooltip id={`tooltip-top`}>+20% to Fun</Tooltip>}>
													<Button variant="outline-info" style={{ padding: '.15rem .2rem .15rem .2rem' }}>
														<Image
															value="fun"
															data-name="kong"
															data-value={20}
															src="/images/kong.png"
															onClick={(e) => this.clickChange(e)}
															style={{
																height: '40px',
																padding: '.005rem .005rem',
															}}
														></Image>{' '}
														<span style={{ color: 'black' }}>1</span>
													</Button>
												</OverlayTrigger>
											</Popover.Content>
										</Popover>
									}
								>
									<Button key="fun" id="btn-colour-2">
										PLAY
									</Button>
								</OverlayTrigger>
							</center>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

// <OverlayTrigger
// 									trigger="click"
// 									placement={'top'}
// 									rootClose={true}
// 									overlay={
// 										<Popover id={`popover-positioned-top`} className="custom-popover">
// 											<Popover.Content>
// 												<OverlayTrigger placement={'top'} overlay={<Tooltip id={`tooltip-top`}>+30% to Hunger</Tooltip>}>
// 													<Button variant="outline-info" style={{ padding: '.15rem .2rem .15rem .2rem' }}>
// 														<Image
// 															value="hunger"
// 															data-name="taco"
// 															data-value={30}
// 															src="/images/fruit.png"
// 															onClick={(e) => this.clickChange(e)}
// 															style={{
// 																height: '40px',
// 																padding: '.005rem .005rem',
// 															}}
// 														></Image>{' '}
// 														<span style={{ color: 'black' }}>3</span>
// 													</Button>
// 												</OverlayTrigger>
// 											</Popover.Content>
// 										</Popover>
// 									}
// 								></OverlayTrigger>
