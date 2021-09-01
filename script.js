const button = document.querySelector("button");


const quotes = [
    '"The purpose of our lives is to be happy."', 
    '"You only live once, but if you do it right, once is enough."', 
    '"If you want to live a happy life, tie it to a goal, not to people or things."', 
    '"Turn your wounds into wisdom."', 
    '"Life is a succession of lessons which must be lived to be understood."', 
    '"Life is like a coin. You can spend it any way you wish, but you only spend it once."', 
    '"Life is ten percent what happens to you and ninety percent how you respond to it."', 
    '"Life’s tragedy is that we get old too soon and wise too late."',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    '"It is our choices that show what we truly are, far more than our abilities."']

const authors = ["Dalai Lama", 
                 "Mae West", 
                 "Albert Einstein", 
                 "Oprah Winfrey", 
                 "Helen Kellar", 
                 "Lillian Dickson", 
                 "Charles Swindoll", 
                 "Benjamin Franklin", 
                 "Mahatma Gandhi",
                 "J. K. Rowling"]



const displayQuote = 

button.addEventListener("click", () => {

    const quote = document.querySelector("h3");
    const author = document.querySelector("p");

    const num = Math.floor(Math.random()*10);
        
        quote.innerText = quotes[num];
        author.innerText = "--" + " " + authors[num];
});