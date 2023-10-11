export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const numsLessThan1 = [];
	for(let i =0; i < nums.length; i++) {
		if (nums[i] < 1) numsLessThan1.push(nums[i]);
	}
	return numsLessThan1
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const namesStartingWithChar = []
	for(let i = 0; i < names.length; i++) {
		if (names[i].startsWith(char)) namesStartingWithChar.push(names[i]);
	}
	return namesStartingWithChar;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	return words.filter(word => word.startsWith('to '));
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter(num => Number.isInteger(num));
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	return users.map(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
