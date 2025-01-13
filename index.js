const getProperties = (obj, target) => {
	for (let key of Object.keys(obj)) {
		if (key === target) {
			return true;
		}
	}
	return false;
}
const obj = { name: "John", age: 30, city: "New York" };
console.log(getProperties(obj, "name"));