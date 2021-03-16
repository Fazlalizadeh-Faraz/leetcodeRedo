/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const createMap = (s) => {
        let map = new Map();
        for(sub_s in s){
            if (map.has(s[sub_s])){
                map.set(s[sub_s],map.get(s[sub_s]) + 1)
            }else{
                map.set(s[sub_s],1)
            }
        }
        return map
    }
    let mapAsc_s = new Map([...createMap(s).entries()].sort());
    let mapAsc_t = new Map([...createMap(t).entries()].sort());
    console.log("reacheds")
    console.log(mapAsc_s)
    console.log(mapAsc_t.entries() === mapAsc_s.entries())
    return false;
};

isAnagram("anagram", "nagaram")