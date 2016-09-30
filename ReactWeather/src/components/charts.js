import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default function(props){
	const average = function(data){
		return Math.floor(data.reduce((prev, cur) => prev + cur) / data.length);
	}

	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
			 	<SparklinesLine color={props.color} />
			 	<SparklinesReferenceLine type='avg' />
		  </Sparklines>
		  <div>{average(props.data)} {props.units} </div>
		</div>
	)
}