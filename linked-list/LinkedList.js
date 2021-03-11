/**
 * 基本链表
 *
 * @export
 * @class LinkedList
 */
export default class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  /**
   * 创建节点
   *
   * @static
   * @param {*} element
   * @returns
   * @memberof LinkedList
   */
  static createNode (element) {
    return new LinkedListNode(element)
  }

  /**
   * 查找节点
   *
   * @param {*} element
   * @returns
   * @memberof LinkedList
   */
  find (element) {
    let result = null
    let cursor = this.head
    while (cursor && cursor.next && cursor.element !== element) {
      cursor = cursor.next
    }
    result = cursor
    return result
  }

  /**
   * 插入节点只链表结尾
   *
   * @param {*} node
   * @memberof LinkedList
   */
  append (node) {
    if (!this.head) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length = this.length + 1
  }

  /**
   * 任意节点处插入新节点
   *
   * @param {*} node
   * @param {*} targetNodeElement
   * @memberof LinkedList
   */
  insert (node, targetNodeElement) {
    const targetNode = this.find(targetNodeElement)
    if (targetNode) {
      node.next = targetNode.next
      targetNode.next = node
    } else if (!this.head) {
      this.head = node
    }
    this.length = this.length + 1
  }

  /**
   * 删除节点
   *
   * @param {*} element
   * @memberof LinkedList
   */
  remove (element) {
    if (!this.head) {
      return
    }
    let cursor = this.head
    while (cursor.next !== null && cursor.next.element !== element) {
      cursor = cursor.next
    }
    if (cursor.next !== null) {
      cursor.next = cursor.next.next
      this.length = this.length - 1
    }
  }

  /**
   * 展示链表结构
   *
   * @memberof LinkedList
   */
  display () {
    let cursor = this.head
    while (cursor) {
      console.log(cursor.element)
      cursor = cursor.next
    }
  }

  /**
   * 获取链表数组结构
   *
   * @returns
   * @memberof LinkedList
   */
  getArrayList () {
    const result = []
    let cursor = this.head
    while (cursor) {
      result.push(cursor.element)
      cursor = cursor.next
    }
    return result
  }

  /**
   * 链表反序
   *
   * @returns
   * @memberof LinkedList
   */
  reverse () {
    let cursor = this.head
    let prev = null

    while (cursor) {
      const next = cursor.next
      cursor.next = prev
      prev = cursor
      cursor = next
    }
    this.head = prev
    return this.head
  }
}

/**
 * 链表节点
 *
 * @class LinkedListNode
 */
class LinkedListNode {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

var linkedList = new LinkedList()
linkedList.append(LinkedList.createNode(0))
linkedList.append(LinkedList.createNode(1))
linkedList.append(LinkedList.createNode(2))
linkedList.append(LinkedList.createNode(3))
linkedList.append(LinkedList.createNode(4))
linkedList.insert(LinkedList.createNode(5))
linkedList.insert(LinkedList.createNode(6), 1)
console.log(linkedList.find(1))
console.log(linkedList.find(0))
console.log(linkedList)
console.log(linkedList.display())
console.log(linkedList.getArrayList())
console.log(linkedList.reverse())
console.log(linkedList.getArrayList())
console.log(linkedList.reverse())
console.log(linkedList.getArrayList())