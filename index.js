const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bibleQuotes = [
    { quote: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
    { quote: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { quote: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    { quote: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
    { quote: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    { quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9" },
    { quote: "The peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", reference: "Philippians 4:7" },
    { quote: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
    { quote: "Delight yourself in the Lord, and he will give you the desires of your heart.", reference: "Psalm 37:4" },
    { quote: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3" },
    { quote: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    { quote: "God is our refuge and strength, an ever-present help in trouble.", reference: "Psalm 46:1" },
    { quote: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    { quote: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", reference: "Matthew 6:34" },
    { quote: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", reference: "John 14:6" },
    { quote: "'Come to me, all you who are weary and burdened, and I will give you rest.'", reference: "Matthew 11:28" },
    { quote: "'If God is for us, who can be against us?'", reference: "Romans 8:31" },
    { quote: "'My grace is sufficient for you, for my power is made perfect in weakness.'", reference: "2 Corinthians 12:9" },
    { quote: "'The joy of the Lord is my strength.'", reference: "Nehemiah 8:10" },
    { quote: "'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.'", reference:"Matthew 5 :16"},
];

app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    const randomQuote = bibleQuotes[randomIndex];
    res.json(randomQuote);
});

app.listen(PORT);
