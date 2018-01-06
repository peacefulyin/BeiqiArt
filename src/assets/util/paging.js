export function pagingList(list, pageSize, param) {
  let count = 0;
  let nowPage = 1;
  let canAddPage = true;
  let afterList = [];
  while(list.length){
    count += 1;
    const value = list.shift();

    if(canAddPage){
      afterList.push({page: nowPage, list: []});
      canAddPage = false
    }

    let findItem = afterList.find(item => {
      return item.page === nowPage
    })

    if(findItem) {
      findItem.list.push(value.param)
    }

    if(count===pageSize){
      count = 0
      nowPage += 1
      canAddPage = true
    }
  }
  return afterList
}
