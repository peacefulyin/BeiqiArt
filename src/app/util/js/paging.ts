export function pagingList(list, pageSize, param) {
  const newList = [...list];
  let count = 0;
  let nowPage = 1;
  let canAddPage = true;
  const afterList = [];
  while (newList.length) {
    count += 1;
    const value = newList.shift();

    if (canAddPage) {
      afterList.push({page: nowPage, list: []});
      canAddPage = false;
    }

    const findItem = afterList.find(item => {
      return item.page === nowPage;
    });

    if (findItem) {
      findItem.list.push(value[param]);
    }

    if (count === pageSize) {
      count = 0;
      nowPage += 1;
      canAddPage = true;
    }
  }
  return afterList;
}
