$(document).ready(function() {

    $('#submit-btn').on('click', function() {
        event.preventDefault();

        var city = $('#city-type').val().toLowerCase().trim();

        if(city == 'nyc' || city == 'new york city' || city == 'ny' || city == 'new york' || 
            city == 'big apple' || city == 'manhattan' || city == 'queens' ||
            city == 'brooklyn' || city == 'staten island' || city == 'bronx') {

            $('body').removeClass();
            $('body').addClass('nyc');
        }

        if(city == 'atx' || city == 'aus' || city == 'bat city' || city == 'the capitol city' || city == 'city of the violet crown' || 
            city == 'hippie haven' || city == 'blueberry in the red state' || city == 'keep austin weird' || 
            city == 'live music capital of the world' || city == 'liberal city of text' ||
            city == 'the big nap' || city == 'silicon hills' || city == 'waterloo' ||
            city == 'austin') {

            $('body').removeClass();
            $('body').addClass('austin');
        }

        if(city == 'la' || city == 'los angeles' || city == 'lax' || city == 'city of angels' || 
            city == 'the big orange' || city == 'city of flowers and sunshine' || city == 'la la land' || 
            city == 'hollywood' || city == 'la-la land' || city == 'shaky town' || city == 'tinseltown' ||
            city == 'dodgers' || city == 'kings' || city == 'lakers') {

            $('body').removeClass();
            $('body').addClass('la');
        }


        if(city == 'sf' || city == 'san francisco' || city == 'alcatraz' || city == 'baghdad by the bay' || 
            city == 'the city' || city == 'city by the bay' || city == 'the city that knows how' || 
            city == 'everybodys favorite city' || city == 'fog city' || city == 'frisco' || 
            city == 'golden city' || city == 'the golden gate city' || city == 'san fran'
            || city == 'shaky town' ) {

            $('body').removeClass();
            $('body').addClass('sf');
        }

        if(city == 'sydney' || city == 'the harbor city' || city == 'the harbour city' ||
            city == 'syd') {

            $('body').removeClass();
            $('body').addClass('sydney');
        }

    });
});