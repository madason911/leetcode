var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;

  while (slow?.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
