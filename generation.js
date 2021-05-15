const generateQuestions = (content) =>{
    const questionsList = content.map(({gitHub, email}) => {
        return`
        <p>If you have any questions refer to my contact info below.</p>
        <p>${email}</p>
        <a href="${gitHub}">GitHub Link</a>
        `
    });
    return `
    ${questionsList}`
}
const generateBadge = (content) => {
    var licenseBadge = 'not found';
        if(content[0].license === 'MIT'){
           licenseBadge = 'MIT';
        }
        else if(content[0].license ==='Apache'){
            console.log("apache");
            licenseBadge = 'Apache';
        }
        else if(content[0].license === 'GPLv3'){
            console.log("gpl");
             licenseBadge = 'GPLv3';
        }
        console.log(licenseBadge);
            return `
            ${licenseBadge}
            `
}
const generateTable = (content) => {
    var table = '';
    console.log(content);
        if(content.tableOfContents){
            console.log("table is true");
            table = [`
            <h1>Table of Contents</h1>
            <ol>
                <li><a href="#installation">Installation</li></a>
                <li><a href="#usage">Usage</li></a>
                <li><a href="#license">License</li></a>
                <li><a href="#contribute">Contribution</li></a>
                <li><a href="#tests">Tests</li></a>
                <li><a href="#questions">Questions</li></a>
            </ol>
            `]}
        
        return table;
    }

const generateLicense = (content) =>{
    var licenseText = 'not found';
        if(content[0].license === 'MIT'){
           licenseText = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
        }
        else if(content[0].license ==='Apache'){
            console.log("apache");
            licenseText = 'The Apache Software Foundation uses various licenses to distribute software and documentation, to accept regular contributions from individuals and corporations, and to accept larger grants of existing software products.';
        }
        else if(content[0].license === 'GPLv3'){
            console.log("gpl");
             licenseText = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
        }
const projectHtmlArr = content.map(({ license }) =>{
    
        return `
            ${license}
        `;
    });
        return`
            <section>
                ${projectHtmlArr}
                <p>${licenseText}</p>
            </section>
            `;
};
const generateSteps = (content)=> {
    console.log(content);
    const projectHtmlArr = content.map(({ step }) => {
        return `
            ${step}<br>    
          `;
      }).join('');

        return `
            <section>
                ${projectHtmlArr}
            </section>
                `;
  };
  const generatePng = (content)=> {
    console.log(content);
    const projectHtmlArr = content.map(({ enterScreenshot }) => {
        return `
            ${enterScreenshot}     
          `;
      }).join('');

    return `
      
        ${projectHtmlArr}
      
    `;
  };
module.exports = generator => {
    
const { install,screenshot,licenseList,questions } = generator 
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap" rel="stylesheet">
    <style>
    body{
        font-family: Rubik;

    }
        .licenseBadge{
            color: white;
            font-size:20px;
            background-color: black; 
            border-radius: 10px;
            width: 150px;
            text-align:center;
            padding-top:10px;
            padding-bottom:10px;

            }
    h1{
        border-top: solid 1px;
    }        
        
    </style>
    <title>${generator.projectTitle}</title>
    </head>

    <body>
    
        <h2 class = licenseBadge>${generateBadge(licenseList)}

    <h1>Your Project Title</h1>
        <p>${generator.projectTitle}</p>
    <h1>Description</h1> 
        <p>${generator.description}</p>

            ${generateTable(generator)}
    
<h1 id = installation>Installation</h1>
        <p>${generateSteps(install)}</p>

        <p><img src="${generatePng(screenshot)}"></p>

    <h1 id = usage>Usage</h1>
        <p>${generator.usage[0].usage}</p>

    <h1 id = license>License</h1>
        <p>${generateLicense(licenseList)}</p>

    <h1 id = contribute>Contribution</h1>
        <p>${generator.contributionAndTests[0].contribute}</p>

    <h1 id = tests>Tests</h1>
        <p>${generator.contributionAndTests[0].tester}</p>

     <h1 id = questions>Questions</h1>
        <p>${generateQuestions(questions)}</p>
    </body>
    </html>
     `
}