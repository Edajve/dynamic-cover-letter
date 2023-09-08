const coverMaker = templates => {
    const coverLetterTemplate = 
`${templates.fullName}
${templates.address}
${templates.city}, ${templates.state}, ${templates.zipCode}
${templates.emailAddress}
${templates.phoneNum}
${templates.date}
${templates.github}

Dear ${templates.recipientsName},
  
    I am writing to express my strong interest in the ${templates.positionTitle} position at ${templates.companyName}.
With a strong background in quality assurance and technical expertise in software development,
I am confident that my skills and dedication will greatly contribute to the success of your team.

As a Quality Engineer, I have consistently demonstrated my ability to ensure the delivery of
high-quality software solutions. I possess a deep understanding of testing methodologies and
have successfully designed and executed comprehensive test strategies. Additionally,
my technical proficiency allows me to develop efficient test automation frameworks
for web and mobile applications, back-end micro-service applications APIs and database,
as well as contribute to the improvement of tooling and processes. Through regular engagement in side projects,
I actively seek opportunities to enhance my knowledge and stay up to date with industry trends.

I am convinced that I will add significant value to your team. My strong analytical and problem-solving abilities,
combined with my attention to detail, enable me to identify and address potential software defects efficiently.
I thrive in collaborative environments and have successfully worked with cross-functional teams to lead and drive quality
initiatives and foster continuous improvement.

If any questions or want to see any of my tangible skills please check out my Github which is in the above portion
of the page. There I have full automation frameworks,from front end web and mobile Projects, for API intergration testing.
To CI build scripts using bash for deploying automation scrips. Or just plain programming skills where I program full stack apps
and test the applications by building a automation framework using Java, C#, Javascript, or TypeScript.
I am constantly learning so this Github is actively being comitted to. 

Thank you for considering my application. I would welcome the chance to
discuss in further detail how my qualifications and experience align with
the requirements of the ${templates.positionTitle} role at ${templates.companyName}. I have
attached my resume for your review, or you can reach me at ${templates.emailAddress} or ${templates.phoneNum}.
I look forward to the possibility
of contributing to your team's success.

Sincerely,

${templates.fullName}`

return coverLetterTemplate;
}

module.exports = coverMaker;