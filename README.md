# Dynamic Cover Letter
Quick way to add a cover letter for companies that you want to apply for
## There are some steps you'll need to set up in order to run
- Firstly, create a directory called ``secrets`` in the root of the project, create a file called ``ppi.js`` in ``secrets/`` directory resulting in a path of ``/secrets/ppi.js``.
- inside of 'ppi.js' file, paste this object but swap the credentials for yours
`module.exports.localSecrets = {
    address:  "personal info here",
    city:  "personal info here",
    state:  "personal info here",
    zipCode:  "personal info here",
}`.

## Reconfigure the output path for the saving the text files
- Now all you have to do is configure your full path so that the files are saved in the correct place
- Go to ``index.js`` look for this object `const excelPaths = {
    TEXT_FILE_PATH: '{PUT ABSOLUTE PATH FROM ROOT DIR}/allTxt/cover_letter.txt',
    OUTPUT_DIRECTORY_PATH: '{PUT ABSOLUTE PATH FROM ROOT DIR}'
}`
- pass your full path in both of these property values


## To use
- Assuming you have properly filled in the steps above. In ``index.js`` file  pass in the credentials you want to be in your cover letter in the ``templates`` object.
- run ``node index.js`` to execute program.
  
