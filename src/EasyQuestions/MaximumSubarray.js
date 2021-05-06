var maxSubArray = (nums) =>{
	let max = -Number.MAX_VALUE

	let sum = 0;

	for (var i = 0; i < nums.length -1; i++) {
		sum += nums[i]
		if(sum > max){
			max = sum
		}
		if(sum < 0){
			sum = 0
		}
	}



	return max
}
