/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const map = nums.reduce((m, n)=>{
        m[n] = (m[n] || 0) + 1
        return m
    }, {})


    let list = []
    for(let n in map){
        list.push([n, map[n]])
    }

    list.sort((a,b)=>b[1]-a[1])
    return list.filter((a, i)=>i<k).map(a=>a[0])

};