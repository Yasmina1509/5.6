function changecolor() {
    let bgcolor = prompt('Enter Background color:');
    if (bgcolor) {
      document.body.style.backgroundColor = bgcolor; 
    }

    let textcolor = prompt('Enter Text color:');
    if (textcolor) {
      document.body.style.color = textcolor;
    }
}

let text = document.createElement('p');
text.textContent = ("A book is one of the greatest wonders of world. Why are so many people fond of reading? The world of books is full of wonders. You and characters of books can find yourselves in different countries and have a lot of adventures. The book is a faithful friend. They form our values and characters. We try to look like the characters of our favourite books: to be brave, honest, not to be silly and greedy, to be true friends. We enjoyed the beauty and wisdom of fairy-tales and fables when we were babies and Granny read them to us. They taught us to be kind, clever, hardworking, to understand other people and help them. They teach us to understand the beauty of nature, take care of it, to love our homeland. Books have been with us since childhood. "
)
document.body.appendChild(text);

//text.style.fontSize= 

window.onload = changecolor;