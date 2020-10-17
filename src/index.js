
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if (!matrix) return [];

	let newArray = matrix.map((item, i) => {
		if (i % 2 != 0) {
			console.log(item)
			item.reverse();
		}
	})

	return matrix.flat();
}
