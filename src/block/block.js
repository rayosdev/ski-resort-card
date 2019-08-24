/**
 * BLOCK: ski-resort-card
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import Select from 'react-select'

const { __ } = wp.i18n;
const { registerBlockType, PlainText } = wp.blocks;
const { Component, useEffect } = wp.element


registerBlockType( 'cgb/block-ski-resort-card', {
	title: __( 'Ski Resort Card' ),
	icon: 'location-alt',
	category: 'widgets',
	keywords: [
		__( 'ski-resort-card — CGB Block' ),
		__( 'Ski' ),
	],

	attributes: {
		resortNames: {
			type: 'array',
			default: [],
		},
		_resortNames: {
			type: 'array',
			default: [],
		},
		resortList: {
			type: 'array',
			default: []
		},
		selectedResort: {
			type: 'object',
			default: null
		},
	},

	edit: class extends Component {

		constructor(props){
			super(...arguments)
			this.props = props

			this.handelChange = this.handelChange.bind(this)
		}

		componentDidMount() {
			//__ New Method
			fetch('https://api.fnugg.no/search?')
			
			//__ Old Method
			fetch('https://api.fnugg.no/search?')
			.then(res => {

				return res.json()

			})
			.then(json => {

				let resortNames = []
				let resortList = json.hits.hits.map(resorts => {
					resortNames.push(resorts._source.name)
					return resorts._source
				})
				this.props.setAttributes({
					resortNames: resortNames,
					resortList: resortList
				})
			})
		}
		
		handelChange(e){
			let selectedResort = this.props.attributes['resortList'].filter(resort => {
				return resort.name == e.value
			})
			this.props.setAttributes({
				selectedResort: selectedResort[0]
			})
			setTimeout(()=> {
				console.log(this.props.attributes['selectedResort'])
			},1000)
		}

		getImage = () => {
			return this.props.attributes.selectedResort.images.image_1_1_s
		} 

		formateDate = (date) => {
			const day 	= date.slice(0,10)
			const time 	= date.slice(11,16)
			return `${day} - ${time}`
		}

		skyIcon = (report) => {
			console.log("sky report: " ,report)
		}


		render() {

			let previewCard

			if(this.props.attributes.selectedResort){
				previewCard = (
					<div className="card-preview card-preview__container">
						<div className="card-preview__header-container">
							<h1 className="card-preview__header">
								{ this.props.attributes.selectedResort.name }
							</h1>
						</div>
						<div 
							className="card-preview__image-container"
							style={{
									backgroundImage: `url(${this.props.attributes.selectedResort.images.image_1_1_s})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
								}}
						>
							<div className="card-preview__image-byline-container">
								<h2 className="image-byline__header">
									DAGENS FORHOLD
								</h2>
								<p className="image-byline__date">
									Oppdatert: { this.formateDate(this.props.attributes.selectedResort.conditions.combined.top.last_updated) }
								</p>
							</div>
						</div>
						<div className="card-preview__facts-container">
							<div className="facts__sky-container">
								<img 
									src={ this.skyIcon(this.props.attributes.selectedResort.conditions.combined.top.condition_description) } 
									alt="" 
									className="facts__sky-icon"
								/>
								<h3 className="fact__sky-condition">
									{ this.props.attributes.selectedResort.conditions.combined.top.condition_description }
								</h3>
							</div>
							<div className="card-preview__temperature">
								{ this.props.attributes.selectedResort.conditions.combined.top.temperature.value }°
							</div>
							<div className="card-preview__wind-contianer">
								<h3 className="card-preview__wind-header">
									{ this.props.attributes.selectedResort.conditions.combined.top.wind.mps }m/s
								</h3>
								<p className="card-preview__wind-header">
									{ this.props.attributes.selectedResort.conditions.combined.top.wind.speed }
								</p>
							</div>
						</div>

					</div>
				)
			}

			return (
				<div className="ski-resort-card__container ski-resort-card">
					<Select
						className="ski-resort-card__select"
						placeholder="Velg Ski Senter..."
						options={ this.props.attributes.resortNames.map(option => {
							return {value: option, label: option}
						}) }
						onChange={ this.handelChange }
					/>

					{ previewCard }

				</div>
			)
		}
	},

	save: () => {
		return null
	},
} );
