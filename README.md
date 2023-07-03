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


## To use
- Assuming you have properly filled in the steps above. In ``index.js`` file  pass in the credentials you want to be in your cover letter in the ``templates`` object.
- run ``node index.js`` to execute program.
  
