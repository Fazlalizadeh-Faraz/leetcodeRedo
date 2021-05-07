var merge = (nums1, m nums2, n) {
	//using two finger method O(N)
    let i = m-1;
    let j = n-1;
    let k = n+m-1;
    while(i >= 0 || j >= 0){
        if(i<0){
            nums1[k--]=nums2[j--];    
        }
        else if(j<0){
            nums1[k--]=nums1[i--];    
        }
        else if(nums1[i]>=nums2[j]){
            nums1[k--]=nums1[i--];
        }
        else if(nums1[i]<nums2[j]){
            nums1[k--]=nums2[j--];
        }
    }
}
