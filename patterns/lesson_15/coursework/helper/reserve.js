class Reserve {
    constructor(reserve, value) {
        this.reserve = reserve
        this.value = value
    }
     put () {
        this.reserve.push(this.value)
        return this.reserve
    }
    take () {
        return this.reserve.filter(i => i != this.value)
    }
}
export default Reserve