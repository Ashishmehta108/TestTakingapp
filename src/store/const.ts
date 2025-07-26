const imgdata = {
    "adeeti": {
        name: "ashish",
        img: "https://cf-st.sc-cdn.net/3d/render/10226021-99872979931_5-s5-v1.webp?trim=circle&scale=0&ua=2"

    },
    "ashish": {
        name: "adeeti",
        img: "https://github.com/shadcn.png"

    }
}



const quizQuestions = [
    {
        question: "What is Article 72 of the Indian Constitution about?",
        options: [
            "Distribution of taxes between Union and States",
            "Power of President to pardon or commute sentences in certain cases",
            "Rights to form associations or unions",
            "Provisions for financial emergency",
        ],
        answer: "Power of President to pardon or commute sentences in certain cases",
    },
    {
        question: "What is Article 120 of the Indian Constitution related to?",
        options: [
            "Powers of the Election Commission of India",
            "Procedure in Parliament with respect to language use",
            "Protection of certain rights regarding freedom of speech",
            "Prohibition of employment of children in factories",
        ],
        answer: "Procedure in Parliament with respect to language use",
    },
    {
        question: "What does Article 121 of the Indian Constitution deal with?",
        options: [
            "Restriction on discussion in Parliament about the conduct of judges",
            "Powers of the Governor in states",
            "Protection against arrest and detention in certain cases",
            "Prohibition of discrimination on grounds of religion",
        ],
        answer: "Restriction on discussion in Parliament about the conduct of judges",
    },
    {
        question: "What does the word 'ardent' mean?",
        options: [
            "Indifferent or uninterested",
            "Passionate or enthusiastic",
            "Cold or unfeeling",
            "Lazy or inactive",
        ],
        answer: "Passionate or enthusiastic",
    },
    {
        question: "When was the Communist Party of India (CPI) founded?",
        options: ["1925", "1920", "1947", "1935"],
        answer: "1920",
    },
    {
        question: "Who was MN Roy and what is he known for in 1924?",
        options: [
            "He established the Communist Party in Uzbekistan",
            "He led the Indian National Congress",
            "He was a prominent lawyer",
            "He founded the Rashtriya Swayamsevak Sangh (RSS)",
        ],
        answer: "He established the Communist Party in Uzbekistan",
    },
    {
        question: "When was the Congress Socialist Party formed?",
        options: ["1942", "1920", "1930", "1950"],
        answer: "1930",
    },
    {
        question: "What is the main resource in the Nellore and Ajmer belt?",
        options: ["Mica", "Coal", "Iron ore", "Copper"],
        answer: "Mica",
    },
    {
        question: "What is Article 71 of the Indian Constitution related to?",
        options: [
            "Elections of President and Vice-President",
            "Protection of personal liberty",
            "Special provisions for certain states",
            "Division of powers between the Union and the States",
        ],
        answer: "Elections of President and Vice-President",
    },
    {
        question: "Sattriya is a classical dance form associated with which spiritual figure?",
        options: [
            "Guru Ghantak Bora",
            "Guru Nanak",
            "Guru Gobind Singh",
            "Guru Padmasambhava",
        ],
        answer: "Guru Ghantak Bora",
    },
    {
        question: "Who was the first Arjuna Award winner in archery?",
        options: ["Dola Banerjee", "Deepika Kumari", "Krishna Das G", "Limba Ram"],
        answer: "Krishna Das G",
    },
    {
        question: "Who is associated with the slogan 'Inquilab Zindabad'?",
        options: [
            "Bhagat Singh",
            "Hasrat Mohani",
            "Mahatma Gandhi",
            "Lala Lajpat Rai",
        ],
        answer: "Hasrat Mohani",
    },
    {
        question: "What does the word 'reverent' mean?",
        options: [
            "Disrespectful or rude",
            "Filled with deep respect or admiration",
            "Casual or indifferent",
            "Excited or enthusiastic"
        ],
        answer: "Filled with deep respect or admiration"
    },
    {
        question: "What does the word 'vendetta' mean?",
        options: [
            "A long-standing feud or grudge",
            "A form of negotiation",
            "A peaceful resolution",
            "A public celebration"
        ],
        answer: "A long-standing feud or grudge"
    },
    {
        question: "What does the word 'truce' mean?",
        options: [
            "A permanent agreement",
            "A temporary cessation of fighting",
            "An intense argument",
            "A decisive victory"
        ],
        answer: "A temporary cessation of fighting"
    },
    {
        question: "What does the word 'fierce' mean?",
        options: [
            "Gentle or mild",
            "Intensely powerful or aggressive",
            "Calm and peaceful",
            "Joyful and happy"
        ],
        answer: "Intensely powerful or aggressive"
    },
    {
        question: "What does the word 'proviso' mean?",
        options: [
            "An unconditional agreement",
            "A condition or stipulation",
            "A formal apology",
            "A final decision"
        ],
        answer: "A condition or stipulation"
    },
    {
        question: "What does the word 'admonition' mean?",
        options: [
            "A friendly or gentle warning",
            "A praise or compliment",
            "A legal punishment",
            "An offer of help"
        ],
        answer: "A friendly or gentle warning"
    },
    {
        question: "What does the word 'callous' mean?",
        options: [
            "Emotionally insensitive or unfeeling",
            "Warm and compassionate",
            "Generous and kind-hearted",
            "Thoughtful and considerate"
        ],
        answer: "Emotionally insensitive or unfeeling"
    },
    {
        question: "Who founded the Poona Sarvajanik Sabha and when?",
        options: [
            "Sisir Ghos in 1875",
            "M. G. Ranade in 1867",
            "Dadabhai Naoroji in 1885",
            "Gopal Krishna Gokhale in 1900"
        ],
        answer: "M. G. Ranade in 1867"
    },
    {
        question: "Who founded the Indian League and when?",
        options: [
            "Sisir Ghos in 1875",
            "B. R. Ambedkar in 1930",
            "Gopal Krishna Gokhale in 1906",
            "Dadabhai Naoroji in 1900"
        ],
        answer: "Sisir Ghos in 1875"
    },
    {
        question: "When was the Indian National Association established and who was its founder?",
        options: [
            "1885, Badruddin Tyabji",
            "1906, Dadabhai Naoroji",
            "1876, Surendranath Banerjee",
            "1886, Bal Gangadhar Tilak"
        ],
        answer: "1876, Surendranath Banerjee"
    },
    {
        question: "Who was the first president of the Indian National Association?",
        options: [
            "Badruddin Tyabji",
            "Dadabhai Naoroji",
            "Gopal Krishna Gokhale",
            "Bal Gangadhar Tilak"
        ],
        answer: "Badruddin Tyabji"
    },
    {
        question: "What type of cell is primarily responsible for the growth and regeneration of the liver?",
        options: [
            "Cholangiocyte",
            "Hepatocyte",
            "Endothelial cell",
            "Kupffer cell"
        ],
        answer: "Hepatocyte"
    },
    {
        question: "The Rathwa community is primarily associated with which Indian state?",
        options: [
            "Madhya Pradesh",
            "Gujarat",
            "Maharashtra",
            "Rajasthan"
        ],
        answer: "Gujarat"
    },
    {
        question: "What is Article 280 of the Indian Constitution about?",
        options: [
            "Finance Commission",
            "Election Commission",
            "Protection of certain rights",
            "Establishment of a Central Bureau of Investigation"
        ],
        answer: "Finance Commission"
    },
    {
        question: "What does Article 263 of the Indian Constitution provide for?",
        options: [
            "Inter-state council",
            "Disputes between states",
            "Amendment of the Constitution",
            "Appointment of Governors"
        ],
        answer: "Inter-state council"
    },
    {
        question: "What is Article 239 of the Indian Constitution related to?",
        options: [
            "Union territories",
            "State legislatures",
            "Elections",
            "Emergency provisions"
        ],
        answer: "Union territories"
    },
    {
        question: "What does Article 338 of the Indian Constitution provide for?",
        options: [
            "National Commission for Scheduled Castes",
            "Election Commission",
            "Finance Commission",
            "National Human Rights Commission"
        ],
        answer: "National Commission for Scheduled Castes"
    },
    {
        question: "What is covered under Articles 315-323 of the Indian Constitution?",
        options: [
            "Public Service Commissions",
            "Fundamental Rights",
            "Election Commission",
            "Amendments to the Constitution"
        ],
        answer: "Public Service Commissions"
    },
    {
        question: "What is the focus of Articles 324-329 of the Indian Constitution?",
        options: [
            "Elections and Electoral Bodies",
            "Judicial appointments",
            "Financial administration",
            "Fundamental Duties"
        ],
        answer: "Elections and Electoral Bodies"
    },
    {
        question: "The Rathwa community is primarily associated with which Indian state?",
        options: [
            "Madhya Pradesh",
            "Gujarat",
            "Maharashtra",
            "Rajasthan"
        ],
        answer: "Gujarat"
    }
]

export { imgdata, quizQuestions }