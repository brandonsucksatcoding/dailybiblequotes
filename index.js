const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.API_KEY;

const bibleQuotes = [
    { quote: "For I know the plans I have for you, declares the Lord. Plans to prosper you and not to harm you, plans to give you hope and a future.", reference: "Jeremiah 29:11", meaning: "God has good plans for your life and wants you to be hopeful." },
    { quote: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13", meaning: "With Jesus' help, I can achieve anything." },
    { quote: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.", reference: "Psalm 23:1-3", meaning: "God takes care of me and gives me peace." },
    { quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28", meaning: "God makes everything work out for those who love Him." },
    { quote: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", reference: "Proverbs 3:5-6", meaning: "Put your faith in God completely, and He will guide you." },
    { quote: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", reference: "Joshua 1:9", meaning: "Be brave; God is always with you." },
    { quote: "The peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", reference: "Philippians 4:7", meaning: "God's peace will protect your heart and mind." },
    { quote: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7", meaning: "Give all your worries to God because He cares about you." },
    { quote: "Delight yourself in the Lord, and he will give you the desires of your heart.", reference: "Psalm 37:4", meaning: "Enjoy being with God, and He will fulfill what you truly want." },
    { quote: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3", meaning: "God helps those who are sad and hurting." },
    { quote: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14", meaning: "Let God handle your battles; just stay calm." },
    { quote: "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.", reference: "Psalm 46:1-2", meaning: "God is always there to help us, so we shouldn't be afraid." },
    { quote: "Let all that you do be done in love.", reference: "1 Corinthians 16:14", meaning: "Do everything with love." },
    { quote: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.", reference: "Matthew 6:34", meaning: "Don't stress about tomorrow; focus on today." },
    { quote: "Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.'", reference: "John 14:6", meaning:"'I am the only way to know God.'" },
    { quote:"'Come to me, all you who are weary and burdened, and I will give you rest.'", reference:"Matthew 11:28", meaning:"If you're tired or stressed, come to me for comfort." },
    { quote:"'If God is for us, who can be against us?'", reference:"Romans 8 :31", meaning:"If God supports us, no one can defeat us." },
    { quote:"'My grace is sufficient for you, for my power is made perfect in weakness.'", reference:"2 Corinthians 12 :9", meaning:"God's kindness is enough for us; He shines through our weaknesses." },
    { quote:"'The joy of the Lord is my strength.'", reference:"Nehemiah 8 :10", meaning:"Finding happiness in God gives me strength." },
    { quote:"'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.'", reference:"Matthew 5 :16", meaning:"Show kindness so others can see God's goodness." },
    { quote:"'You are the salt of the earth... You are the light of the world.'", reference:"Matthew 5 :13-14", meaning:"You bring flavor and brightness to the world." },
    { quote:"'Whatever you do, work heartily, as for the Lord and not for men.'", reference:"Colossians 3 :23", meaning:"Do everything as if you're doing it for God." },
    { quote:"'And now these three remain faith, hope and love. But the greatest of these is love.'", reference:"1 Corinthians 13 :13", meaning:"Faith, hope, and love are important, but love is the best." },
    { quote:"'Do not be anxious about anything, but in every situation by prayer and petition, with thanksgiving, present your requests to God.'", reference:"Philippians 4 :6", meaning:"Don't worry; talk to God about everything." },
    { quote:"'In all your ways acknowledge him, and he will make straight your paths.'", reference:"Proverbs 3 :6", meaning:"Recognize God in everything; He'll guide you." },
    { quote:"'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary; they will walk and not be faint.'", reference:"Isaiah 40 :31", meaning:"Those who trust God will gain new energy." },
    { quote:'“The LORD is close to the brokenhearted and saves those who are crushed in spirit.”',reference:'Psalm 34:18',meaning:'God helps those who are sad.'},
    {quote:'“Blessed are those who mourn, for they will be comforted.”',reference:'Matthew 5:4',meaning:'Those who are sad will find comfort.'},
    {quote:'“And we know that in all things God works for the good of those who love him.”',reference:'Romans 8:28',meaning:'God makes everything turn out well for those who love Him.'},
    {quote:'“For I know the plans I have for you,” declares the LORD.',reference:'Jeremiah 29:11',meaning:'God has good plans for your life.'},
    {quote:'“The steadfast love of the LORD never ceases; his mercies never come to an end.”',reference:'Lamentations 3:22',meaning:'God’s love never stops; His kindness never ends.'},
    {quote:'“You keep him in perfect peace whose mind is stayed on you because he trusts in you.”',reference:'Isaiah 26:3',meaning:'Those who trust God will have peace.'},
    {quote:'“Cast all your anxiety on him because he cares for you.”',reference:'1 Peter 5:7',meaning:'Give all your worries to God because He cares about you.'},
];

app.use((req, res, next) => {
    const apiKey = req.query.apikey;
    if (!apiKey || apiKey !== API_KEY) {
        return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
    }
    next();
});

app.get('/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    const randomQuote = bibleQuotes[randomIndex];
    
    res.json(randomQuote);
});

app.listen(PORT);
