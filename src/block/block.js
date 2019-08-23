/**
 * BLOCK: ski-resort-card
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component } = wp.element



import testFu from './index.js'

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
	},

	test: (props) => {
		return (
			<h1>Hola</h1>
		)
	},
	
	edit: class extends Component {
		
		constructor(props) {
			console.log(props)
			super(props)
			this.state = {}
		}

		componentDidMount = () => {
			// console.log("test",this.props)
			
		}

		// let resortList = fetch('https://api.fnugg.no/search?').then(res => {
		// 	return res.json()
		// }).then(json => {
		// 	json.hits.hits.map(resorts => {
		// 		return resorts._source
		// 	})
		// }).then(() => {
		// 	console.log(resortList)
		// })
		// Creates a <p class='wp-block-cgb-block-ski-resort-card'></p>.
		render(){

			return(

				<div className="">
					<h4>Chose ski resort</h4>
					<input type="text" list="data"  />
					<datalist id="data">
						<option value="test123"></option>
						<option value="test234"></option>
					</datalist>
					<test>test</test>
				</div>
			)
		}
	},

	save: () => {
		return null
	},
} );

console.log("test")