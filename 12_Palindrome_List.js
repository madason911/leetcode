var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow;
};

var reverseList = function (head) {
  let prev = null;

  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var isPalindrome = function (head) {
  if (!head) return null;

  let middle = middleNode(head);
  let reverse = reverseList(middle);

  while (reverse) {
    if (reverse?.val !== head?.val) return false;

    reverse = reverse.next;
    head = head.next;
  }

  return true;
};
