let simpleSum = (a, b) => {
	return a+b
}

console.log(simpleSum(5,6));

let counter = {
	iterate: 0,
	increment: function(){this.iterate++; console.log("++", this.iterate)},
	decrement: function(){this.iterate--; console.log("--", this.iterate)}
}

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();


console.log(counter.iterate);