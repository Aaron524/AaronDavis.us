$("#div1").css({"padding-top": $("#anotherdiv").height() });





var cows = 7;
var chickens = 11;
var targetFarm = cows + chickens;

printFarmInventory(cows, chickens);
console.log(findSolution(targetFarm));

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}



function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);

function count_rabbits() {
    for(var i=1; i<=3; i++) {
        // operator + concatenates strings
        alert("Rabbit "+i+" out of the hat!")
    }
}


// filter through an array fucntion and example


function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));


//standard filter method 
console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
}));
// → [{name: "Carolus Haverbeke", …}]


// filter through an array fucntion and example


var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
    return arr.reduce(function(current, next) {
        return current.concat(next);
    });
}

console.log(flatten(arrays));

// button click example

$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest('.tour').append(message);
    $(this).remove();
  });
});

// button click example


// higher level class click and remove a lower element within higher level
$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message);
    $(this).find('button').remove();
  });
});
// higher level class click and remove a lower element within higher level



// selecting a value from the html (    <li class="usa tour" data-discount="299">  )

$(document).ready(function() {
  $('.tour').on('click', 'button', function() {
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });
});


// selecting a value from the html (    <li class="usa tour" data-discount="299">  )


//adding a class or removing a class

$(document).ready(function() {
  $('#filters').on('click', '.on-sale', function() {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.on-sale').addClass('highlight');
  });

  $('#filters').on('click', '.featured', function() {
    $('.tour').removeClass('highlight');
    $('.tour').filter('.featured').addClass('highlight');
  });
});

//adding a class or removing a class


//counting how many elements are in a DOM with JS and JQuery
$(document).ready(function() {
  alter($('button').length);
  
});
//counting how many elements are in a DOM with JS and JQuery

// sliding elements into and out of view based on button click

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $(this).closest('.tour').find('.photos').slideToggle();
    
  });
});

//// sliding elements into and out of view based on button click





// setting it up so that a span shows on mouseenter and goes away on mouse leave

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', function() {
    $(this).find('span').slideToggle();
  });
  $('.photos').on('mouseleave', 'li', function() {
    $(this).find('span').slideToggle();
  });
});



    /// refactored to call function instead of repeate code with show photos

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });

  function showPhotos () {
    $(this).find('span').slideToggle();    
  }

  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li', showPhotos);
});

    /// refactored to call function instead of repeate code with show photos
// setting it up so that a span shows on mouseenter and goes away on mouse leave



//controling text based on input field

$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var nights = +$(this).val();  
    var price = +$(this).closest('.tour').data('daily-price');
    
    $('#nights-count').text(nights);
    $('#total').text(nights * price);
  });
});



//controling text based on input field

$(document).ready(function() {
  $('#nights').on('focus', function() {
    $(this).val(7);
  });  
});

//change a when it's focused on


 

//display photo on link click

// html
<div id="all-tours" class="links">
  <h1>Guided Tours</h1>
  <ul>
    <li class="tour usa" data-discount="199">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
      <a href="#" class="see-photos">See Photos</a>
      <ul class="photos">
        <li>
          <img src="/assets/photos/paris1.jpg">
          <span>Arc de Triomphe</span>
        </li>
// html

$(document).ready(function() {
  $('.see-photos').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    $(this).closest('.tour').find('.photos').slideToggle();
  });
  $('.tour').on('click', function() {
    alert('This event handler should not be called.');
  });
});


  //stopPropagation stops the event from bubbling up the event chain.

  //preventDefault prevents the default action the browser makes on that event.

//display photo on link click 



//passing css object in based on event handler

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).css({'background-color': '#252b30', 'font-weight': 'bold'});
    $(this).closest('.tour').find('.photos').show();
  });
});


//passing css object in based on event handler



//adding and removing a class based on event

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
  });
});


    // or


$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).toggleClass('highlight');
  });

});


//adding and removing a class based on event




//animating examples

$(document).ready(function() {
  $('.tour').on('mouseenter', function() {
    $(this).addClass('highlight');
    $(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
  });
  $('.tour').on('mouseleave', function() {
    $(this).removeClass('highlight');
    $(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');    
  });
});

//animating examples


//first AJAX eample of pulling photos from html to get them to come


$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});


    //or with shorthand


$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.get('/photos.html', function(response) {
        $('.photos').html(response).fadeIn();
    });
  });
});



    ///and making it responsive or automatedd

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      data: { 'location': $('#tour').data('location')}
    });
  });
});
    

//first AJAX eample of pulling photos from html to get them to come









