const quesions = [{
    'que': 'Which of the following is a client site language?',
    'a': 'Java',
    'b': 'C',
    'c': 'Python',
    'd': 'JavaScript',
    'correct': 'd'
},
{
   'que': 'What does HTML stand for?',
   'a':  'Hypertext Markup Language',
   'b':  'Cascading Style Sheet',
   'c':  'Jason Object Notation',
   'd': 'Helicopters Terminals Motorboats Lamborginis',
    'correct': 'a'
},
{
    'que': 'What year was JavaScript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct': 'b'
},
{
    'que': 'What does CSS stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'Helicopters Terminals Motorboats Lamborginis',
    'correct': 'b'
},
{
    'que': "Which language is used for web apps?",
    'a': "PHP",
    'b': "Python",
    'c': "JavaScript",
    'd': "HTML",
    'correct': "c"
},
{
    'que': "Which company developed the Java programming language?",
    'a': "Microsoft",
    'b': "Apple",
    'c': "Sun Microsystems",
    'd': "IBM",
    'correct':'c'
},
{
    'que': "What does SQL stand for?",
    'a': "Structured Query Language",
    'b': "Strong Question Language",
    'c': "Structured Question Language",
    'd':"none",
    'correct':'a'
},
{
    'que': "What is the main function of an operating system?",
    'a': "To provide entertainment",
    'b': "To manage computer hardware and software resources",
    'c': "To act as a word processor",
    'd':  "To run a system",
    'correct':'b'
},
{
    'que': "In which year was the Python language developed?",
    'a': "1991",
    'b': "2000",
    'c': "2018",
    'd':  "2021",
   'correct':'a'
},
{
     'que': "Which protocol is used to send emails?",
     'a': "FTP",
     'b': "SMTP",
     'c': "HTTP",
     'd': "nome",
     'correct':'b'
},
{
     'que': "What is the main function of a DNS?",
     'a': "To translate domain names into IP addresses",
     'b': "To create domain names",
     'c': "To manage network traffic",
     'd': "To provide internet access",
     'correct':''
},
{
    'que': "Which of the following is a NoSQL database?",
    'a': "MySQL",
    'b': "PostgreSQL",
    'c': "MongoDB",
    'd': "SQLite",
    'correct':'c'
},
{
    'que': "Which version control system is widely used for software development?",
    'a':  "SVN",
    'b':  "Mercurial",
    'c': "CVS",
    'd': "Git",
    'correct':'d'
},
{
   'que': "Which of the following is not a type of malware?",
   'a': "Virus",
   'b': "Trojan",
   'c': "Firewall",
   'd': "Worm",
   'correct':'c'
},
{
    'que': "What is the purpose of the 'this' keyword in JavaScript?",
    'a': "To reference the current object",
    'b': "To create a new object",
    'c': "To define a variable",
    'd': "To delete an object",
    'correct':'a'
},
{
    'que': "'API' stand for?",
    'a': "Application Process Interface",
    'b': "Application Programming Interface",
    'c': "Applied Programming Interface",
    'd': "Advanced Programming Interface",
    'correct':'b'
},
{
    'que': "Which of the following is a commonly used data interchange format?",
    'a': " XML",
    'b': "CSV",
    'c': "JSON",
    'd': "All of the above",
    'correct':'d'
},
{
    'que': "What is the main purpose of a firewall?",
    'a': "To manage network traffic",
    'b': "To protect against unauthorized access",
    'c':  "To provide internet access",
    'd':  "To monitor system performance",
    'correct':'b'
},
{
    'que': "Which of the following is used for version control?",
    'a': "Docker",
    'b': "Kubernetes",
    'c':  "GitHub",
    'd': "Jenkins",
    'correct':'c'
},
{
    'que': "In JavaScript, what is a 'callback' function?",
    'a': " A function passed as an argument to another function",
    'b':  "A function that calls itself",
    'c':  "A function that returns another function",
    'd': "A function that never returns",
    'correct':'a'
}
];

    let index = 0;
    let total = quesions.length;
    let right = 0,
        wrong = 0;
    const quesBox = document.getElementById("quesBox");
    const optionInputs = document.querySelectorAll('.options');
    const loadQuestion = ()=>{
        if(index === total){
            return endQuiz();
        }
        reset();
    const data = quesions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
        
    }

    const submitQuiz = ()=>{
        const data = quesions[index];
        const ans = getAnswer();
        if(ans === data.correct){
            right++;
        }else{
            wrong++;
        }
        index++;
        loadQuestion();
        return;

    }

    const getAnswer = ()=>{
        let answer;
        optionInputs.forEach(
            (input) =>{
            if( input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
    }

    const reset = ()=>{
        optionInputs.forEach(
            (input) =>{
              input.checked = false;
        }
    )

    }

    const endQuiz = ()=>{
        document.getElementById("box").innerHTML = `
              <h3>Thanks for playing the quiz</h3>
              <h2> ${right} / ${total} are correct</h2>
              `

    }
    
    loadQuestion();