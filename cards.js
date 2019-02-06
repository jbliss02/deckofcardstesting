var card1;
var card2;
var card3;

$('document').ready(function(){
    TestCards();
});

function TestCards() {
    var $container = document.getElementById('container');
    var $card1 = document.getElementById('card1');
    var $card2 = document.getElementById('card2');
    var $card3 = document.getElementById('card3');

    // create Deck
    var deck = Deck();
    
    // add to DOM
    deck.mount($container);
    deck.shuffle();

    card1 = deck.cards[0];
    card1.enableDragging();
    card1.enableFlipping();
    //card1.flip();
    card1.mount($card1);

    card2 = deck.cards[1];
    card2.enableDragging();
    card2.enableFlipping();
    card2.mount($card2);

    card3 = deck.cards[2];
    card3.enableDragging();
    card3.enableFlipping();
    card3.mount($card3);


    // card1.flip();
    // card2.flip();

}