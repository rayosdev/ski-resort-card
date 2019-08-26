<?php

function get_sky_condition( $condition, $sky_icons ){

    
    $found = "";
    foreach ($sky_icons as $key => $value) {
        if($key == $condition){
            $found = $sky_icons[$key];
            break ;
        };
    };

    $text_and_icon = [];
    if($found != ""){
        $text_and_icon['icon'] = $found['icon'];
        $text_and_icon['text'] = $found['text'];
    }
    else{
        $text_and_icon['icon'] = "";
        $text_and_icon['text'] = "";
    }

    return $text_and_icon;
    
};

$sky_icons = array(
    'Sun' => array( 
        'icon' => 'wi-day-sunny',
        'text' => 'Sol/klarvær'
    ),
    'LightCloud' => array(
        'icon' => 'wi-day-cloudy',
        'text' => 'Lettskyet'
    ),			
    'PartlyCloud' => array(
        'icon' => 'wi-cloudy',
        'text' => 'Delvis skyet'
    ),	
    'Fog' => array(
        'icon' => 'wi-fog',
        'text' => 'Tåke'
    ),		 	 
    'Cloud' => array(
        'icon' => 'wi-cloud',
        'text' => 'Skyet'
    ),	 	 
    'LightRainShowers' => array(
        'icon' => 'wi-sprinkle',
        'text' => 'Lett regn'
    ),		 	 
    'RainShowers' => array(
        'icon' => 'wi-showers',
        'text' => 'Regn'
    ),		 	 
    'HeavyRainShowers' => array(
        'icon' => 'wi-rain-mix',
        'text' => 'Kraftig regn'
    ),		 	 
    'LightSleet' => array(
        'icon' => 'wi-sleet',
        'text' => 'Lett sludd'
    ),		 	 
    'Sleet' => array(
        'icon' => 'wi-sleet',
        'text' => 'Sludd'
    ),		 	 
    'HeavySleet' => array(
        'icon' => 'wi-sleet',
        'text' => 'Kraftig sludd'
    ),		 	 
    'LightSnow' => array(
        'icon' => 'wi-day-snow',
        'text' => 'Lett snø'
    ),		 	 
    'Snow' => array(
        'icon' => 'wi-snow',
        'text' => 'Snø'
    ),		 	 
    'HeavySnow' => array(
        'icon' => 'wi-snow-wind',
        'text' => 'Kraftig snø'
    ),		 	 
    'LightRain' => array(
        'icon' => 'wi-day-rain-mix',
        'text' => 'Lette regnbyger'
    ),			
    'Rain' => array(
        'icon' => 'wi-rain',
        'text' => 'Regn'
    ),			
    'LightRainShowers' => array(
        'icon' => 'wi-day-rain-mix',
        'text' => 'Lette regnbyger'
    ),			
    'RainShowers' => array(
        'icon' => 'wi-showers',
        'text' => 'Regnbyger'
    ),			
    'HeavyRainShowers' => array(
        'icon' => 'wi-showers',
        'text' => 'Kraftige regnbyger'
    ),			
    'LightSleetShowers' => array(
        'icon' => 'wi-day-sleet',
        'text' => 'Lette sluddbyger'
    ),			
    'SleetShowers' => array(
        'icon' => 'wi-day-sleet',
        'text' => 'Sluddbyger'
    ),			
    'HeavySleetShowers' => array(
        'icon' => 'wi-sleet',
        'text' => 'Kraftige sluddbyger'
    ),			
    'LightSnowShowers' => array(
        'icon' => 'wi-day-snow',
        'text' => 'Lette snøbyger'
    ),		
    'SnowShowers' => array(
        'icon' => 'wi-day-snow',
        'text' => 'Snøbyger'
    ),			
    'HeavySnowShowers' => array(
        'icon' => 'wi-snow-wind',
        'text' => 'Kraftige snøbyger'
    )
);


