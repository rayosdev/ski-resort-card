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
		resortList: {
			type: 'array',
			default: []
		},
		selectedResort: {
			type: 'object',
			default: {}
		},
		test: {
			type: 'string',
			default: 'mamas boy'
		}
	},

	edit: class extends Component {

		constructor(props){
			super(...arguments)
			this.props = props

			// this.handelClick = this.handelClick.bind(this)
			this.handelChange = this.handelChange.bind(this)
		}

		componentDidMount() {
			
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
				selectedResort: selectedResort
			})
			setTimeout(()=> {
				console.log(this.props.attributes['selectedResort'])
			},1000)
		}

		getImage = () => {
			console.log(this.props.attributes['selectedResort'].images)
			return "https://coubsecure-s.akamaihd.net/get/b110/p/coub/simple/cw_timeline_pic/4d15a69d5a6/6647cc3bc4ff6338e6da6/med_1473179695_image.jpg"
		} 

		formateDate = (date) => {
			console.log(date)
		}

		skyIcon = (report) => {
			console.log(report)
		}


		render() {

			let previewCard

			if(this.props.attributes.selectedResort){
				previewCard = 
			}

			return (
				<div className="ski-resort-card__container">
					<Select
						placeholder="Velg Ski Senter..."
						options={ this.props.attributes.resortNames.map(option => {
							return {value: option, label: option}
						}) }
						onChange={ this.handelChange }
					/>

					<div 
						className="card-preview__container ski-resort-card__preview"
					>
						<h1 className="card-preview__header">
							{ this.props.attributes.selectedResort.name }
						</h1>
						<div className="card-preview__image-container">
							<img 
								src={ this.getImage() } 
								alt="Bilde av ski senteret" 
								className="card-preview__image"
							/>
							<div className="card-preview__image-byline-container">
								<h2 className="image-byline__header">
									DAGENS FORHOLD
								</h2>
								<p className="image-byline__date">
									{ this.formateDate(this.props.attributes.selectedResort.last_updated) }
								</p>
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
							</div>
						</div>

					</div>
				</div>
			)
		}
	},

	save: () => {
		return null
	},
} );
