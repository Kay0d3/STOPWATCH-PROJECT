let btn = document.querySelector('#next-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let quotes = [{
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall',
    person: 'nelson mandela' 
}, {
    quote: 'Success is not how high you have climbed, but how you make a positive difference to the world',
    person: 'roy t. bennett'
}, {
    quote:'If you look at what you have in life, you will always have more. If you look at what you don\'t have in life,you will never have enough.',
    person: 'oprah winfrey'
}, {
    quote:"I do the very best i know how - the very best i can; and i mean to keep on doing so until the end",
    person: 'abraham lincoln'
}, {
    quote:"Successful and unsuccessful people do not vary greatly in their abilities. They vary in thier desires to reach their potential",
    person: 'john maxwell'
}, {
    quote:"The only way to do great work is to love what you do",
    person: 'steve jobs'
}, {
    quote:"Your time is limited, dont waste it living someone else's life",
    person: 'steve jobs'
}, {
    quote:"Believe in yourself and all that you are. Know that there is something greater than any obstacle",
    person: 'christain d. larson'
}, {
    quote:"God has a purpose for your pain, a cause for your struggle, and a gift for your faithfulness",
    person: 'rick warren'
}, {
    quote:"Prayer is not asking. It is a longing of the soul. It is daily admission of ones's weakness",
    person: 'mother teresa'
}, {
    quote:"God never said the journey would be easy, but He did say that the arrival would be worthwhile",
    person: 'max lucado'
}, {
    quote:"God doesn't call the qualified, He qualified the called",
    person: 'rick warren'
}, {
    quote:"The will for God will never take you to where grace of God  will not protect you",
    person: 'billy graham'
}, {
    quote:"Hardships often prepare ordinary people for an extraordinary destiny" ,
    person: 'c.s lewis'
}, {
    quote:"I have learned over the years that when ones's mind is made up, this diminishes fear",
    person: 'rosa parks'
}]
btn.addEventListener('click', switchQuote);

function switchQuote() {
    let random = Math.floor(Math.random() *quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    person.style.textTransform = 'uppercase'
}