/**
 * BLOCK: ski-resort-card
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element
const { useEffect } = wp.element


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
			type: 'string'
		},
		resortList: {
			type: 'array'
		}
	},
	componentDidMount(){
		console.log("test")
	},
	
	edit: ( {attributes, setAttributes} ) => {
		
		
		useEffect(() => {
			
			// fetch('https://api.chucknorris.io/jokes/random')
			fetch('https://api.fnugg.no/search?')
			.then(res => {

				return res.json()

			})
			.then(json => {

				let resortList = json.hits.hits.map(resorts => {
					return resorts._source
				})

			})
			.then(resortList => {

				setAttributes({
					resortList: resortList
				})
				console.log(attributes)
			})
			setAttributes({
				resortList: "dette er en test"
			})
			console.log(attributes.resortList)
			
		}, [])
		

		// fetch('https://api.fnugg.no/search?').then(res => {
		// 	return res.json()
		// }).then(json => {
			
		// 	let resortList = json.hits.hits.map(resorts => {
		// 		return resorts._source
		// 	})
		// 	props.setAttributes({
		// 		// resortList: resortList 
		// 	})
		// 	console.log(props.attributes)
		// })
		// Creates a <p class='wp-block-cgb-block-ski-resort-card'></p>.
		return (
			<div className="">
				<h4>Chose ski resort</h4>
				<input type="text" list="data"  />
				<datalist id="data">
					<option value="abc"></option>
					<option value="cde"></option>
					<option value="def"></option>
					<option value="fedcba"></option>
				</datalist>
			</div>
		)
	},

	save: () => {
		return null
	},
} );
