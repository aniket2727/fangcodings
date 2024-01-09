



// height of the  tree  leetcode problems

class node {
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}



function height(node){
    if(!node){
        return 0
    }
    const leftheight=height(node.left)
    const rightright=height(node.right)
    return Math.max(leftheight,rightright)+1
}


const tree=new node(100)
tree.left=new node(200)
tree.right=new node(300)
tree.left.left=new node(500)
tree.right.right=new node(600)

const result=height(tree)
console.log(result)