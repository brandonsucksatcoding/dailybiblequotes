const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bibleQuotes = [
    { quote: "For I know the plans I have for you, declares the Lord. Plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11" },
    { quote: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    { quote: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.", reference: "Psalm 23:1-3" },
    { quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
    { quote: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", reference: "Proverbs 3:5-6" },
    { quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9" },
    { quote: "The peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", reference: "Philippians 4:7" },
    { quote: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
    { quote: "Delight yourself in the Lord, and he will give you the desires of your heart.", reference: "Psalm 37:4" },
    { quote: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3" },
    { quote: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    { quote: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.", reference: "Psalm 46:1-2" },
    { quote: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    { quote: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", reference: "Matthew 6:34" },
    { quote: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", reference: "John 14:6" },
    { quote: "'Come to me, all you who are weary and burdened, and I will give you rest.'", reference: "Matthew 11:28" },
    { quote: "'If God is for us, who can be against us?'", reference: "Romans 8:31" },
    { quote: "'My grace is sufficient for you, for my power is made perfect in weakness.'", reference: "2 Corinthians 12:9" },
    { quote: "'The joy of the Lord is my strength.'", reference: "Nehemiah 8:10" },
    { quote:"'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.'", reference:"Matthew 5 :16"},
    { quote:"'You are the salt of the earth... You are the light of the world.'", reference:"Matthew 5 :13-14"},
    { quote:"'Whatever you do, work heartily, as for the Lord and not for men.'", reference:"Colossians 3 :23"},
    { quote:"'And now these three remain faith, hope and love. But the greatest of these is love.'", reference:"1 Corinthians 13 :13"},
    { quote:"'Do not be anxious about anything, but in every situation by prayer and petition, with thanksgiving, present your requests to God.'", reference:"Philippians 4 :6"},
    { quote:"'In all your ways acknowledge him, and he will make straight your paths.'", reference:"Proverbs 3 :6"},
    { quote:"'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary; they will walk and not be faint.'", reference:"Isaiah 40 :31"},
    { quote:"'The Lord is good to those whose hope is in him, to the one who seeks him.'", reference:"Lamentations 3 :25"},
    { quote:"'And we know that in all things God works for the good of those who love him, who have been called according to his purpose. For those God foreknew he also predestined to be conformed to the image of his Son...'", reference:"Romans 8 :28-29"},
    { quote:"'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers...'", reference:"Romans 8 :38-39"},
    { quote:"'The Lord bless you and keep you; The Lord make His face shine upon you And be gracious to you; The Lord lift up His countenance upon you And give you peace.'", reference:"Numbers 6 :24-26"},
    { quote:"'But as for me and my household, we will serve the Lord.'",reference:"Joshua 24 :15"},
    {quote:"'Trust in the Lord with all your heart And lean not on your own understanding; In all your ways acknowledge Him And He shall direct your paths.'",reference:"Proverbs 3 :5-6"},
    {quote:"'For we walk by faith, not by sight.'",reference:"2 Corinthians 5 :7"},
    {quote:"'So now faith, hope, and love abide, these three; but the greatest of these is love.'",reference:"1 Corinthians 13 :13"},
    {quote:"'He who began a good work in you will carry it on to completion until the day of Christ Jesus.'",reference:"Philippians 1 :6"},
    {quote:"'And my God will meet all your needs according to the riches of his glory in Christ Jesus.'",reference:"Philippians 4 :19"},
    {quote:"'You are my refuge and my shield; I have put my hope in your word.'",reference:"Psalm 119 :114"},
    {quote:"'The name of the Lord is a fortified tower; The righteous run to it and are safe.'",reference:"Proverbs 18 :10"},
    {quote:"'In this world you will have trouble. But take heart! I have overcome the world.'",reference:"John 16 :33"},
    {quote:"'I sought the Lord, and he answered me; he delivered me from all my fears.'",reference:"Psalm 34 :4"},
    {quote:"'Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways...'",reference:"Psalm 37 :7"},
    {quote:"'Let everything that has breath praise the Lord. Praise the Lord!'",reference:"Psalm 150 :6"},
    {quote:'“But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary; they will walk and not be faint.”',reference:'Isaiah 40:31'},
    {quote:'“The LORD is close to the brokenhearted and saves those who are crushed in spirit.”',reference:'Psalm 34:18'},
    {quote:'“Blessed are those who mourn, for they will be comforted.”',reference:'Matthew 5:4'},
    {quote:'“And we know that in all things God works for the good of those who love him.”',reference:'Romans 8:28'},
    {quote:'“For I know the plans I have for you,” declares the LORD.',reference:'Jeremiah 29:11'},
    {quote:'“The steadfast love of the LORD never ceases; his mercies never come to an end.”',reference:'Lamentations 3:22'},
    {quote:'“You keep him in perfect peace whose mind is stayed on you because he trusts in you.”',reference:'Isaiah 26:3'},
];

app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    const randomQuote = bibleQuotes[randomIndex];
    res.json(randomQuote);
});

app.listen(PORT);
