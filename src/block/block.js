/**
 * BLOCK: ski-resort-card
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import Select from 'react-select'
import skyIcons from './clouds.js'

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

		}

		componentDidMount() {
			//__ New Method
			fetch('https://api.fnugg.no/search?sourceFields=name&size=1000')
			.then(res => {
				return res.json()
			})
			.then(json => {
				// console.log(json)
				let _resortNames = json.hits.hits.map(resorts => {
					return {
								id: resorts._id,
								name: resorts._source.name
							}
				})
				this.props.setAttributes({
					_resortNames: _resortNames,
				})
			})

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

		handelChange = (e) => {

			let nameAndID = this.props.attributes._resortNames.filter(nameObject => {
				return nameObject.name == e.value
			}).pop()

			fetch(`https://api.fnugg.no/get/resort/${nameAndID.id}`)
			.then(res => {
				return res.json()
			})
			.then(json => {
				this.props.setAttributes({
					selectedResort: json._source
				})
			})

			// let selectedResort = this.props.attributes['resortList'].filter(resort => {
			// 	return resort.name == e.value
			// })


			// setTimeout(()=> {
			// 	console.log(this.props.attributes['selectedResort'])
			// },1000)
		}

		getImage = () => {
			return this.props.attributes.selectedResort.images.image_1_1_s
		}

		formateDate = (date) => {
			const day 	= date.slice(0,10)
			const time 	= date.slice(11,16)
			return `${day} - ${time}`
		}

		skyConditions = ( condition ) => {
			if(typeof(condition.symbol.name) === 'undefined'){
				console.log('skyConditions exit, name dosent exist')
				return ''
			}else if(condition.symbol.name === ''){
				console.log('skyConditions exit, name is just a string')
				return ''
			}

			const name = condition.symbol.name
			if(typeof(skyIcons[name]) === 'undefined'){
				console.log('skyConditions exit, name isent in skyIcons')
				return ''
			}

			let icon = skyIcons[name].icon
			let text = skyIcons[name].text

			return (
				<div className="facts__sky-container">
					<i className={ `wi ${icon}` }></i>
					<h3 className="fact__sky-condition"> { text } </h3>
				</div>
			)
		}

		temperature = ( condition ) => {

			if(condition.temperature.value == null || condition.temperature.value == ''){
				return ''
			}else{
				return (
					<div className="card-preview__temperature">
						{ condition.temperature.value }°
					</div>
				)
			}
		}

		windConditions = ( condition ) => {

			let windMps
			if(condition.wind.mps == null || condition.wind.mps == ''){
				windMps = ''
			} else {
				windMps = (
					<h3 className="card-preview__wind-header">
						{ condition.wind.mps }m/s
					</h3>
				)
			}

			return (
				<div className="card-preview__wind-contianer">
						{windMps}
					<p className="card-preview__wind-description">
						{ condition.wind.speed }
					</p>
				</div>
			)
		}

		conditionDescription = ( condition ) => {
			return (
				<div className="card-preview__facts-condition-container">

					<h3 className="card-preview__facts-condition">
						{ condition.condition_description }
					</h3>
				</div>
			)
		}

		getSelectedResort = ( attributes ) => {
			if(typeof(attributes.selectedResort) !== 'undefined'){
				return attributes.selectedResort
			}
		}

		getConditions = (resort) => {
			if(typeof(resort.conditions.combined.top) !== 'undefined'){
				return resort.conditions.combined.top
			}
		}

		render() {

			const selectedResort = this.getSelectedResort(this.props.attributes)
			
			let previewCard
			if(selectedResort != null){

				const conditions = this.getConditions(selectedResort)
				

				previewCard = (
					<div className="card-preview card-preview__container">
						<div className="card-preview__header-container">
							<h1 className="card-preview__header">
								{ selectedResort.name }
							</h1>
						</div>
						<div
							className="card-preview__image-container"
							style={{
									backgroundImage: `url(${ selectedResort.images.image_1_1_s })`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
								}}
						>
							<div className="card-preview__image-byline-container">
								<h2 className="image-byline__header">
									DAGENS FORHOLD
								</h2>
								<p className="image-byline__date">
									Oppdatert: { this.formateDate( conditions.last_updated) }
								</p>
							</div>
						</div>
						<div className="card-preview__facts-container">

							{ this.skyConditions( conditions ) }

							{ this.temperature( conditions ) }

							{ this.windConditions( conditions ) }

							{ this.conditionDescription( conditions ) }

						</div>

					</div>
				)
			}

			return (
				<div className="ski-resort-card__container ski-resort-card">
					<Select
						className="ski-resort-card__select"
						placeholder="Velg Ski Senter..."
						options={ this.props.attributes._resortNames.map(option => {
							return {value: option.name, label: option.name}
						}) }
						onChange={ this.handelChange }
					/>

					{previewCard}

				</div>
			)
		}
	},

	save: () => {
		return null
	},
} );
