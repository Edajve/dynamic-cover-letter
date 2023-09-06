# Dynamic Cover Letter
## There are some steps you'll need to set up in order to run
- Firstly, create a directory called ``secrets`` in the root of the project, create a file called ``ppi.js`` in ``secrets/`` directory resulting in a path of ``/secrets/ppi.js``.
- inside of 'ppi.js' file, paste this object but swap the credentials for yours
`module.exports.localSecrets = {
    pass: "personal info here",
    address:  "personal info here",
    city:  "personal info here",
    state:  "personal info here",
    zipCode:  "personal info here",
}`.

## Reconfigure the output path for the saving the text files
- Now all you have to do is change the path to where you want the dynamic text files to be saved
- Go to ``index.js`` look for this object `const excelPaths = {
    TEXT_FILE_PATH: 'cover_letter.txt',
    OUTPUT_DIRECTORY_PATH: '{PUT THE PATH OF WHERE YOU WANT THE TEXT FILES TO BE SAVED}'
}`
- You can also change the name of the text files with the property above


## To use
- Assuming you have properly filled in the steps above. In ``index.js`` file  pass in the credentials you want to be in your cover letter in the ``templates`` object.
- run ``node index.js`` to execute program.
  
