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

I am particularly drawn to ${templates.companyName} for its culture of innovation and the exciting
projects the team is working on. The emphasis on pushing boundaries and creating cutting-edge
solutions resonates with my own aspirations. I am eager to contribute to a company that values
creativity, teamwork, and a commitment to excellence.

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