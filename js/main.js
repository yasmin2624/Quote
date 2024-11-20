var arrayOfQuotes = [
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Mark Twain', 
     'quote': "If you tell the truth, you don't have to remember anything."
    },
];

function generateQuote() {
    var randomQuote = Math.floor(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[randomQuote].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[randomQuote].author}`;
}
