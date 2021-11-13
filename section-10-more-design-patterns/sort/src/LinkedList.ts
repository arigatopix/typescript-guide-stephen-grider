import { Sorter } from './Sorter';
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  // new LinkedList เป็น null ได้ แล้ว assign node
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      // first node
      this.head = node;
      return;
    }

    // add to last chain
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      // empty
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // line61 node เป็นได้ทั้ง Node | null
    // ถ้าไม่ assign TypeScript จะมองว่าเป็นแค่ Node type
    let node: Node | null = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    // TypeScript จะคิด worse case เสมอ
    // กรณีไม่เข้าเกณฑ์ if statement ทั้งหมด จะ error ที type at()
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      // check ต้องมี node ใน linkedlist
      throw new Error('List is empty!');
    }

    // ใช้ method ของ class มา compare ได้
    // เพราะ data เป็น number อยู่แล้ว
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // swap value ใน node แทนที่จะ swap ทั้ง node
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
