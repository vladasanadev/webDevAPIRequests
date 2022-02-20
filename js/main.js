/*parallax background*/


new universalParallax().init({
    speed: 4
});



var countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]; 

var codes = [
  93,
  358,
  355,
  213,
  1684,
  376,
  244,
  1264,
  672,
  1268,
  54,
  374,
  297,
  61,
  43,
  994,
  1242,
  973,
  880,
  1246,
  375,
  32,
  501,
  229,
  1441,
  975,
  591,
  599,
  387,
  267,
  55,
  55,
  246,
  673,
  359,
  226,
  257,
  855,
  237,
  1,
  238,
  1345,
  236,
  235,
  56,
  86,
  61,
  672,
  57,
  269,
  242,
  242,
  682,
  506,
  225,
  385,
  53,
  599,
  357,
  420,
  45,
  253,
  1767,
  1809,
  593,
  20,
  503,
  240,
  291,
  372,
  251,
  500,
  298,
  679,
  358,
  33,
  594,
  689,
  262,
  241,
  220,
  995,
  49,
  233,
  350,
  30,
  299,
  1473,
  590,
  1671,
  502,
  44,
  224,
  245,
  592,
  509,
  0,
  39,
  504,
  852,
  36,
  354,
  91,
  62,
  98,
  964,
  353,
  44,
  972,
  39,
  1876,
  81,
  44,
  962,
  7,
  254,
  686,
  850,
  82,
  381,
  965,
  996,
  856,
  371,
  961,
  266,
  231,
  218,
  423,
  370,
  352,
  853,
  389,
  261,
  265,
  60,
  960,
  223,
  356,
  692,
  596,
  222,
  230,
  269,
  52,
  691,
  373,
  377,
  976,
  382,
  1664,
  212,
  258,
  95,
  264,
  674,
  977,
  31,
  599,
  687,
  64,
  505,
  227,
  234,
  683,
  672,
  1670,
  47,
  968,
  92,
  680,
  970,
  507,
  675,
  595,
  51,
  63,
  64,
  48,
  351,
  1787,
  974,
  262,
  40,
  70,
  250,
  590,
  290,
  1869,
  1758,
  590,
  508,
  1784,
  684,
  378,
  239,
  966,
  221,
  381,
  381,
  248,
  232,
  65,
  1,
  421,
  386,
  677,
  252,
  27,
  500,
  211,
  34,
  94,
  249,
  597,
  47,
  268,
  46,
  41,
  963,
  886,
  992,
  255,
  66,
  670,
  228,
  690,
  676,
  1868,
  216,
  90,
  7370,
  1649,
  688,
  256,
  380,
  971,
  44,
  1,
  1,
  598,
  998,
  678,
  58,
  84,
  1284,
  1340,
  681,
  212,
  967,
  260,
  263
];

var $select = $("#selectCountry");
countries.forEach(function (country, code) {
  
  $("<option>", { text: country, val: codes[code] }).appendTo($select);
}); 
/* codes.forEach(function (code){
   $("<option>", { text:code, val: code }).appendTo($select);
}) */
$select
  .on("change", function () {
    $select.toggleClass("is-value-selected", "" !== $select.val());
  })
  .trigger("change");




/*scroll-animation*/

  ScrollOut({
    targets: '.scroll-animate',
    once: true,
    onShown(el) {
        el.classList.add("new-animate");
    }
  });


  $(function(){
    $('#selectCountry').on('change',function(){
        $('#code').addClass('active-phone')
        $('#code').val(this.value);// changing the code textbox value by current country value
    });
 });


/*validation*/


/*custom select*/

$(document).ready(function(){
  $('select').niceSelect();
});

// document.querySelector('form').addEventListener('submit', e => {

  $(".sign-up-button").on('click', function() {
    // e.preventDefault();
    var pattern = /.+@.+\..+/i;
    var myEmail = $(".email-adress").val().trim();
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,}$/;
    var myPass = $(".password").val().trim();
    var confirmPass = $(".confirm-password").val().trim();
    var myName = $(".first-name").val().trim();
    var mySurame = $(".second-name").val().trim();
    var myPhone = $(".phone-number").val().trim();

  
    if ($(".option:nth-child(1)").hasClass('selected')){
      $('.fill-country').fadeIn();
      setTimeout(() => {
        $('.fill-country').fadeOut();
      }, 4000)
    }

    if (myName == "") {
      $('#fill-name').fadeIn();
      $('#error-firstname').fadeOut();
      setTimeout(() => {
        $('#fill-name').fadeOut();
      }, 4000)
    } else if (myName.length < 2) {
      $('#error-firstname').fadeIn();
      $('#fill-name').fadeOut();
      setTimeout(() => {
        $('#error-firstname').fadeOut();
      }, 4000)
    }

    if (mySurame == "") {
      $('#fill-surname').fadeIn();
      $('#error-secondname').fadeOut();
      setTimeout(() => {
        $('#fill-surname').fadeOut();
      }, 4000)
    } else if (mySurame.length < 2) {
      $('#error-secondname').fadeIn();
      $('#fill-surname').fadeOut();
      setTimeout(() => {
        $('#error-secondname').fadeOut();
      }, 4000)
    }


    if (myEmail == "") {
      $('#fill-email').fadeIn();
      $('#error-email').fadeOut();
      setTimeout(() => {
        $('#fill-email').fadeOut();
      }, 4000)
    } else if (myEmail.search(pattern)) {
      $('#fill-email').fadeOut();
      $('#error-email').fadeIn();
      setTimeout(() => {
        $('#error-email').fadeOut();
      }, 4000)
    }

    if (myPhone.length < 5) {
      $('#fill-phone').fadeIn();
      setTimeout(() => {
        $('#fill-phone').fadeOut();
      }, 4000)
    } 

    if (myPass == "") {
      $('#error-pas-empty').fadeIn();
      $('#error-pas-incorrect').fadeOut();
      setTimeout(() => {
        $('#error-pas-empty').fadeOut();
      }, 4000)
    } else if (myPass.search(passPattern)) {
      $('#error-pas-empty').fadeOut();
      $('#error-pas-incorrect').fadeIn();
      setTimeout(() => {
        $('#error-pas-incorrect').fadeOut();
      }, 4000)
    }

    if (confirmPass == "") {
      $('#fill-confirmation').fadeIn();
      $('#error-pas-incorrect').fadeOut();
      setTimeout(() => {
        $('#fill-confirmation').fadeOut();
      }, 4000)
    } else if (confirmPass != myPass) {
      $('#fill-confirmation').fadeOut();
      $('#unmatch-pass').fadeIn();
      setTimeout(() => {
        $('#unmatch-pass').fadeOut();
      }, 4000)
    }

    if ($('.custom-checkbox').is(":checked")) {
      $('.error-checked').fadeOut('error-checked-fade');
    } else {
      $('.error-checked').fadeIn('error-checked-fade');
      setTimeout(() => {
        $('.error-checked').fadeOut('error-checked-fade');
      }, 4000)
    }
    
    
  });
// })


document.querySelector('#code').addEventListener('keydown', valid);

function valid(event) {
  if (event.key === 'Backspace') {
    event.preventDefault();
  }
}