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
			type: 'string',
			default: 'man'
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
			this.hanelChange = this.hanelChange.bind(this)
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
				console.log(this.props.attributes)
			})
		}

		hanelChange(e){
			this.props.setAttributes({
				selectedResort: e.value
			})

		}

		render() {
			return (
				<div className="ski-resort-card__container">
					<Select
						placeholder="Velg Ski Senter..."
						value={ this.props.selectedResort }
						options={ this.props.attributes.resortNames.map(option => {
							return {value: option, label: option}
						}) }
						onChange={ this.hanelChange }
					/>
					<div className="card-preview__container ski-resort-card__preview">
						<h1 className="card-preview__header">
							
						</h1>
					</div>
				</div>
			)
		}
	},

	save: () => {
		return null
	},
} );
