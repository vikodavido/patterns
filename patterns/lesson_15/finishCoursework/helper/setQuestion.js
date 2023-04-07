import readlineSync from 'readline-sync';
function setQuestion (task) {
    return readlineSync.question(task)
}
export default setQuestion