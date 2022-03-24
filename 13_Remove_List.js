var removeElements = function (head, val) {
  let result = new ListNode(0, head);
  let current = result;

  while (current?.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
};
