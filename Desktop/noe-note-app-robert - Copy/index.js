const { argv } = require('process')
const add = require('./add')
const read = require('./read')
const cmd = process.argv;

if(cmd[2] === 'add') {
    let title = cmd[3];
    let body = cmd[4];

    note = {
        title,
        body
    }
    console.log(note);
}